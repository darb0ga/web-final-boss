<template>

  <div id="content">
    <h1>Вход в систему</h1>
    <hr>
    <form id="form" @submit.prevent="logIn" >
      <div id="login">
        <p v-if="!isValidEmail" class="error">
          <b>Email невалидный</b>
        </p>
        <p v-else class="error"><b>&nbsp;</b></p>

        <label for="loginInput">Введите e-mail:</label>
        <input type="email"
               id="loginInput"
               required
               placeholder="Введите ваш email"
               v-model.trim="login"/>
      </div>
      <div id="password">
        <label for="passwordInput">Введите пароль:</label>
        <input type="password"
               id="passwordInput"
               required
               placeholder="Пароль"
               v-model.trim="password"/>
      </div>
      <br>
      <div id="buttons">
        <button :disabled='!isValidEmail' :style="[{ 'color': isValidEmail ? '#031b62' : '#ffffff', 'background-color': isValidEmail ? '#8bc3fa' : '#ffffff'}]" id="loginButton"  @click.native="logIn">Войти в систему</button>
        <button :disabled='!isValidEmail' :style="[{ 'color': isValidEmail ? '#031b62' : '#ffffff', 'background-color': isValidEmail ? '#8aceff' : '#ffffff'}]" id="registerButton" @click.native="register">Зарегистрироваться</button>
      </div>
    </form>
  </div>
</template>

<script>

import { loginApi, registerApi } from "@/restApi";
export default {
  name: "authorization",
  data(){
    return{
      login: "",
      password: ""
    }
  },
  computed: {
    isValidEmail() {
      return /^[^@]+@\w+(\.\w+)+\w$/.test(this.login);
    }
  },
  methods: {
    logIn(event) {
      event.preventDefault();
      this.$router.push({name: 'main'});
      loginApi(
          {login: this.login, password: this.password},
          (data) => {
            sessionStorage.setItem("jwt", data.token);

            console.log(data.token);
            this.$router.push({name: 'main'});
          }, (error) => {
            console.log(error);

          }
      );
    },
    register(event) {
      event.preventDefault();

      registerApi(
          {login: this.login, password: this.password},
          (data) => {
            console.log(data.token);
          }, (err) => {
            console.log("pechal");
            console.log(err);
          }
      );


    },

  }
}
</script>


<style>
#content{
  align-items: center;
  align-self: center;
  align-content: center;
  width: 100%;
}
#buttons{
  width: 100%;
  border: #100505;
  height: 40%;
}
button{
  width: 50%;
  height: 100%;
}
#form{
  align-content: center;
  width: 100%;
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