<template>
  <div>
    <link href="https://fonts.googleapis.com/css?family=Clicker Script" rel="stylesheet" />
    <div style="background-color:rgb(25, 105, 38); margin: 0;
  padding: 3px;
  overflow: hidden">
      <q-btn color="green" @click="goBack()">HOME</q-btn>
    </div>
   

    <div class="row">
      <div class="column">
        <div class="container">
          <img src="/statics/qq.jpg" alt="Snow" style="width:100%;border-radius: 10px;" />

          
        </div>
      </div>
      <div class="column">
        <div class="container">
          <img src="/statics/iyyh.jpg" alt="Snow" style="width:100%;border-radius: 10px;" />
          
        </div>
      </div>
      <div class="column">
        <div class="container">
          <img src="/statics/j.jpg" alt="Snow" style="width:100%;border-radius: 10px;" />
          <div class="container">
           
          </div>
        
        </div>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <div class="container">
          <img src="/statics/hhhj.jpg" alt="Snow" style="width:100%;border-radius: 10px;" />
          
        </div>
      </div>
      <div class="column">
        <div class="container">
          <img src="/statics/ij.jpg" alt="Snow" style="width:100%;border-radius: 10px;" />
         
        </div>
      </div>
      <div class="column">
        <div class="container">
          <img src="/statics/b.jpg" alt="Snow" style="width:100%;border-radius: 10px;" />

         
        </div>
      </div>
    </div>
  </div>
</template>
  <script>
export default {
  data() {
    return {
      slide: 1
    };
  },
  methods: {
      

    goBack() {
      this.$router.push("/");
    }
  

}}
</script>
     <style>
.font {
  font-family: "Clicker Script";
  font-size: 75px;
}
.column {
  float: left;
  width: 33.33%;
  padding: 5px;
}

/* Clearfix (clear floats) */
.row::after {
  content: "";
  clear: both;
  display: table;
}
.container {
  position: relative;
  text-align: center;
  color: white;
  
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.container {
  position: relative;
  width: 100%;
  max-width: 400px;
}

.container img {
  width: 100%;
  height: auto;
}

a {
  color: black;
  text-decoration: none;
}

.container .btn {
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: rgb(25, 105, 38);
  color: rgb(241, 238, 238);
  font-size: 16px;
  padding: 7px 7px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
}

.container .btn:hover {
  background-color: green;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 3px;
  overflow: hidden;
  background-color: rgb(25, 105, 38);
}

li {
  float: right;
}

li a {
  font-family: "";
  font-size: 22px;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: green;
}

h1 {
  position: relative;
  left: 50px;

  font-family: "Sofia";
  font-size: 50px;
}
</style>

<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)
</style>


       
      
    
  
    
