<template>
  <div class="ItemCards">

    <b-row >
      <b-col  v-for="produto in produtos" :key="produto.id"
       class="mt-3" cols="12" sm="12" md="6" lg="4" xl="4">

        <b-card  class="produtos">
          <img class="produtos-imagem" alt="prato"  :src="getImgUrl(produto.imagem)" />
          <b-card-text class="produtos-texto">{{produto.descricao}}</b-card-text>
          <b-card-text class="produtos-valor">R$ {{ produto.preco }}</b-card-text>
        </b-card>
 
      </b-col>
    </b-row>
 
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
  methods:{
    getImgUrl(pic) {
    return require('../assets/'+pic)
}
  }
};
</script>

<style scoped>
.ItemCards {
  padding-top: 20px;

}.produtos{
  border: 0 ;
  background-color: rgba(157, 157, 157, 0);
  text-align: center;

}
.produtos-imagem{
  width: 300px;
}
.produtos-texto{
  font-weight: 500;
  font-size: 15px;
  padding-top:20px ;
}
.produtos-valor{
    color: #717171;
  font-weight: 500;
  font-size: 14px;
}

@media screen and (min-width: 320px) and (max-width: 768px) {
  .produtos-imagem{
  width: 80%;
}
}
@media screen and (min-width: 769px) and (max-width: 1000px) {
   .produtos-imagem{
  width: 280px;
}
}
@media screen and (min-width: 1001px) and (max-width: 1200px) {
   .produtos-imagem{
  width: 250px;
}
}
@media screen and (min-width: 1201px) and (max-width: 1500px) {
  .produtos-imagem{
  width: 370px;
}
}
@media screen and (max-width: 15001px)  {
  .produtos-imagem{
  width: 80%;
}
}
</style>