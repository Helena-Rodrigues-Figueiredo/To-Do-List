<template>
  <div>
    <div class="add-task input-group mb-3">
      <input
        type="text"
        class="form-control"
        v-model="taskInput"
        placeholder="Adicione uma tarefa"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
      />
      <button
        class="btn add-button"
        type="button"
        id="button-addon2"
        @click="createTask"
      >
        {{ addButton }}
      </button>
    </div>
    <ul class="list-group">
      <li
        class="list-group-item d-flex justify-content-between align-items-center each-task"
        v-for="task in allTasks"
        :key="task.id"
      >
        <div class="form-check">
          <input
            type="checkbox"
            :id="task.id"
            :name="task.item"
            @click="changeStatus"
            :checked="task.status == 'Concluído'"
            class="form-check-input"
          />
          <label :for="task.id" class="form-check-label">
            {{ task.item }}
          </label>
        </div>
        <div>
          <button
            type="button"
            :value="task.status"
            :name="task.item"
            :id="task.id"
            @click="updateTask"
            :disabled="isEditButtonsDisabled"
            class="btn btn-light btn-sm me-2 edit-btn"
          >
            <font-awesome-icon style="pointer-events: none" icon="edit" />
          </button>
          <button
            type="button"
            class="btn btn-light btn-sm delete-btn"
            :id="task.id"
            @click="deleteTask"
          >
            <font-awesome-icon style="pointer-events: none" icon="trash" />
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import http from '@/services/http.js';

export default {
  name: 'Tasks',
  data() {
    return {
      allTasks: null,
      addButton: 'Adicionar tarefa',
      taskInput: '',
      taskStatus: '',
      isEditButtonsDisabled: false,
      editTask: 'null',
    };
  },

  components: {
    Header,
  },

  methods: {
    async getTasks() {
      try {
        const userData = JSON.parse(localStorage.getItem('userData'));
        const result = await http.get(`/tasks/${userData.id}`);
        this.allTasks = result.data;
      } catch (error) {
        console.log(error?.response?.data.message);
      }
    },

    async changeStatus(e) {
      try {
        if (e.target.checked) {
          await http.put(`/tasks/${+e.target.id}`, {
            id: e.target.id,
            item: e.target.name,
            status: 'Concluído',
          });
        } else {
          await http.put(`/tasks/${+e.target.id}`, {
            id: e.target.id,
            item: e.target.name,
            status: 'Pendente',
          });
        }
      } catch (error) {
        console.log(error?.response?.data.message);
      }
    },

    async deleteTask(e) {
      try {
        await http.delete(`/tasks/${+e.target.id}`);
        console.log(e.target.id);
        this.getTasks();
      } catch (error) {
        console.log(error?.response?.data.message);
      }
    },

    async createTask() {
      if (this.taskInput.length === 0) {
        return alert('O campo de tarefa está vazio!');
      }
      try {
        if (this.addButton === 'Adicionar tarefa') {
          const userData = JSON.parse(localStorage.getItem('userData'));
          await http.post(`/tasks/${userData.id}`, {
            item: this.taskInput,
            status: 'Pendente',
            userId: userData.id,
          });
          this.getTasks();
          this.taskInput = '';
        } else {
          await http.put(`/tasks/${+this.editTask}`, {
            item: this.taskInput,
            status: this.taskStatus,
            userId: this.editTask,
          });
          this.getTasks();
          this.isEditButtonsDisabled = false;
          this.taskInput = '';
          this.taskStatus = '';
          this.addButton = 'Adicionar tarefa';
        }
      } catch (error) {
        console.log(error?.response?.data.message);
        // git
      }
    },

    async updateTask(e) {
      const { name, value, id } = e.target;
      this.isEditButtonsDisabled = true;
      this.addButton = 'Concluir alterações';
      this.taskInput = name;
      this.taskStatus = value;
      this.editTask = id;
    },
  },

  mounted() {
    this.getTasks();
  },
};
</script>

<style scoped>
.task-view {
  font-family: 'Poppins', sans-serif;
}
.add-task {
  width: 80%;
  margin: 10px auto;
}
.each-task {
  width: 60%;
  margin: 0px auto;
}
.checkbox {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
}
.form-control {
  box-shadow: none;
  border: 1px solid #00ac96;
}
.add-button {
  background-color: #00ac96;
  color: #fff;
  border: none;
}
.add-button:hover {
  background-color: #fff;
  color: #00ac96;
  border: 1px solid #00ac96;
}
.delete-btn {
  color: red;
}
.edit-btn {
  color: #00ac96;
}
.form-check-input {
  border-radius: 50%;
}
</style>
