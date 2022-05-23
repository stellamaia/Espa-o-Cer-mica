<template>
  <div class="app">
    <div class="conteudo">
      <b-container class="conteudo-mobile">
        <b-row class="text-center">
          
          <b-col cols="1" sm="1" md="1">
            {{ itensDoCarrinhoStore.length }} 
            <img
              class="conteudo-mobile__img"
              alt=""
              src="../assets/carrinho.png"
              v-b-toggle.sidebar-1
            />
            <b-sidebar id="sidebar-1" title="Sacola" shadow>
   
                <div v-for="produto in itensDoCarrinhoStore" :key="produto.id">
          
                  <b-card class=" produtos mb-3" img-left :img-src="getImgUrl(produto.imagem)">
                    <b-card-body>
                      <b-card-title class="produtos-texto">
                        {{ produto.descricao }}
                      </b-card-title>
                      <b-card-sub-title class="produtos-valor">
                        R$ {{ produto.preco }}</b-card-sub-title
                      >
                    </b-card-body>
                  </b-card>
              
                </div>
             
            </b-sidebar>
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
            {{ itensDoCarrinhoStore.length }}
            <img
              class="conteudo-desktop-img"
              alt=""
              src="../assets/carrinho.png"
            />
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
                <b-button class="botao-fechar" block @click="hide">
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
<script>
import { mapState } from "vuex";

export default {
  name: "NavBar",
  computed: {
    ...mapState(["itensDoCarrinhoStore"]),
  },
  methods: {
    getImgUrl(pic) {
      return require("../assets/" + pic);
    },
  },
};
</script>
<style scoped>
.app {
  font-family: "Montserrat", sans-serif;
  height: 100px;
}

.produtos {
  border: 0;
  background-color:#ffffff;
  text-align: center;
  height: 150px;
}
.produtos-texto {
  font-weight: 600;
  font-size: 15px;
  padding: 0 1px 0 1px;
  border: 0; 
}

.produtos-valor {
  color: #717171;
  font-weight: 500;
  font-size: 14px;
  border: 0;
  text-align: center;
}

.card-img-left {

  cursor: pointer;
  border-radius: 20px;
height:80px;
width: 80px;

}
.conteudo {
  padding-top: 40px;
}
.conteudo-mobile__img {
  cursor: pointer;
}
.conteudo-desktop-img {
  cursor: pointer;
}
.conteudo-desktop-img:hover {
  height: 30px;
}
.bi-x-lg {
  color: rgb(0, 0, 0) !important;
}
.bi-x-lg:hover {
  color: rgba(65, 65, 65, 0.845) !important;
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