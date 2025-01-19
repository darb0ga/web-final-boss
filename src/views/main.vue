<template>


  <body>
  <div class="main">
    <div class="table">
      <table width="100%">
        <tr>
          <th width="30%">Введите значения</th>
          <th width="30%">График</th>
          <th width="40%">История</th>
        </tr>
        <td>
          <label>Input X</label>
          <div class="x">
            <input type="radio" value="-4">
            <label>-4</label>
            <br>
            <input type="radio" value="-3">
            <label>-3</label>
            <br>
            <input type="radio" value="-2">
            <label>-2</label>
            <br>
            <input type="radio" value="-1">
            <label>-1</label>
            <br>
            <input type="radio" value="0">
            <label>0</label>
            <br>
            <input type="radio" value="1">
            <label>1</label>
            <br>
            <input type="radio" value="2">
            <label>2</label>
            <br>
            <input type="radio" value="3">
            <label>3</label>
            <br>
            <input type="radio" value="4">
            <label>4</label>
          </div>


          <label>Input y</label>
          <div>
            <input type="text" placeholder="y in [-3;5]" class="y"/><br>
          </div>

          <label>Input R</label>
          <div class="r">
            <input type="radio" value="-4">
            <label>-4</label>
            <br>
            <input type="radio" value="-3">
            <label>-3</label>
            <br>
            <input type="radio" value="-2">
            <label>-2</label>
            <br>
            <input type="radio" value="-1">
            <label>-1</label>
            <br>
            <input type="radio" value="0">
            <label>0</label>
            <br>
            <input type="radio" value="1">
            <label>1</label>
            <br>
            <input type="radio" value="2">
            <label>2</label>
            <br>
            <input type="radio" value="3">
            <label>3</label>
            <br>
            <input type="radio" value="4">
            <label>4</label>
            <br>
          </div>
          <div class="special-button">
            <button id="submit-button" @click="validateForm" type="submit">Отправить на проверку</button>
            <button id="remove-button" @click="deleteDots" >Удалить все точки</button>
          </div>
          <div>
            <button id="logOut" @click.native="logout">Выйти из аккаунта</button>
          </div>
        </td>
        <td>
          <br>
            <Dots/>
        </td>
        <td>
          <table id="results">
            <caption>результаты</caption>
            <tr>
              <th width="20%">X</th>
              <th width="20%">Y</th>
              <th width="20%">R</th>
              <th width="20%">true or false</th>
            </tr>
          </table>
        </td>
      </table>
    </div>
  </div>
  </body>
</template>

<script>

import Home from '../components/header.vue';
import Dots from '../components/graph.vue';
import {createRouter as $router} from "vue-router";
export default {
  name: "main",
  components:{
    'Home': Home,
    'Dots': Dots,
  },
  data(){
    return{
      email: "",
      password: ""
    }
  },
  computed: {
    validateForm: function (){

    },
    deleteDots: function(){

    }
  },
  methods: {
    logout(){
    localStorage.clear();
    this.$router.push({name: "login"}, () => localStorage.clear());
  }
  }
}

</script>


<style>
body {

  margin: 0;
  padding: 0;
  background-image: url("../asserts/photo.jpg");
  background-size: cover;
  background-attachment: fixed;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
}


th,
td {
  border: 1px solid rgb(14, 3, 98);
}

#results{
  width: 100%;
  border-collapse: collapse;
  th, td {
    border: 1px solid #ffffff;
  }

}
</style>