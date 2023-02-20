<template>
  <div class="container-fluid">
    <div class="row content">
      <div class="col-md-6 mb-3">
        <img src="../assets/img/register.svg" class="img-fluid" alt="cart" />
      </div>
      <div class="col-md-5 form">
        <h3 class="signin-text fs-1">Preencha seus dados</h3>
        <form @submit.prevent="createUser">
          <div class="form-group mb-3">
            <input
              type="text"
              id="name"
              name="name"
              v-model="name"
              class="form-control"
              placeholder="Insira seu nome"
            />
          </div>
          <div class="form-group mb-3">
            <input
              type="email"
              name="email"
              id="email"
              v-model="email"
              class="form-control"
              placeholder="Insira seu email"
            />
          </div>
          <div class="form-group mb-3">
            <input
              type="password"
              name="password"
              id="pasword"
              class="form-control"
              v-model="password"
              placeholder="Insira sua senha"
            />
          </div>
          <div class="d-grid mb-1">
            <button type="submit" class="btn btn-primary">
              Cadastrar
            </button>
          </div>
          <div class="d-grid">
            <button
              type="button"
              class="btn btn-primary"
              @click="backToLoginPage"
            >
              Voltar
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
  name: 'User',
  data() {
    return {
      name: null,
      email: null,
      password: null,
    };
  },
  methods: {
    async createUser() {
      const content = {
        name: this.name,
        email: this.email,
        password: this.password,
      };
      try {
        const result = await http.post('/user', content);
        localStorage.setItem('userData', JSON.stringify(result.data));
        this.$router.push('/tasks');
      } catch (error) {
         alert(error?.response?.data.message);
      }
    },
    backToLoginPage() {
      this.$router.push('/');
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
  margin: 4%;
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
