<template>
  <div class="hello">
    <input v-model="term" placeholder="baseball">
      <button @click="goToDataVis(term)" type="submit"> Go! </button> 

    <p> Term is: {{ term }} </p>
  </div>
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

