<template>
  <div class="container-fluid">
    <div class="row content">
      <div class="col-md-6 mb-5">
        <img
          src="../assets/img/todolist_img.svg"
          class="img-fluid"
          alt="cart"
        />
      </div>
      <div class="col-md-5 form">
        <h3 class="signin-text fs-1">TO-DO LIST</h3>
        <form @submit.prevent="handleLogin">
          <div class="form-group mb-3">
            <input
              type="email"
              name="email"
              v-model="email"
              class="form-control"
              placeholder="Insira seu email"
            />
          </div>
          <div class="form-group mb-3">
            <input
              type="password"
              name="password"
              class="form-control"
              v-model="password"
              placeholder="Insira sua senha"
            />
          </div>
          <div class="d-grid mb-1">
            <button type="submit" class="btn btn-primary">
              Login
            </button>
          </div>
          <div class="d-grid">
            <button type="button" class="btn btn-primary" @click="registerUser">
              Cadastre-se
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import http from '@/services/http.js';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async handleLogin() {
      try {
        const content = { password: this.password, email: this.email };
        const data = await http.post('/', content);
        if (data?.status === 200) {
          localStorage.setItem('userData', JSON.stringify(data.data));
          this.$router.push('/tasks');
        }
      } catch (error) {
        alert(error?.response?.data.message);
      }
    },
    registerUser() {
      this.$router.push('/user');
    },
  },
};
</script>

<style scoped>
.container-fluid {
  font-family: 'Poppins', sans-serif;
}
.content {
  padding: 4rem 1rem;
  margin: 8%;
}
.signin-text {
  text-align: center;
  margin: 0 0 8%;
  color: #00ac96;
}

.form-control:focus {
  color: #495057;
  border-color: #fff;
  box-shadow: 1px 1px 10px #00ac96;
}

.btn {
  background-color: #00ac96;
  color: #fff;
  border: none;
}
.btn:hover {
  background-color: #fff;
  color: #00ac96;
  border: 1px solid #00ac96;
}
</style>
