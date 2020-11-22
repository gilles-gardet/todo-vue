<template>
  <div id="todos">
    <v-card elevation="2" class="todo" :class="{'card-done': done}">
      <v-checkbox :value="done" input-value="carId" v-model="done"/>
      <span :class="{'done': done}">{{ msg }}</span>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Todo',
  done: true,
  props: {
    msg: String
  },
  data() {
    return {
      name: '',
      done: false
    };
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
#todos {
  margin: 2.5em;
  display: flex;
  justify-content: center;

  .done {
    text-decoration: line-through;
  }

  .todo {
    width: 800px;
    min-height: 2em;
    display: flex;
    align-items: center;
    padding-left: 2em;

    &.card-done {
      background-color: lightgrey;
    }
  }
}

</style>
