<template>
  <div class="InfosCards">
    <div class="bloco">
      <div class="conjunto">
        <b-row>
          <b-col class="mt-3" cols="12" sm="6" md="6" lg="6" xl="3">
            <b-card class="conjunto-cards">
              <img
                class="conjunto-cards__img"
                alt="Frete Grátis"
                src="../assets/caminhao.png"
              />
              <b-card-text class="conjunto-cards__text"
                >Frete Grátis</b-card-text
              >
              <b-card-text class="conjunto-cards__condicoes"
                >Confira Condições</b-card-text
              >
            </b-card>
          </b-col>

          <b-col class="mt-3" cols="12" sm="6" md="6" lg="6" xl="3">
            <b-card class="conjunto-cards">
              <img
                class="conjunto-cards__img"
                src="../assets/localizacao.png"
              />
              <b-card-text class="conjunto-cards__text">Enviamos</b-card-text>
              <b-card-text class="conjunto-cards__condicoes"
                >para todo Brasil</b-card-text
              >
            </b-card>
          </b-col>
          <b-col class="mt-3" cols="12" sm="6" md="6" lg="6" xl="3">
            <b-card class="conjunto-cards">
              <img
                class="conjunto-cards__img"
                alt=""
                src="../assets/cartao.png"
              />
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
                src="../assets/seguranca.png"
              />
              <b-card-text class="conjunto-cards__text"
                >100% seguro</b-card-text
              >
              <b-card-text class="conjunto-cards__condicoes"
                >Certificado SSL</b-card-text
              >
            </b-card>
          </b-col>
        </b-row>
      </div>
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
  </div>
</template>

<style scoped>
.InfosCards {
  background-color: #eeeeeed9;
}
.bloco {
  padding: 0px;
}

.conjunto{
  padding:25px
}.conjunto-cards {
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
  padding: 70px 20px 70px 20px;
}
.colecao-frase {
  text-align: center;
  text-transform: uppercase;
}
.colecao-paragrafo {
  text-align: center;
  margin: 30px 15px 0 15px;
}
</style>