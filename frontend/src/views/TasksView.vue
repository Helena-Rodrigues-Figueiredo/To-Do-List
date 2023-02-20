<template>
  <div class="task-view">
    <Header />
    <Tasks />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Tasks from '@/components/Tasks.vue';

export default {
  components: {
    Header,
    Tasks
  }
};
</script>