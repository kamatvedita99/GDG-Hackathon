<template>
  <div>
    <link href="https://fonts.googleapis.com/css?family=Clicker Script" rel="stylesheet" />
    <div style="background-color:rgb(25, 105, 38); margin: 0;
  padding: 3px;
  overflow: hidden">
      <q-btn color="green" @click="goBack()">HOME</q-btn>
    </div>
    <link href="https://fonts.googleapis.com/css?family=Clicker Script" rel="stylesheet" />
    <div class="row">
      <div class="column" style="text-align:center "></div>
    </div>
    <div class="row">
      <div class="column">
        <div class="centered" style="font-size:19px;color:black">
          <h1>Causes</h1>
          <br />-Water vapor. The most abundant greenhouse gas, but importantly, it acts as a feedback to the climate. Water vapor increases as the Earth's atmosphere warms, but so does the possibility of clouds and precipitation, making these some of the most important feedback mechanisms to the greenhouse effect.
          <br />-Carbon dioxide (CO2). A minor but very important component of the atmosphere, carbon dioxide is released through natural processes such as respiration and volcano eruptions and through human activities such as deforestation, land use changes, and burning fossil fuels. Humans have increased atmospheric CO2 concentration by more than a third since the Industrial Revolution began. This is the most important long-lived "forcing" of climate change.
          <br />Methane. A hydrocarbon gas produced both through natural sources and human activities, including the decomposition of wastes in landfills, agriculture, and especially rice cultivation, as well as ruminant digestion and manure management associated with domestic livestock. On a molecule-for-molecule basis, methane is a far more active greenhouse gas than carbon dioxide, but also one which is much less abundant in the atmosphere.
          <h1>Solutions</h1>-try to employ alternatives when possible—plant-derived plastics, biodiesel, wind power—and to invest in the change, be it by divesting from oil stocks or investing in companies practicing carbon capture and storage.
          <br />-energy-efficient buildings and improved cement-making processes (such as using alternative fuels to fire up the kiln) could reduce greenhouse gas emissions in the developed world and prevent them in the developing world.
          <br />-Restricting flying to only critical, long-distance trips—in many parts of the world, trains can replace planes for short- to medium-distance trips—would help curb airplane emissions.
        </div>
      </div>
      <div class="column" style="margin-left:auto;margin-right:-60px">
        <div class="container">
          <img src="/statics/bnn.jpg" alt="Snow" style="width:100%;border-radius: 10px;" />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="column" style="margin-left:auto;margin-right:-60px">
        <div class="container">
          <img src="/statics/ll.jpeg" alt="Snow" style="width:100%;border-radius: 10px;" />
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
  }
};
</script>
     <style>
.font {
  font-family: "Clicker Script";
  font-size: 65px;
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
  width: 100%;
  max-width: 400px;
}
.container {
  position: relative;
  text-align: center;
  color: white;
}

.centered {
  position: absolute;
  top: 80%;
  left: 40%;
  transform: translate(-50%, -50%);
}

.container img {
  width: 100%;
  top: 60%;
  left: 70%;
  height: auto;
}
.container .btn {
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: rgb(241, 205, 163);
  color: rgb(17, 16, 16);
  font-size: 16px;
  padding: 7px 7px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
}
a {
  color: black;
  text-decoration: none;
}

li {
  float: right;
}

li a {
  font-family: "Clicker Script";
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


       
      
    
  
    