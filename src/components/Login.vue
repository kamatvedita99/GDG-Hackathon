<template>
<div>
   <link href='https://fonts.googleapis.com/css?family=Clicker Script' rel='stylesheet'>
    <q-page class="flex flex-center">
    <img class="img" src="http://eskipaper.com/images/spices-background-1.jpg" width="1517" height="729">
  </q-page>
<div class="fixed-center" style="max-width: 400px; margin-right: 400px" >
    <div color="#0000FF">
    
    <h4 class="a">Login</h4></div>
    <q-form
      @submit="submitLogin"
      
      class="q-gutter-md"
    >
      <q-input
        filled
        color="#0000FF"
        v-model="name"
        label="Enter Username"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input 
      filled 
      color="#0000FF"
      v-model="pword" 
      label="Enter Password" 
      type="password" 
      float-label="Password" 
      :rules="[ val => val && val.length > 0 || 'Please type something']"/>
      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
    </div>
    </q-form>
   
   </div>
</div>

   </template>

<script>

//import {mapGetters}from 'vuex'
export default {
  data()
    {
     return{
       name:'',
       pword:'',
       storeData: [],
       
      }
    },
  
  methods: { 
   
   submitLogin () {
     for(var i=0;i<this.$store.getters.getUser.length;i++)
        {
            if(this.$store.getters.getUser[i].UserName==this.name)
             {
              this.storeData[0]=this.$store.getters.getUser[i].UserName 
              this.storeData[1]=this.$store.getters.getUser[i].pword
              }
        } 
          
     if(this.storeData[0]==this.name && this.storeData[1]==this.pword )
      {
          this.$router.push('/orderpage')
      }
         else
             {
                this.$router.push('/*')
            }
     }
   }
} 
</script>
<style>
.a{
   font-family: 'Clicker Script';
  font-size: 70px;
}
h4{
    font-family: 'Sofia';
       font-size: 50px;

}
.img{
  opacity: 0.8
}
</style>

