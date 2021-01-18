<template>
  <div class="hello">
      <router-link to="/chat" target="_blank" style="margin-right:15px;" rel="noopener">Ваши чат-боты</router-link>
      <router-link to="/balans" target="_blank" style="margin-right:15px;" rel="noopener">Ваш баланс</router-link>
      <router-link to="/tarif" target="_blank" style="margin-right:15px;" rel="noopener">Тарифы</router-link>
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
