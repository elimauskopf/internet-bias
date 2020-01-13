<template>
  <section>
    <input v-model="term" placeholder="ie: baseball">
      <button @click="goToDataVis(term)" type="submit"> Go! </button> 
  </section>
</template>

<script>
export default {
  name: 'LandingPage',
  data () {
    return {
      term: "",
    }
  }, 
  methods: {
    goToDataVis: function (term) {
      if(term != '') {
          this.$router.push({path: `/datavis/${term}`})
      } 
    }
  }
}
</script>

<style>
input {
  width: 200px;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border-radius: 4px;
}

input:focus {
  border: 3px solid green
}

button {
  background-color: #44e206;
  border: 2px solid green;
  padding: 10px 20px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>

