<template>
  <div>
    <v-card elevation="2">
      Test
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

<style scoped></style>
