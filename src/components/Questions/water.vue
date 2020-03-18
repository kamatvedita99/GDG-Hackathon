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
          <h1>Causes</h1>Water pollution is caused due to several reasons. Here are the few major causes of water pollution:
          <br />Sewage And Waste Water: Sewage, garbage and liquid waste of households, agricultural lands and factories are discharged into lakes and rivers.
          <br />Dumping: Dumping of solid wastes and litters in water bodies causes huge problems. Litters include glass, plastic, aluminum, styrofoam etc. Different things take different amount of time to degrade in water. They affect aquatic plants and animals.
          <br />Industrial Waste: Industrial waste contains pollutants like asbestos, lead, mercury and petrochemicals which are extremely harmful to both people and environment. Industrial waste is discharged into lakes and rivers by using fresh water making the water contaminated.
          <br />Oil Pollution: Sea water gets polluted due to oil spilled from ships and tankers while traveling. The spilled oil does not dissolve in water and forms a thick sludge polluting the water.
          <br />Acid Rain: Acid rain is pollution of water caused by air pollution. When the acidic particles caused by air pollution in the atmosphere mix with water vapor, it results in acid rain.
        </div>
      </div>
      <div class="column" style="margin-left:auto;margin-right:-60px">
        <div class="container"></div>
      </div>
    </div>
    <div class="row">
      <div class="column" style="margin-left:auto;margin-right:-60px">
        <div class="container"></div>
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


       
      
    
  
    