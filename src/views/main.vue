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
            <input type="radio" value="-4" id="-4" name="x" v-model="x">
            <label for="-4">-4</label>
            <br>
            <input type="radio" value="-3" id="-3" name="x" v-model="x">
            <label for="-3">-3</label>
            <br>
            <input type="radio" value="-2" id="-2" name="x" v-model="x">
            <label for="-2">-2</label>
            <br>
            <input type="radio" value="-1" id="-1" name="x" v-model="x">
            <label for="-1">-1</label>
            <br>
            <input type="radio" value="0" id="0" name="x" v-model="x">
            <label for="0">0</label>
            <br>
            <input type="radio" value="1" id="1" name="x" v-model="x">
            <label for="1">1</label>
            <br>
            <input type="radio" value="2" id="2" name="x" v-model="x">
            <label for="2">2</label>
            <br>
            <input type="radio" value="3" id="3" name="x" v-model="x">
            <label for="3">3</label>
            <br>
            <input type="radio" value="4" id="4" name="x" v-model="x">
            <label for="4">4</label>
          </div>


          <label>Input y</label>
          <div>
            <input type="number" v-model="y" max=5 min=-3 placeholder="y in [-3;5]" class="y" id="y"/><br>
          </div>

          <label>Input R</label>
          <div class="r">
            <input type="radio" id="r1" value="1" name="r" v-model="r">
            <label for="r1">1</label>
            <br>
            <input type="radio" id="r2" value="2" name="r" v-model="r">
            <label for="r2">2</label>
            <br>
            <input type="radio" id="r3" value="3" name="r" v-model="r">
            <label for="r3">3</label>
            <br>
            <input type="radio" id="r4" value="4" name="r" v-model="r">
            <label for="r4">4</label>
          </div>

          <div class="special-button">
            <button id="submit-button" @click="validateForm" type="submit">Отправить на проверку</button>
            <button id="remove-button" @click="deleteDots">Удалить все точки</button>
          </div>
          <div>
            <button id="logOut" @click.native="logout">Выйти из аккаунта</button>
          </div>
        </td>
        <td>
          <div>
            <br>
            <!-- SVG-график -->
            <svg @click="validateDots" id="graph" width="450" height="450" xmlns="http://www.w3.org/2000/svg">
              <!-- Оси -->
              <line stroke="black" x1="0" x2="440" y1="220" y2="220"></line>
              <line stroke="black" x1="220" x2="220" y1="0" y2="440"></line>

              <!-- Стрелки -->
              <polygon fill="black" points="220,0 214,15 226,15" stroke="black"></polygon>
              <polygon fill="black" points="440,220 425,226 425,214" stroke="black"></polygon>

              <!-- Деления -->
              <line stroke="black" x1="320" x2="320" y1="215" y2="225"></line>
              <text fill="black" x="320" y="235">{{r/2}}</text>
              <line stroke="black" x1="420" x2="420" y1="215" y2="225"></line>
              <text fill="black" x="420" y="245">{{r}}</text>

              <line stroke="black" x1="20" x2="20" y1="215" y2="225"></line>
              <text fill="black" x="20" y="235">{{-r}}</text>
              <line stroke="black" x1="120" x2="120" y1="215" y2="225"></line>
              <text fill="black" x="120" y="235">{{-r/2}}</text>

              <line stroke="black" x1="215" x2="225" y1="120" y2="120"></line>
              <text fill="black" x="235" y="120">{{r/2}}</text>
              <line stroke="black" x1="215" x2="225" y1="20" y2="20"></line>
              <text fill="black" x="245" y="20">{{r}}</text>

              <line stroke="black" x1="215" x2="225" y1="320" y2="320"></line>
              <text fill="black" x="235" y="320">{{-r/2}}</text>
              <line stroke="black" x1="215" x2="225" y1="420" y2="420"></line>
              <text fill="black" x="235" y="420">{{-r}}</text>


              <!-- Подписи к осям -->
              <text fill="black" x="430" y="240">X</text>
              <text fill="black" x="230" y="15">Y</text>

              <!-- Заштрихованные области -->
              <!-- Треугольник -->
              <polygon
                  id="polygon"
                  fill="blue"
                  points="220,220 20,220 220,20"
                  opacity="0.7"></polygon>
              <!-- Сектор круга -->
              <path
                  id="circle"
                  d="M 220,220 L 220,320 A 100,100 0 0,1 120,220 Z"
                  fill="blue"
                  opacity="0.7">
              </path>
              <!-- Прямоугольник -->
              <rect
                  id="rect"
                  x="220"
                  y="220"
                  width="200"
                  height="100"
                  fill="blue"
                  opacity="0.7">
              </rect>
            </svg>
          </div>
        </td>

        <td>
          <p style="font-size: 20px" v-if="dots.length === 0">Точек нет</p>
          <table v-else class="results">
            <thead class="thead">
            <tr class="table-header">
              <th width="25%" scope="col">X</th>
              <th width="25%" scope="col">Y</th>
              <th width="25%" scope="col">R</th>
              <th width="25%" scope="col">Результат</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="dot in dots" :key="dot" class="table-row">
              <td>{{ dot.x }}</td>
              <td>{{ dot.y }}</td>
              <td>{{ dot.r }}</td>
              <td>{{ dot.result }}</td>
            </tr>
            </tbody>
          </table>
        </td>
      </table>
    </div>
  </div>
  </body>
