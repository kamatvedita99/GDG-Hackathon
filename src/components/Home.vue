<template>
  <div>
    <link href="https://fonts.googleapis.com/css?family=Clicker Script" rel="stylesheet" />
    <ul>
    <a class="active" style="text-align:left;font-size:50px;color:white;font-family:math;font-weight:900">ENVIRON</a>
      <li>
        <a class="active" @click="about()">About</a>
      
      <li>
        <a @click="donate()">DONATE!</a>
      </li>
      <li>
       </li>
    </ul>
    <q-carousel
      style="margin:30px ;height:400px;border-radius:10px; "
      animated
      v-model="slide"
      arrows
      navigation
      infinite
    >
      <q-carousel-slide :name="2" img-src="/statics/jj.jpg" />
      <div class="absolute-bottom-center-custom-caption" align="center">
        <div class="text-h1">
          <p>
            <font size="6" face="arial" color="black">Creating WOW Experience</font>
          </p>
        </div>
      </div>
      <q-carousel-slide :name="1" img-src="/statics/2.jpg"></q-carousel-slide>
    </q-carousel>

    <div class="row">
      <div class="column">
        <div class="container">
          <img src="/statics/climate.jpg" alt="Snow" style="width:100%;border-radius: 10px;" />

          <button class="btn" @click="climate()">More</button>
        </div>
      </div>
      <div class="column">
        <div class="container">
          <img src="/statics/water1.jpg" alt="Snow" style="width:100%;border-radius: 10px;" />
          <button class="btn" @click="water()">More</button>
        </div>
      </div>
      <div class="column">
        <div class="container">
          <img src="/statics/global1.jpg" alt="Snow" style="width:100%;border-radius: 10px;" />
          <div class="container">
            <div class="centered">Global Warming</div>
          </div>
          <button class="btn" @click="globalw()">More</button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <div class="container">
          <img src="/statics/drive.jpg" alt="Snow" style="width:100%;border-radius: 10px;" />
          <button class="btn" @click="meetup()">Meet</button>
        </div>
      </div>
      <div class="column">
        <div class="container">
          <img src="/statics/dos.png" alt="Snow" style="width:100%;border-radius: 10px;" />
          <button class="btn" @click="doanddont()">Explore</button>
        </div>
      </div>
      <div class="column">
        <div class="container">
          <img src="/statics/ecoshop.jpg" alt="Snow" style="width:100%;border-radius: 10px;" />

          <button class="btn" @click="shop()">Shop</button>
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
    donate() {
      this.$router.push("/donate");
    },

    shop() {
      this.$router.push("/starters");
    },
    climate() {
      this.$router.push("/climate");
    },
    water() {
      this.$router.push("/water");
    },
    globalw() {
      this.$router.push("/global");
    },
    doanddont() {
      this.$router.push("/do");
    },
    meetup() {
      this.$router.push("/meetups");
    }
  }
};
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


       
      
    
  
    