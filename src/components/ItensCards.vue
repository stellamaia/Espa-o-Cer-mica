<template>
  <div class="ItemCards">
    <b-container>
      <b-row>
        <b-col
          v-for="produto in produtos"
          :key="produto.id"
          class="cards"
          cols="12"
          sm="12"
          md="6"
          lg="4"
          xl="4"
        >
          <b-card no-body class="produtos" 
          :img-src="getImgUrl(produto.imagem)">
            <button class="botao-card">Visualização rápida</button>

            <b-card-body>
              <b-card-title class="produtos-texto">
                {{ produto.descricao }}
              </b-card-title>
              <b-card-sub-title class="produtos-valor">
                R$ {{ produto.preco }}</b-card-sub-title
              >
              
            </b-card-body>
          
          </b-card>
            <button class="botao-comprar" @click="addToCarByStore(produto)">Adicionar ao carrinho</button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
const baseURL = "http://localhost:3000/produtos";
export default {
  name: "ItensCards",
  data() {
    return {
      produtos: [],
    };
  },

  created() {
    axios.get(baseURL).then((res) => {
      this.produtos = res.data;
      console.log(res.data);
    });
  },
  methods: {
    getImgUrl(pic) {
      return require("../assets/" + pic);
    },
    addToCarByStore(produto) {
      this.$store.dispatch("addToCarAction", produto);
    },
  },
};
</script>

<style scoped>
.ItemCards {
  padding-top: 20px;
}

.produtos {
  border: 0;
  background-color: #bb212100;
  text-align: center;
}

.cards {
  padding-bottom: 100px;
}
.card-img {
  cursor: pointer;
  border-radius: 0;


}
.card-img:hover {
  cursor: pointer;
}
.botao-card {
  color: rgba(140, 60, 60, 0);
  width: 100%;
height: 50px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  background-color: rgba(255, 255, 255, 0);
  position:absolute;
  bottom: 70px;
}
.botao-card:hover {
  color: rgb(0, 0, 0);
  position: absolute;
    width: 100%;
  transition: 20px;
  background-color: rgba(255, 255, 255, 0.879);
  transition: .5s;
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
.botao-comprar {
 background-color: black;
  color: white;
  height: 50px;

 
}

@media screen and (min-width: 320px) and (max-width: 768px) {
  .card-img,
  .botao-card, 
  .botao-comprar,
  .produtos{
    width: 100%!important;
    
  }
 
}
@media screen and (min-width: 769px) and (max-width: 1000px) {
  .card-img,.botao-card, .botao-comprar, .produtos{
    width: 280px!important;
  }
}
@media screen and (min-width: 1001px) and (max-width: 1200px) {
  .card-img ,.botao-card, .produtos,
  .botao-comprar{
    width: 300px!important;
  }
}
@media screen and (min-width: 1201px) and (max-width: 1500px) {
  .card-img, .botao-card,.produtos, .botao-comprar{
    width: 370px!important;
  }
}
@media screen and (max-width: 15001px) {
  .card-img ,
  .botao-card ,
  .produtos ,
  .botao-comprar{
    width: 100%!important;
  }
}
</style>