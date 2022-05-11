<template>
  <div class="InfosFooter">
    <b-row>
      <b-col cols="12" sm="6" md="6" lg="3" xl="3">
        <div class="faq">
          <p class="faq-frase">
            FAQ / Envios e Devoluções /<br />
            Política de Loja /<br />
            Métodos de Pagamento
          </p>
        </div>
      </b-col>

      <b-col cols="12" sm="6" md="6" lg="3" xl="4">
        <div class="endereco">
          <p class="endereco-infos">
            Espaço-Cerâmica Ltda<br />
            Telefone: (34) 9174-5020 <br />
            Av. Rondon Pacheco, 381 - Uberlândia - MG<br />

            Estimativa de entrega 2 - 5 dias úteis
          </p>
        </div>
      </b-col>
      <b-col cols="12" sm="6" md="6" lg="3" xl="3">
        <b-row>
          <b-col cols="1" sm="1" md="1" lg="1" xl="1">
            <div>
              <img
                class="seguranca"
                src="../assets/seguranca.png"
                alt="seguranca"
              />
            </div>
          </b-col>
          <b-col>
            <p class="seguranca-frase">Segurança</p>
          </b-col>
        </b-row>

        <div>
          <p>
            Ambiente 100% Seguro.<br />
            Sua Informação é Protegida<br />
            Pela CriptografiaSSL 256-Bit
          </p>
        </div>
      </b-col>

      <b-col cols="12" sm="6" md="6" lg="3" xl="2">
        <div>
          <p class="metodos">Métodos de pagamentos aceitos</p>
          <img
            class="metodos-imagem"
            src="../assets/metodos.png"
            alt="metodos de pagamento"
          />
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<style scoped>
.InfosFooter {
  padding: 10px 100px 0px 100px;
  font-weight: 500;
  font-size: 13px;
  text-align: start;
 
}

.seguranca {
  width: 27px;
}
.seguranca-frase {
  text-transform: uppercase;
  padding-left: 10px;
      font-size: 12px;
  padding-top: 7px;
}
.metodos {
  text-transform: uppercase;
    font-size: 12px;
}

</style>