<template>
  <div class="app">
    <div class="conteudo">
      <b-container>
      <b-row  class="text-center">

        <b-col cols="2" sm="3" md="3" lg="1" xl="1">
          <img class="cont-img" alt="" src="../assets/carrinho.png" />
        </b-col>
        <b-col cols="8" sm="6" md="7" lg="10" xl="10">
        
            <b-link class="frase">Espaço Cerâmica</b-link>
      
        </b-col>

        <b-col cols="2" sm="3" md="2" lg="1" xl="1">
       
          <button class="icone" v-b-toggle.sidebar-no-header>
          
             <img class="icone-list" alt="" src="../assets/menu.png" />
          </button>
      
</b-col>
   </b-row>
</b-container>
          <b-sidebar
            id="sidebar-no-header"
            aria-labelledby="sidebar-no-header-title"
            no-header
            right
            shadow
       
          >
            <template  #default="{ hide }">
              <div class="sid">
                <b-row >
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
                <b-container class="links">
                  <b-row cols="12">
                    <b-link class="header__link active" href="#foo"
                      >Home</b-link
                    >
                    <b-link class="header__link" href="#foo">Loja</b-link>
                    <b-link class="header__link" href="#foo">Sobre</b-link>
                    <b-link class="header__link" href="#foo">Contato</b-link>
                  </b-row>
                </b-container>
              </div>
            </template>
          </b-sidebar>
        
   
    </div>

    <!--
  

    <b-row>
      <b-col cols="1" sm="1" md="1" lg="1" xl="1"> </b-col>
      <b-col cols="9" sm="10" md="10" lg="10" xl="10">
        <div class="links">
          <b-link class="header__link active" href="#foo">Home</b-link>
          <b-link class="header__link" href="#foo">Loja</b-link>
          <b-link class="header__link" href="#foo">Sobre</b-link>
          <b-link class="header__link" href="#foo">Contato</b-link>
        </div>
      </b-col>
      <b-col cols="1" sm="1" md="1" lg="1" xl="1">
        <img class="cont-img" alt="" src="../assets/carrinho.png" />
      </b-col>
    </b-row>
    -->
  </div>
</template>
<style scoped>
.app {
  background-color: #7b1f1fd9;
  height: 100px;
}
.conteudo {
  padding-top: 40px;
}
.cont-img {

  height: 28px;
}
.icone{
  border:1px solid rgba(255, 255, 255, 0);
 height: 40px;
}
.frase {
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 21px;
  letter-spacing: 2px;

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
.sid{
  padding: 60px 40px 0 40px;
}
.login {
  padding: 5px;
}

.header__link {
  text-decoration: none;
  padding-bottom: 5px;
  font-weight: 500;
  font-size: 18px;
  color: black;
}
.header__link:hover {
  color: #72503b;
}
.active {
  text-decoration: none;
  color: #91664c;
}


</style>