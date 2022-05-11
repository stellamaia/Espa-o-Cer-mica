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
            <b-card-text class="conjunto-cards__text">Frete Grátis</b-card-text>
            <b-card-text class="conjunto-cards__condicoes"
              >Confira Condições</b-card-text
            >
          </b-card>
        </b-col>

        <b-col class="mt-3" cols="12" sm="6" md="6" lg="6" xl="3">
          <b-card class="conjunto-cards">
            <img class="conjunto-cards__img" src="../assets/localizacao.png" />
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
            <b-card-text class="conjunto-cards__text">100% seguro</b-card-text>
            <b-card-text class="conjunto-cards__condicoes"
              >Certificado SSL</b-card-text
            >
          </b-card>
        </b-col>
      </b-row>
      </div>
    </div>
  </div>
</template>

<style scoped>
.InfosCards {
  background-color: #eeeeeed9;
}
.bloco {
  padding: 70px;
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
</style>