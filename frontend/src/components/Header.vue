<template>
  <nav
    class="navbar navbar-expand-lg navbar-light"
    style="background-color: #00ac96"
  >
    <div class="container-fluid" id="navbarNav">
      <h1 class="navbar-brand fs-3">To-Do List</h1>
      <div class="align-items-center">
        <p class="d-inline name">{{ name }}</p>
        <button class="btn" @click="logout">
          <font-awesome-icon
            class="icon"
            :icon="['fas', 'fa-right-from-bracket']"
          />
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      name: '',
    };
  },
  methods: {
    logout() {
      this.$router.push('/');
      localStorage.clear();
    },
  },
  mounted() {
    const userName = JSON.parse(localStorage.getItem('userData'));
    this.name = userName.name;
  },
};
</script>

<style scoped>
h1,
.name,
.icon {
  color: white;
}
</style>