</template>

<script>

import Home from '../components/header.vue';
import {createRouter as $router} from "vue-router";
import {getPoints, addPoint, deletePoints} from "@/restApi.js";

export default {
  name: "main",
  components: {
    'Home': Home,
  },
  data() {
    return {
      x: "",
      y: "",
      r: "1",
      xFromGraph: "",
      yFromGraph: "",
      dots: new Array(0),
    }
  },
  watch: {
    r(val) {

      let r = parseFloat(this.r);
      let circle = document.getElementById("circle");
      let rectangle = document.getElementById("rect");
      let triangle = document.getElementById("polygon");
      this.drawDots();

    }
  },
  mounted() {
    this.drawDots();
    this.loadDots();
  },
  methods: {
    deleteDots() {
      deletePoints(
          sessionStorage.getItem("jwt"),
          (data) => {
            this.loadDots();
          },(err) =>{
            console.log(err);
          }
      )
    },
    logout() {
      sessionStorage.clear();
      this.$router.push({name: "login"}, () => sessionStorage.clear());
    },
    validateDots() {

      let position = getMousePosition(document.getElementById("graph"), event);
      this.xGraph = ((position.x - 150) / 25).toFixed(2);
      this.yGraph = ((150 - position.y) / 25).toFixed(2);

      if (this.r >= -3 && this.r <= 5) {
        this.addDots(this.xGraph, this.yGraph);
      } else {
        console.log("error while validate");
      }

      function getMousePosition(element, event) {
        let rect = element.getBoundingClientRect();
        return {
          x: event.clientX - rect.left,
          y: event.clientY - rect.top
        };

      }
    },
    addDots(x, y) {
      console.log("1" + sessionStorage.getItem("jwt"));
      addPoint(
          { x: parseFloat(x), y: parseFloat(y), r: parseFloat(this.r) },
          (data) => {
            this.loadDots();  // Загружаем обновленные точки
            console.log(sessionStorage.getItem("jwt"));
          },
          (err) => {
            console.error(err);
          }
      );
    },

    loadDots() {
      const jwt = sessionStorage.getItem("jwt");
      if (!jwt) {
        console.error("JWT не найден");
        return;
      }

      getPoints(
          jwt,
          (data) => {
            console.log("Ответ с сервера: ", data);

            // Проверяем формат данных
            if (Array.isArray(data)) {
              this.dots = data;  // Если results уже массив, просто присваиваем
            }else {
              console.error("Некорректный формат данных");
              this.dots = [];  // Обрабатываем ситуацию с некорректными данными
            }

            console.log("Загруженные точки: ", this.dots);
            this.drawDots();
          },
          (err) => {
            console.error("Ошибка при загрузке точек: ", err);
          }
      );
    },
    validateForm() {
      if (
          (!isNaN(this.x) && !isNaN(this.y) && !isNaN(this.r)) &&
          (parseFloat(this.y) >= -5 && parseFloat(this.y) <= 5 && !isNaN(this.y))) {
        this.addDots(this.x, this.y);
      } else {
        console.log("check input");
      }

    },
    drawDots() {
      let r = parseFloat(this.r);
      let svg = document.getElementById("graph")
      let oldDots = document.querySelectorAll("circle");
      oldDots.forEach(oldDot => oldDot.parentNode.removeChild(oldDot));
      if(this.dots.length !== 0){
        this.dots.forEach(dot => {
          let newDot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
          newDot.setAttribute("id", "target-dot");
          newDot.setAttribute("r", "3.5");
          newDot.setAttribute("cx", `${dot.x * 25 + 220}`);
          newDot.setAttribute("cy", `${220 - dot.y * 25}`);

          if (dot.r === r) {
            newDot.setAttribute("fill", dot.result === true ? "green" : "red");
            newDot.setAttribute("r", "4.5");
          } else {
            newDot.setAttribute("fill", "black");
            newDot.setAttribute("opacity", `${((r - 0.5 < dot.r) && (r + 0.5 > dot.r)) ? "0.5" : "0.1"}`);
          }
          svg.appendChild(newDot);
        });
      }

    }
  },
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

#results {
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ffffff;
  }

}

.y {
  width: 70%;
  height: 60%;
}

.x {
  width: auto;
  height: fit-content;
}

/* Десктопный режим (>= 1258px) */
@media (min-width: 1258px) {
  body {
    font-size: 16px;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
}

/* Планшетный режим (891px - 1258px) */
@media (min-width: 891px) and (max-width: 1257px) {
  body {
    font-size: 14px;
  }

  .container {
    max-width: 800px;
    padding: 0 20px;
  }
}

/* Мобильный режим (< 891px) */
@media (max-width: 890px) {
  body {
    font-size: 12px;
  }

  .container {
    max-width: 100%;
    padding: 0 10px;
  }
}

</style>