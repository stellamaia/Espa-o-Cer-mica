<template>
  <div id="app" class="app">
    <NavBar />
    <div class="conteudo">
      <div class="header">
        <div class="header-content">
          <div class="bloco">
            <h1 class="bloco-principal">Espaço Cerâmica</h1>
            <h3 class="sub-titulo">Cerâmica artesanal</h3>
            <div class="btn">
              <button class="botao">Compre agora</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="conjunto">
      <b-row>
        <b-col class="mt-3" cols="12" sm="6" md="6" lg="6" xl="3">
          <b-card class="conjunto-cards">
            <img
              class="conjunto-cards__img"
              alt=""
              src="./assets/caminhao.png"
            />
            <b-card-text class="conjunto-cards__text">Frete Grátis</b-card-text>
            <b-card-text class="conjunto-cards__condicoes"
              >Confira Condições</b-card-text
            >
          </b-card>
        </b-col>

        <b-col class="mt-3" cols="12" sm="6" md="6" lg="6" xl="3">
          <b-card class="conjunto-cards">
            <img
              class="conjunto-cards__img"
              alt=""
              src="./assets/localizacao.png"
            />
            <b-card-text class="conjunto-cards__text">Enviamos</b-card-text>
            <b-card-text class="conjunto-cards__condicoes"
              >para todo Brasil</b-card-text
            >
          </b-card>
        </b-col>
        <b-col class="mt-3" cols="12" sm="6" md="6" lg="6" xl="3">
          <b-card class="conjunto-cards">
            <img class="conjunto-cards__img" alt="" src="./assets/cartao.png" />
            <b-card-text class="conjunto-cards__text"
              >Até 12x sem juros</b-card-text
            >
            <b-card-text class="conjunto-cards__condicoes"
              >10% Off no Boleto</b-card-text
            >
          </b-card>
        </b-col>
        <b-col class="mt-3" cols="12" sm="6" md="6" lg="6" xl="3">
          <b-card class="conjunto-cards">
            <img
              class="conjunto-cards__img"
              alt=""
              src="./assets/seguranca.png"
            />
            <b-card-text class="conjunto-cards__text">100% seguro</b-card-text>
            <b-card-text class="conjunto-cards__condicoes"
              >Certificado SSL</b-card-text
            >
          </b-card>
        </b-col>
      </b-row>
    </div>

    <div class="colecao">
      <h2 class="colecao-frase">Nossa coleção</h2>
      <div class="container">
        <p class="colecao-paragrafo">
          Tendo como inspiração as formas, cores e texturas da natureza,
          produzimos desde 2012, cerâmica utilitária e decorativa. Aqui tudo é
          feito à mão: a mistura de argilas, a confecção dos moldes em gesso, a
          modelagem, esmaltação e pintura das peças. As queimas são realizadas
          em fornos a gás, que atingem 1280oC e garantem um material refratário,
          que pode ir ao forno e microondas. Devido a esse processo totalmente
          artesanal, cada objeto se torna único. Isso é o que encanta no
          universo da cerâmica!
        </p>
      </div>
    </div>

    <div class="coo">
      <b-row>
        <b-col class="mt-3" cols="12" sm="12" md="12" lg="6" xl="4">
          <b-card class="produtos">
            <img class="imagem-um" alt="prato" src="./assets/img1.jpeg" />
            <b-card-text class="texto-produto">Sou um produto</b-card-text>
            <b-card-text class="valor-produto">R$ 85,00</b-card-text>
          </b-card>
        </b-col>
        <b-col class="mt-3" cols="12" sm="12" md="12" lg="6" xl="4">
          <b-card class="produtos">
            <img class="imagem-um" alt="prato" src="./assets/img2.jpeg" />
            <b-card-text class="texto-produto">Sou um produto</b-card-text>
            <b-card-text class="valor-produto">R$ 85,00</b-card-text>
          </b-card>
        </b-col>
        <b-col class="mt-3" cols="12" sm="12" md="12" lg="6" xl="4">
          <b-card class="produtos">
            <img class="imagem-um" alt="prato" src="./assets/img3.jpeg" />
            <b-card-text class="texto-produto">Sou um produto</b-card-text>
            <b-card-text class="valor-produto">R$ 85,00</b-card-text>
          </b-card>
        </b-col>
        <b-col class="mt-3" cols="12" sm="12" md="12" lg="6" xl="4">
          <b-card class="produtos">
            <img class="imagem-um" alt="prato" src="./assets/img4.jpeg" />
            <b-card-text class="texto-produto">Sou um produto</b-card-text>
            <b-card-text class="valor-produto">R$ 85,00</b-card-text>
          </b-card>
        </b-col>
        <b-col class="mt-3" cols="12" sm="12" md="12" lg="6" xl="4">
          <b-card class="produtos">
            <img class="imagem-um" alt="prato" src="./assets/img5.jpeg" />
            <b-card-text class="texto-produto">Sou um produto</b-card-text>
            <b-card-text class="valor-produto">R$ 85,00</b-card-text>
          </b-card>
        </b-col>
        <b-col class="mt-3" cols="12" sm="12" md="12" lg="6" xl="4">
          <b-card class="produtos">
            <img class="imagem-um" alt="prato" src="./assets/img6.jpeg" />
            <b-card-text class="texto-produto">Sou um produto</b-card-text>
            <b-card-text class="valor-produto">R$ 85,00</b-card-text>
          </b-card>
        </b-col>
        <b-col class="mt-3" cols="12" sm="12" md="12" lg="6" xl="4">
          <b-card class="produtos">
            <img class="imagem-um" alt="prato" src="./assets/img7.jpeg" />
            <b-card-text class="texto-produto">Sou um produto</b-card-text>
            <b-card-text class="valor-produto">R$ 85,00</b-card-text>
          </b-card>
        </b-col>
        <b-col class="mt-3" cols="12" sm="12" md="12" lg="6" xl="4">
          <b-card class="produtos">
            <img class="imagem-um" alt="prato" src="./assets/img8.jpeg" />
            <b-card-text class="texto-produto">Sou um produto</b-card-text>
            <b-card-text class="valor-produto">R$ 85,00</b-card-text>
          </b-card>
        </b-col>
        <b-col class="mt-3" cols="12" sm="12" md="12" lg="6" xl="4">
          <b-card class="produtos">
            <img class="imagem-um" alt="prato" src="./assets/img9.jpeg" />
            <b-card-text class="texto-produto">Sou um produto</b-card-text>
            <b-card-text class="valor-produto">R$ 85,00</b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </div>

    <div class="informacoes">
      <b-container>
        <b-row>
          <b-col cols="12" sm="12" md="12" lg="5" xl="6">
            <b-col cols="12" sm="12" md="12" lg="12" xl="12">
              <div class="informacoes-endereco">
                <p class="informacoes-endereco__titulo">Espaço-Cerâmica</p>
                <p class="informacoes-endereco__completo">
                  End: Av. Bernardino de Campos, 98
                </p>
                <p class="informacoes-endereco__completo">
                  São Paulo, SP CEP: 12345-678
                </p>
                <p class="informacoes-endereco__completo">
                  Tel: (11) 3456-7890
                </p>
                <p class="informacoes-endereco__completo">
                  Email: info@meusite.com
                </p>
              </div>
            </b-col>

            <b-col>
              <div class="horarios">
                <p class="horarios-dias">Seg - sex: 7:00 - 22:00</p>
                <p class="horarios-dias">Sábado: 8:00 - 22:00</p>
                <p class="horarios-dias">Domingo 8:00 - 23:00</p>
              </div>
            </b-col>
          </b-col>
          <b-col cols="12" sm="" md="" lg="" xl="">
            <b-row>
              <b-col md="6" lg="5" xl="6">
                <label class="label__text" for="firstName"> Nome</label>
                <b-form-input id="firstName" type="text"></b-form-input>
              </b-col>
              <b-col md="6" lg="5" xl="6">
                <label class="label__text" for="phone">Sobrenome</label>
                <b-form-input id="phone" type="text"></b-form-input>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="6" lg="5" xl="6">
                <label class="label__text" for="firstName"> Telefone</label>
                <b-form-input id="firstName" type="text"></b-form-input>
              </b-col>
              <b-col md="6" lg="5" xl="6">
                <label class="label__text" for="phone">Email*</label>
                <b-form-input id="phone" type="text"></b-form-input>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="12" lg="10" xl="12">
                <label class="label__text___mensagem" for="firstName">
                  Deixe-nos uma mensagem...</label
                >
                <b-form-input id="firstName" type="text"></b-form-input>
              </b-col>
            </b-row>

            <b-row>
              <div class="enviar">
                <button class="enviar-bt">Enviar</button>
              </div>
              <p class="noticia">Receba nossa Newsletter</p>
              <label class="label__text___newsletter" for="phone"
                >Insira o seu email aqui*</label
              >

              <b-col cols="12" sm="8" md="5" lg="6" xl="6">
                <div class="inserir-email">
                  <b-form-input class="noticia-input"></b-form-input>
                </div>
              </b-col>

              <b-col cols="12" sm="4" md="3" lg="4" xl="3">
                <button class="enviar-email">Participar</button>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <GoogleMap />
    <!-- <nav>
     <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    -->
    <router-view />
  </div>
