<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input v-model="term" placeholder="baseball">
    <p> Term is: {{ term }} </p>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  props: {
    msg: String
  },
  data () {
    return {
      term: ""
    }
  }
}
</script>

