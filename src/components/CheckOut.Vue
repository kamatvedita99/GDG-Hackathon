<template>
   <div class="back">
         <div style="background-color:	rgb(25,105,38); padding-top90: 40px; padding-bottom:10px">
       <q-btn  color="green" icon="shopping_cart">Cart {{getCart}}</q-btn>
            </div>
     <div v-if="!hasProduct()">
        
         <h3 align="center">No Food Item added to cart!</h3>
     </div>
     <div class="q-pa-md">
    <ul class="listOfProducts">
    <li v-for="(storeData, index) in cartItems" :key="index" class="product">
      <img :src="storeData.image" height="100px" />
      <h2 class="product-name">{{storeData.fooditem}}</h2>
       <div class="product-price">
        <span >Rs {{storeData.price}}</span>
        
         <q-btn color="green" icon="delete" @click="">Remove from Cart</q-btn>
      </div></li>
  </ul>
  </div>
   <h6 v-if="hasProduct()" align="center">Total: Rs {{ totalPrice() }}</h6>
  <p align="center" ><q-btn v-if="hasProduct()" color="green"  @click="" >Want to order Something more?</q-btn></p>
  <div>
    <p align="center" ><q-btn v-if="!hasProduct()" color="green"  @click="goBack()" >Order Something!</q-btn></p>   
 <p align="center"><q-btn align="center" color="green" v-if="hasProduct()" @click="gotoPayment()" >Proceed to Payment</q-btn> </p>
 </div>
   <div v-if="check()" style="background-color:	#DCDCDC; padding-top: 73px; padding-bottom: 2px">
  </div>
   <div v-if="hasProduct()" style="background-color:	#DCDCDC; padding-top: 20px; padding-bottom: 2px">
  </div>
  <div v-if="!hasProduct()" style="background-color:	#DCDCDC; padding-top: 278px; padding-bottom:120px">
   </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import { mapGetters } from "vuex";
export default {
 methods:{
     check(){
         if(this.getCart<=4)
          return true
           else 
            return false 
     },
     goBack(){
       this.$router.push('orderpage')
     },
     hasProduct(){
      return this.cartItems.length > 0;
     },
     ...mapActions(["removeFoodItem"]),
     remove(index){
         this.removeFoodItem(index);
     },
      totalPrice(){
          return this.cartItems.reduce(
              (current, next) => current + next.price, 
              0
          );
      },
      gotoPayment(){
          this.$router.push('/payment')
      }   
 },

 computed: {
    ...mapGetters(["cartItems","getCart"]), 
  
}
}
</script>

<style>
.listOfProducts {
  width: 100%;
  max-width: 2000px;
  margin: 0 auto;
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
  align-self: flex-start;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5em;
}
.back{
  background-color: 	#DCDCDC;
  }
</style>
