<template>
  <div id="todos">
    <v-card elevation="2" class="todo">
      <v-checkbox />
      <span>{{ msg }}</span>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Todo',
  props: {
    msg: String
  },
  data() {
    return {
      name: ''
    };
  }
}
</script>

<style scoped>
#todos {
  margin: 2.5em;
  display: flex;
  justify-content: center;
}
.todo {
  width: 800px;
  min-height: 2em;
  display: flex;
  align-items: center;
  padding-left: 2em ;
}
</style>
