<template>
    <section>
        <p> {{ term }} </p>
        <div v-if="loaded">
            {{ twitterStuff }}
        </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'DataVis',
  props: {
      term: String
  },
  data () {
    return {
        loaded = false
    }
  },
  computed: {
      twitterStuff: []
  },
  mounted () {
      axios.get(`https://api.twitter.com/1.1/search/tweets.json?q=%5${term}&result_type=popular`)
      .then( (response) => {
          this.twitterStuff = response.data
          this.loaded = true;
      } )
  }
}
</script>
