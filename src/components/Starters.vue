<template>
  <div class="back">
    <div style="background-color:rgb(25, 105, 38); margin: 0;
  padding: 3px;
  overflow: hidden">
      <q-btn @click="routeMe()" color="green" icon="shopping_cart">Cart {{getCart}}</q-btn>
    </div>
    <div class="q-pa-md">
      <ul class="listOfProducts">
        <li v-for="(storeData, index) in getStarter" :key="index" class="product">
          <img :src="storeData.image" height="200px" width="200px" />
          <h2 class="product-name">{{storeData.fooditem}}</h2>
          <div class="product-price" style="align:center">
            <span>Rs {{storeData.price}}</span>
          </div>
          <div class="product-price">
            <q-btn color="green" @click="persistent = true">Why this?</q-btn>
            <q-btn color="green" @click.native="addProductToCart(storeData)">Add to Cart</q-btn>

            <q-dialog
              v-model="persistent"
              persistent
              transition-show="scale"
              transition-hide="scale"
            >
              <q-card color="green" class="bg-green text-white" style="width: 100%">
                <q-card-section></q-card-section>
                <div>
                  <img
                    src="/statics/download.jpg"
                    alt="Snow"
                    style="width:50%;height:150px;padding:25px;align:absolute-center"
                  />
                  <q-card-section>
                    The jute, being a natural fibre, decomposes within a standard period, say, few weeks or months. On the other hand, plastics need hundreds of years for complete disintegration. So, these products are seen to choke sewerage systems, and being not biodegradable, causes pollution in Air, Water and to the nature as a whole.
                    
                  </q-card-section>
                </div>
                <q-card-actions align="right" class="bg-white text-teal">
                  <q-btn flat label="OK" v-close-popup />
                </q-card-actions>
              </q-card>
            </q-dialog>
          </div>
        </li>
      </ul>
    </div>
    <p align="center">
      <q-btn color="green" @click="goBack()">Go Back</q-btn>
    </p>
    <div style="background-color:	#DCDCDC; padding-top: 2px; padding-bottom:7px"></div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      counter: 0,
      flag: 0,
      persistent: false
    };
  },

  methods: {
    routeMe() {
      this.$router.push("/checkout");
    },
    goBack() {
      this.$router.push("/");
    },
    ...mapActions(["addFoodItem", "addFoodInfo", "removeFoodItem"]),
    addProductToCart(item) {
      if (this.counter != 0 && this.flag == 0) this.counter = getCart;
      this.flag = 1;
      this.counter += 1;
      this.addFoodItem(this.counter);
      this.addFoodInfo(item);
    },
    removeProduc(index) {
      this.removeFoodItem(index);
    }
  },

  computed: {
    ...mapGetters(["getStarter", "getCart"])
  }
};
</script>

<style>
.back {
  background-color: #dcdcdc;
}
.listOfProducts {
  width: 100%;
  max-width: 2000px;
  margin: 20px left;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
}

.product {
  width: 300px;
  background-color: #fff;
  list-style: none;
  box-sizing: border-box;
  padding: 1em;
  margin: 1em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 7px;
}

.product-name {
  font-size: 1.2em;
  font-weight: normal;
}

.product-name:hover {
  cursor: pointer;
  text-decoration: underline;
}

.product-price {
  width: 100%;
  align-content: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5em;
}
</style>

