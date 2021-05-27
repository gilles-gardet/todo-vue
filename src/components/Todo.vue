<template>
  <div id="todos">
    <v-card elevation="2" class="todo" :class="{'card-done': todoState}">
      <v-checkbox input-value="carId" v-model="todoState"/>
      <span :class="{'done': todoState}">{{ msg }}</span>
    </v-card>
  </div>
</template>

<script lang="ts">
export default {
  done: true,
  msg: '',
  props: {
    msg: String,
    done: Boolean
  },
  data() {
    return {
      todoState: this.done,
    };
  },
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

