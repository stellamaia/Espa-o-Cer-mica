<template>
  <div class="app">
    <div class="conteudo">
      <b-container class="conteudo-mobile">
        <b-row class="text-center">
          <b-col cols="2" sm="1" md="1">
            <img
              class="conteudo-mobile__img"
              alt=""
              src="../assets/carrinho.png"
            />
          </b-col>

          <b-col cols="8" sm="10" md="10">
            <b-link class="conteudo-mobile__frase">Espaço Cerâmica</b-link>
          </b-col>

          <b-col cols="2" sm="1" md="1">
            <button class="icone-list" v-b-toggle.sidebar-no-header></button>
          </b-col>
        </b-row>
      </b-container>
      <div class="conteudo-desktop">
        <b-row class="text-center">
          <b-col lg="4" xl="3">
            <b-link class="conteudo-desktop__frase">Espaço-Cerâmica</b-link>
          </b-col>
          <b-col lg="4" xl="6">
            <div class="conteudo-desktop__lista">
              <b-link class="header__link active" href="#foo">Home</b-link>
              <b-link class="header__link" href="#foo">Loja</b-link>
              <b-link class="header__link" href="#foo">Sobre</b-link>
              <b-link class="header__link" href="#foo">Contato</b-link>
            </div>
          </b-col>
          <b-col lg="4" xl="3">
            <img class="cont-img" alt="" src="../assets/carrinho.png" />
          </b-col>
        </b-row>
      </div>
      <b-sidebar
        class="side"
        id="sidebar-no-header"
        aria-labelledby="sidebar-no-header-title"
        no-header
        right
        shadow
      >
        <template #default="{ hide }">
          <div class="sid">
            <b-row>
              <b-col cols="2" sm="2" md="2" lg="2" xl="2">
                <b-button block @click="hide">
                  <b-icon icon="person-circle"></b-icon
                ></b-button>
              </b-col>
              <b-col cols="8" sm="8" md="8" lg="8" xl="8">
                <h4 class="login" id="sidebar-no-header-title">Login</h4>
              </b-col>
              <b-col cols="1" sm="1" md="1" lg="1" xl="1">
                <b-button block @click="hide">
                  <b-icon icon="x-lg"></b-icon
                ></b-button>
              </b-col>
            </b-row>
            <b-container class="list">
              <b-row cols="12">
                <b-link class="header__link active" href="#foo">Home</b-link>
                <b-link class="header__link" href="#foo">Loja</b-link>
                <b-link class="header__link" href="#foo">Sobre</b-link>
                <b-link class="header__link" href="#foo">Contato</b-link>
              </b-row>
            </b-container>
          </div>
        </template>
      </b-sidebar>
    </div>
  </div>
</template>
<style scoped>
.app {
  font-family: "Montserrat", sans-serif;
  height: 100px;
}
.conteudo {
  padding-top: 40px;
}
.conteudo-mobile__img {
  cursor: pointer;
}
.icone-list {
  border: 1px solid rgba(162, 41, 41, 0);

  height: 30px;
  width: 27px;
  background: no-repeat url("../assets/menu.png");
}
.conteudo-mobile__frase {
  text-decoration: none;

  font-weight: 500;
  font-size: 16px;
  letter-spacing: 6px;
  text-transform: uppercase;
  color: black;
}
.conteudo-desktop__frase {
  text-decoration: none;

  font-weight: 500;
  font-size: 15px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: black;
}
.btn-secondary {
  background-color: #c25c1d00;
  color: black;
  border: 0;
}
.btn-secondary:hover {
  background-color: #8c370200 !important;
  color: black !important;
  border: 0;
}
.sid {
  padding: 60px 40px 0 40px;
}
.login {
  padding: 5px;
}

.header__link {
  text-decoration: none;
  padding-bottom: 5px;
  padding-left: 20px;
  font-weight: 500;
  font-size: 16px;
  color: black;
}
.header__link:hover {
  color: #72503b;
}
.active {
  text-decoration: none;
  color: #91664c;
}
@media screen and (min-width: 320px) and (max-width: 1024px) {
  .conteudo-desktop {
    display: none;
  }
}
@media screen and (min-width: 1025px) and (max-width: 1200px) {
  .conteudo-mobile {
    display: none;
  }
}
@media screen and (min-width: 1201px) {
  .conteudo-mobile {
    display: none;
  }
}
</style>