</template>
<script>
import GoogleMap from "./components/GoogleMap";
import NavBar from "./components/NavBar";

export default {
  name: "app",
  components: {
    GoogleMap,
    NavBar,
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: border-box;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.app {
  background-color: #eeeeeed9;
}
.header:hover {
  color: #5d914c;
}
.header {
  background: no-repeat center/cover url("./assets/header.jpeg");
  width: 100%;
  height: calc(100vh - 120px);
  font-family: "Montserrat", sans-serif;
}
.header-content {
  text-align: center;
  padding-top: 260px;
}

.bloco-principal {
  text-transform: uppercase;
  color: white;
  font-size: 2rem;

  text-align: center;
}
.sub-titulo {
  padding-top: 10px;
  font-size: 30px;
  color: white;
}
.btn {
  padding-top: 50px;
}
.botao {
  background-color: black;
  color: white;
  font-weight: bold;
  font-size: 16px;
  height: 50px;
  width: 220px;
}
.botao:hover {
  background-color: rgb(123, 101, 73);
  color: white;
  font-weight: bold;
  font-size: 16px;
  height: 50px;
  width: 220px;
}

.conjunto {
  padding: 70px 0 70px 0;
}

.conjunto-cards {
  text-align: center;
  border-radius: 0;
  border: none;
  background-color: white;
  height: 200px;
}
.conjunto-cards__img {
  width: 60px;
  padding-top: 20px;
}

.conjunto-cards__text {
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;
}

.conjunto-cards__condicoes {
  font-size: 15px;
  font-weight: bold;
  text-align: center;
}
.colecao {
  background-color: white;
  padding: 20px;
}
.colecao-frase {
  text-align: center;
  text-transform: uppercase;
  padding: 30px 0 30px 0;
}
.colecao-paragrafo {
  text-align: center;
  margin: 30px;
}
.coo {
  padding-top: 10px;
}
.produtos {
  text-align: center;
  border-radius: 0;
  border: none;

  background-color: rgba(255, 255, 255, 0);
}
.imagem-um {
  width: 350px;
}
.texto-produto {
  font-weight: bold;
  font-size: 13px;
}
.valor-produto {
  color: #717171;
  font-weight: 500;
  font-size: 12px;
}
.informacoes {
  background-color: white;
  padding: 60px;
  color: black;
}
.informacoes-endereco {
  font-weight: 500;
}
.informacoes-endereco__titulo {
  text-transform: uppercase;

  font-size: 15px;
  padding-bottom: 70px;
}
.informacoes-endereco__completo {
  padding-bottom: 10px;
}
.horarios {
  padding: 30px 0 30px 0;
}
.horarios-dias {
  padding-top: 10px;
  text-transform: uppercase;
  font-weight: 500;
}
.form-control {
  border: none;
  border-bottom: 1px solid black;
  border-radius: 0;
}
.label__text {
  color: black;
  font-weight: 400;
}
.label__text___mensagem {
  padding: 30px 0 10px 0;
}
.enviar {
  text-align: center;
  padding: 10px 0 30px 0;
}
.enviar-bt {
  height: 40px;
  width: 200px;
  background-color: rgba(255, 255, 255, 0.632);
  color: rgb(0, 0, 0);
  font-weight: 500;
}
.enviar-bt:hover {
  background-color: black;
  color: white;
}
.noticia {
  color: black;
  font-weight: 600;
  padding-bottom: 10px;
}
.label__text___newsletter {
  color: #717171;
  font-weight: 500;
}
.noticia-input {
  border: 1px solid black;
  height: 32px;
}
.inserir-email {
  padding-bottom: 6px;
}
.enviar-email {
  background-color: black;
  color: white;
  font-weight: bold;
  font-size: 16px;
  height: 32px;

  width: 100%;
}
.enviar-email:hover {
  background-color: rgb(123, 101, 73);
  color: white;
  font-weight: bold;
  font-size: 16px;
  height: 32px;
  width: 100%;
}
</style>
