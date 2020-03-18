<template>
   <div class="back">
      <link href='https://fonts.googleapis.com/css?family=Clicker Script' rel='stylesheet'>
   <ul>
  <li><a class="active" @click="home()">Home</a></li>
  
  </ul>
           
   <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <img src="https://217090-659236-1-raikfcquaxqncofqfm.stackpathdns.com/media/wysiwyg/career.png">

      <q-card-section>
        <div class="text-h6"> Be a part of our story</div>
        <div class="text-subtitle2">We're always looking for great folks to join us on our mission.</div>
      </q-card-section>
       <q-card-section>
       
 If you want to be a part of our story, we'd love to chat. Explore our careers section to see if there's a role that excites you. If there isn't one and we like each other, we'll create one for you.
      </q-card-section>
      </q-card>
       <q-card class="my-card">
      <img src="https://b.zmtcdn.com/images/hero-bg/bg-hero-about3.jpg?output-format=web">

      <q-card-section>
        <div class="text-h6">Our mission is to ensure
nobody has a bad meal.</div>
        
      </q-card-section>
       <q-card-section>
        We do this by
Helping people discover great places around them and building amazing experiences around dining.
      </q-card-section>
      </q-card>
      
     <q-card class="my-card">
      <img src="https://wondersinthedark.files.wordpress.com/2013/07/1999.jpg">

      <q-card-section>
        <div class="text-h6">Family like love  with our food since 1999</div>
        
      </q-card-section>
       <q-card-section>
        
      </q-card-section>
      </q-card>
      
      </div>
      <div style="background-color:	#DCDCDC; padding-top: 181px; padding-bottom:60px">
         </div>
      </div>
</template>

<script>
export default {
    data(){
       return{
          lorem: "Work with us!"
       }
    },
    methods:{
       home(){
          this.$router.push('/')
       }
    }
}
</script>

<style lang="stylus" scoped>
.my-card
  width 100%
  max-width 450px
  
</style>
<style>
 ul {
  list-style-type: none;
  margin: 0;
  padding: 3px;
  overflow: hidden;
  background-color:rgb(25, 105, 38);
}

li {
  float: right;
}

li a {
   font-family: 'Clicker Script';
  font-size: 22px;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/*li a:hover {
  background-color: #111;
}*/
</style>

