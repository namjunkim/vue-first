<script setup>

  //import {ref} from 'vue';

  //const message = ref('');

  /*async fetchMessage() {
    const response = await fetch('/vue/home')
    const data = await  response.json();
    message.value = data.message;
  }*/
  import axios from "axios";
  import {ref} from 'vue';

  const message = ref("origin");
  const inputText = ref("input_text");

  async function testGetDate() {
    try {
      const response = await  axios.get("http://localhost:8231/test/data");
      console.log("success");
      message.value = response.data;
    } catch (error) {
      console.log("fail")
    }
  }

  /*export default {
    data(){
      return {
        message : "origin"
      }
    },
    methods: {
      testGetDate() {
        axios(
            {
              method:"get",
              url: "/test/data",
              data: {
                shape: "circle",
                color: "red",
              },
              header: {
                  "Context-Type": "multipart/form-data"
              },
            }
        ).then((res) => {
          console.log("success");
          this.origin = res;
        }).catch((res) => {
          console.log("fail");
          this.origin = "fail";
        })
        ;
      }
    }
  }
  */

</script>

<template>
  <div>
    <h1>this is test -> {{message}}</h1>
    <input type="text" v-model="inputText" />
    <button @click="testGetDate">Fetch Message</button>
    <!--
    v-if -> no rendering
    v-show -> rendering but not show like hidden
    -->
  </div>
</template>

<style scoped>

</style>