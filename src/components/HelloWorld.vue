<template>
  <div class="hello">
      <router-link to="/chat" style="margin-right:15px;">Ваши чат-боты</router-link>
      <router-link to="/balans" style="margin-right:15px;">Ваш баланс</router-link>
      <router-link to="/tarif" style="margin-right:15px;">Тарифы</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
