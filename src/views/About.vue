<template>
  <div class="About">
    <p> This site is my final project for my  Intro to Women's and Gender Studies class with professor Jenna Christian. 
      The building of this site was inspired by observations I made in class throughout the year relating to how the internet reacted to topics we 
      discussed in class. For instance, our professor once showed us a video called “The Surprisingly Racist History of “Caucasian”.  The video was 
      informative and clearly explained the reasoning for such a title. Despite this, the video had significantly more dislikes than likes and several 
      comments attacked the content of the video and the person presenting, Franchesca Ramsey. Furthermore, another video we watched for class called “Damsel in Distress: 
      Tropes vs Women in Video Games”, received a similar and frustrating response. To most internet users, this isn’t surprising. It it is common knowledge
      that places such as youtube comments, or certain forums on reddit are prone to vitriolic behavior, especially towards women and progressive ideas. 
      I brought up my observations to my professor who shared a personal anecdote with me that echoed a lot of the same behavior. I did some more research 
      on the topic and found two articles which I linked below. These articles delved into the gamergate controversy and discussed what proponents of said
      movement stood for. What I found is that the people behind gamergate are mostly male and have an extremely negative opinion of feminism, diversity 
      and criticism of male behavior. These foundational ideas they hold end up becoming the source of the negative comments and like ratios that I have
      described. These findings then led to my Thesis statement,  
         <span class="Thesis">
           The anonymity of the internet and its echo chamber communities have spurred an extreme 
           negative bias towards progressive values such as feminism and gender equality.
          </span>
      To support this thesis I decided to build this website and gather 
      metrics such as tweets, reddit comments, and YouTube like ratios to visualize said bias. For now the site only displays tweets relating to topics 
      we discussed in class versus a topic the user chooses. Furthermore, there is sentiment analysis done on each tweet and the mean score of all the 
      tweets is displayed. The higher the score the more positive and the lower the more negative. Since I am only able to display tweets I have not been 
      able to gather as much data as I would have liked but I have made a few key discoveries. Most importantly, terms we discussed in class that are often
      brought up in the media score significantly lower than others. For instance the term “Feminism” almost always receives a negative score while the term 
      “intersectionality” scores extremely high. This leads me to believe that media outlets such as Fox News, who consistently portray ideas such as feminism 
      in a negative light, play a large role in fostering the negative bias. I hope that in time I will be able to add more metrics to the site and help visitors
      get a better understanding of just how serious and widespread this negative bias is. 
    </p>
    <div>
      <h2> Citations </h2>
      <ol>
        <li> Anita Sarkeesian & Jonathan McIntosh (2013). Damsel in Distress:
           Part 1 - Tropes vs Women in Video Games, 
            <a href="https://www.youtube.com/watch?v=X6p5AZp7r_Q&feature=emb_title"> https://www.youtube.com/watch?v=X6p5AZp7r_Q&feature=emb_title </a>
        </li>
        <li> Franchesca Ramsey and MTV (2016). The Surprisingly Racist History of "Caucasian" , from 
          <a href="https://www.youtube.com/watch?v=X6p5AZp7r_Q&feature=emb_title"> https://www.youtube.com/watch?v=X6p5AZp7r_Q&feature=emb_title </a> 
        </li>
        <li> 
          The internet is full of men who hate feminism. Here's what they're like in person.. (2015). Emmett Rensin, Vox. from
          <a href="https://www.vox.com/2015/2/5/7942623/mens-rights-movement"> https://www.vox.com/2015/2/5/7942623/mens-rights-movement </a>
        </li>
        <li>
          What Gamergate should have taught us about the 'alt-right'. (2016). Matt Lees, the Guardian. from 
          <a href="https://www.theguardian.com/technology/2016/dec/01/gamergate-alt-right-hate-trump"> https://www.theguardian.com/technology/2016/dec/01/gamergate-alt-right-hate-trump </a>
        </li>
      </ol>
    </div>
  </div>
</template>

<style>

.Thesis {
  text-decoration: underline;
}
.About {
  margin-left: 200px;
  margin-right: 200px;
  font-size: 17px;
}

@media all and (min-width:100px) and (max-width: 959px) {
  .About {
    margin: 5%;
    font-size: 14px;
  }

}

</style>