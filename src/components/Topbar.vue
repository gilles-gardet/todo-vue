<template>
  <div>
    <v-app>
      <v-app-bar color='primary' dense dark>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>Todos</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-menu left bottom>
          <template v-slot:activator='{ on, attrs }'>
            <v-btn icon v-bind='attrs' v-on='on'>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for='n in 5' :key='n' @click='() => {}'>
              <v-list-item-title>
                Option {{ n }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
      <v-main class='todos'>
        <Todo v-for='(todo, index) in todos' :key='index' :msg='todo.content' :done='todo.done'/>
      </v-main>
    </v-app>
  </div>
</template>

<script lang='ts'>
import Todo from './Todo.vue';
import axios from 'axios';
import Vue from 'vue';

export default Vue.extend({
  name: 'Topbar',
  props: {
    msg: String
  },
  components: {
    Todo
  },
  data() {
    return {
      name: '',
      todos: [],
    };
  },
  mounted() {
    axios
        .get('http://localhost:8080/todo/api/todos')
        .then(response => this.todos = response.data._embedded.todos)
        .catch(error => console.error(error));
  }
})
</script>

<style lang='scss' scoped>
.todos {
  height: 100vh;
}
</style>
