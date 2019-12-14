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
        loaded: false,
        twitterStuff: Array
    }
  },
  mounted () {
     axios.get('http://localhost:8080/api/', {
     }).then(response => {
         this.twitterStuff = response.data
         this.loaded = true;
         console.log(response.data)
     }).catch(function (error) {
		if (error.response) {
		  console.log(error.response.headers);
		} 
		else if (error.request) {
	      console.log(error.request);
		} 
		else {
		  console.log(error.message);
		}
	console.log(error.config);
    });
  }
}
</script>
