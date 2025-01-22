<template>
  <div id="app">
    <AppHeader />

    <div id="content" class="content">
      <router-view></router-view>
    </div>


    <!--
    <div class="black-bg" v-if="modal_isOpen == true">
      <div class="white-bg">
        <h4>
          상세페이지
        </h4>
        <p>상세페이지 내용</p>
        <button @click="modal_isOpen=false">Close</button>
      </div>
    </div>

    <div class="menu">
      <a v-for="(content,num) in menus" :key="num">{{content}}</a>
    </div>

    <div v-for="(data,i) in one_rooms" :key="i">
      <img :src="one_rooms[i].image">
      <h4 :style="style" @click="modal_isOpen = true">{{one_rooms[i].title}}</h4>
      <p>{{one_rooms[i].price}} 만원</p>
      <button @click="incrementCount(name)">허위매몰신고</button>
      <span>신고수 : {{ counts[name] }}</span>
    </div>
    -->

  </div>
</template>

<script>

//import {apple, apple2} from './assets/oneroom.js'
//apple
//apple2
import data_one from './assets/oneroom.js'
import AppHeader from "./components/layout/AppHeader.vue";
//import { createApp } from 'vue';
//import lang from './lang.js';

//const app = createApp(this);

//app.use(lang);
//app.mount('#app');

export default {
  name: 'App',
  data(){
    return {
      // save all data in here!!
      // object type
      one_rooms: data_one,
      modal_isOpen : false,
      style : 'color : blue',
      product : ['역삼동 원룸', '천호동원룸', '마포구원룸'],
      menus : ['Home', 'Shop', 'About'],
      count: [1,0,0],
      counts: { // Object to store counts
        '역삼동 원룸': 0,
        '천호동원룸': 0,
        '마포구원룸': 0
      }
    }
  },
  methods: {
    increase_cnt(i){
      this.count[i]++;
    },
    getCount(i) {
      return this.count[i];
    },
    incrementCount(productName) {
      this.counts[productName]++;
    }

  },
  components: {
    AppHeader,
  }
}
</script>
<!--
To make dynamic UI :
1. to save current status of UI at (export data())
2. to decide how to show modal depends on current status of UI
-->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}

body{
  margin: 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}
.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
}

</style>
