<template>
    <section>
        <div v-if="loaded">
          <div class="columnClassTerm">
            <p id="SearchTerm"> Tweets with the term: {{ classTerm }}  </p>
            <ol>
              <li v-for="(tweet,index) in twitterStuff.classTermTweets" :key="index"> 
                {{ tweet }}
              </li>
            </ol>
            <p id="Score"> Score: {{ classTermScore}} </p>
          </div>
          <div class="columnUserTerm">
            <p id="SearchTerm"> Tweets with the term: {{ term }} </p>
            <ol>
              <li v-for="(tweet,index) in twitterStuff.userTermTweets" :key="index"> 
                {{ tweet }}
              </li>
            </ol>
            <p id="Score"> Score: {{ userTermScore}} </p>
          </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
import Sentiment from 'sentiment'
var sentiment = new Sentiment();


export default {
  name: 'DataVis',
  props: {
      term: String,
  },
  data () {
    return {
        loaded: false,
        twitterStuff: Array,
        classTerm: String,
        userTermScore: Number,
        classTermScore: Number
    }
  },
  methods: {
    analyze: function( arr ) {
      let totalScore = 0;
      let result;
      arr.forEach(text => {
        result = sentiment.analyze(text)
        totalScore += result.score
      })

      return totalScore/arr.length
    }
  },
  mounted () {
     axios.get(`http://localhost:8080/api/${this.term}`, {
     }).then(response => {
         this.twitterStuff = response.data
         this.classTerm = response.data.classTerm
         
         this.classTermScore = this.analyze(response.data.classTermTweets);
         this.userTermScore = this.analyze(response.data.userTermTweets);
         
         this.loaded = true;

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

<style>

.columnClassTerm {
  width: 45%;
  float: left;
}

.columnUserTerm {
  width: 45%;
  float: right;
}

li {
  margin: 10px 0;
}

#SearchTerm {
  font-size: 30px;
  font-weight: bold;
}


#Score {
  font-size: 20px;
  font-weight: bold;
}
</style>