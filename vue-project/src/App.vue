<script>
export default {
    data() {
      return {
        foods: ['Fish','Cake'],toggleValue: true,data: null,carSelected: '',
      inpValSubmitted: 'Not submitted yet',p1Exists: false,
      p2Exists: false,typeWriters: 10
      };
    },methods: {
    receiveEmit() {
      alert('Hello World!');
    },async fetchData() {      
        const response = await fetch("https://random-data-api.com/api/v2/users"); 
        this.data = await response.json();
      } ,transferText() { 
        this.$refs.p2.innerHTML = this.$refs.p1.innerHTML;
      },registerAnswer() {
      if(this.carSelected) {
        this.inpValSubmitted = this.carSelected;
      }
    },remove(){
      if(this.typeWriters>0){
        this.typeWriters--;
      }
    }
  },computed: {
      activeComp() {
        if(this.toggleValue) {
          return 'comp-one'
        }
        else {
          return 'comp-two'
        }
      },
      btn1Text() {
      if(this.p1Exists) {
        return 'Remove';
      }
      else {
        return 'Add';
      }
    },
    btn2Text() {
      if(this.p2Exists) {
        return 'Remove';
      }
      else {
        return 'Add';
      }
    },storageComment(){
      if(this.typeWriters > 5) {
        return "Many left"
      }
      else if(this.typeWriters > 0){
        return "Very few left"
      }
      else {
        return "No typewriters left"
      }
    }
    }
  }
</script>

<template>
  <p>Typewriters left in storage: {{ typeWriters }}</p>
  <button @click="remove">Remove one</button>
  <p style="font-style: italic;">"{{ storageComment }}"</p>
  <button @click="this.p1Exists = !this.p1Exists">{{btn1Text}}</button><br>
  <Transition>
    <p v-if="p1Exists" id="p1">Hello World!</p>
  </Transition>
  <hr>
  <button @click="this.p2Exists = !this.p2Exists">{{btn2Text}}</button><br>
  <Transition name="swirl">
    <p v-if="p2Exists" id="p2">Hello World!</p>
  </Transition>
  <form @submit.prevent="registerAnswer">
    <label for="cars">Choose a car:</label>
    <select  v-model="carSelected" id="cars">
      <option disabled value="">Please select one</option>
      <option>Volvo</option>
      <option>Saab</option>
      <option>Opel</option>
      <option>Audi</option>
    </select>
    <br><br>
    <input type="submit" value="Submit">
  </form>
  <div>
    <h3>Submitted answer:</h3>
    <p id="pAnswer">{{ inpValSubmitted }}</p>
  </div>
  <router-link to="/one">one</router-link><br/>
  <router-link to="/two">two</router-link><br>
  <div>
    <router-view></router-view>
  </div>
  <p ref="p1">Click the button to copy this text into the paragraph below.</p>
  <button @click="transferText">Transfer text</button>
  <p ref="p2">...</p>
  <h1>Hello World!</h1>
  <foods/>
  <foodprops food-name="Pizza" food-desc="Pizza has a bread base with tomato sauce, cheese, and toppings on top."/>
  <foodprops food-name="Rice" food-desc="Rice is a type of grain that people like to eat."/>
  <foodarray v-for="x in foods"
  v-bind:food-name="x" @toggle-favorite="receiveEmit"/>
  <button @click="toggleValue = !toggleValue">Switch component</button>
  <component :is="activeComp"></component>
  <button @click="fetchData">Fetch data</button>
  <pre v-if="data">{{ data }}</pre>
</template>

<style>
#app > div {
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: rgb(80, 91, 22);
  }
  .v-enter-active {
    background-color: lightgreen;
    animation: added 1s;
  }
  .v-leave-active {
    background-color: lightcoral;
    animation: added 1s reverse;
  }
  @keyframes added {
    from {
      opacity: 0;
      translate: -100px 0;
    }
    to {
      opacity: 1;
      translate: 0 0;
    }
  }
  .swirl-enter-active {
    animation: swirlAdded 1s;
  }
  .swirl-leave-active {
    animation: swirlAdded 1s reverse;
  }
  @keyframes swirlAdded {
    from {
      opacity: 0;
      rotate: 0;
      scale: 0.1;
    }
    to {
      opacity: 1;
      rotate: 360deg;
      scale: 1;
    }
  }
  #p1, #p2 {
    display: inline-block;
    padding: 10px;
    border: dashed black 1px;
  }
  #p2 {
    background-color: lightcoral;
  }
</style>
