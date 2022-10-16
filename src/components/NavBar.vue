<template>
  <div class="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <div>
        <img class="logo-ceramica" src="../assets/logo-ceramica.png" alt="" />
      </div>

      <b-navbar-toggle target="nav-collapse">
        <div class="imagem-menu"></div>
      </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Home</b-nav-item>
          <b-nav-item href="#">Loja</b-nav-item>
          <b-nav-item href="#">Sobre</b-nav-item>
          <b-nav-item href="#">Contato</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
      
      <b-col class="carrinho" cols="1" sm="1" md="1">
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


    </b-navbar>
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

}

.navbar-expand-lg .navbar-collapse {
  justify-content: center;
}
.bg-info {
  background-color: white !important;
  position: fixed;
  z-index:2;
  width: 100%;
}
.navbar-dark .navbar-nav .nav-link {
  color: rgb(124 124 124) !important;
}
.navbar-dark .navbar-nav .nav-link:hover {
  color: rgb(74, 74, 74) !important;
}
.navbar-dark .navbar-brand {
  font-size: 12px;
  letter-spacing: 6px;
  text-transform: uppercase;
  color: black;
  margin: 0;
  padding: 0;
}
.navbar-dark .navbar-brand:hover {
  color: black;
}
nav.navbar.navbar-dark.bg-info.navbar-expand-lg {
  padding: 10px;
}
.navbar-toggler {
  text-decoration: none;
}

.logo-ceramica {
  width: 40px;
  margin-left: 10px;
}
.imagem-menu {
  background: no-repeat url("../assets/menu.png");
  height: 30px;
  width: 27px;
}

.navbar-dark .navbar-nav .nav-link[data-v-4295d220] {
  padding-left: 10px;
}
img.card-img-left{
  width: 150px;

}
.card-body{
  padding:10px 5px 10px 5px;
}
.card-title { 
  font-size: 15px;
}
.text-muted {
font-size: 13px;
}
.produtos{
  margin: 20px;
}
button.close.text-dark{
  background: none!important;
}
</style>
