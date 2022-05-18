<template>
  <div class="InfosFooter">
    <b-row cols="1" cols-sm="1" cols-md="2" cols-lg="4">
      <b-col>
        <div class="faq">
          <p class="faq-frase">
            FAQ / Envios e Devoluções /<br />
            Política de Loja /<br />
            Métodos de Pagamento
          </p>
        </div>
      </b-col>

      <b-col>
        <div class="endereco">
          <p class="endereco-infos">
            Espaço-Cerâmica Ltda<br />
            Telefone: (34) 9174-5020 <br />
            Av. Rondon Pacheco, 381 - Uberlândia - MG<br />

            Estimativa de entrega 2 - 5 dias úteis
          </p>
        </div>
      </b-col>

      <b-col>
        <b-row cols="1" cols-sm="2" cols-md="2" cols-lg="2" xl="3">
          <b-col b-cols="12" sm="12" md="1" lg="2" xl="1">
            <div class="seguranca-imagem">
              <img
                class="seguranca"
                src="../assets/seguranca.png"
                alt="seguranca"
              />
            </div>
          </b-col>
          <b-col cols="12" sm="12" lg="3" xl="6">
            <p class="seguranca-frase">Segurança</p>
          </b-col>
        </b-row>
        <b-col>
          <div>
            <p>
              Ambiente 100% Seguro.<br />
              Sua Informação é Protegida<br />
              Pela CriptografiaSSL 256-Bit
            </p>
          </div>
        </b-col>
      </b-col>

      <b-col>
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
  padding: 10px 100px 10px 100px;
  font-weight: 500;
  font-size: 15px;
}

.seguranca {
  width: 27px;
}

.seguranca-frase {
  text-transform: uppercase;

  font-size: 14px;
  padding-top: 7px;
}
.metodos {
  text-transform: uppercase;
  font-size: 14px;
}
.teste {
  height: 500px;
  background-color: rgb(179, 179, 179);
}

.column {
  border: 2px solid red;
}
.column-2 {
  border: 2px solid rgb(0, 8, 255);
}

@media screen and (min-width: 320px) and (max-width: 480px) {
  .InfosFooter {
    padding: 20px;
    text-align: center;
  }
  .imagem-seguranca {
    text-align: end;
  }
}

@media screen and (min-width: 481px) and (max-width: 575px) {
  .InfosFooter {
    text-align: center;
  }
  .seguranca-frase {
    text-align: left;
  }
  .seguranca-imagem {
    text-align: right;
  }
}
@media screen and (min-width: 476px) and (max-width: 768px) {
  .InfosFooter {
    text-align: center;
  }
  .seguranca-frase {
    text-align: center;
  }
  .seguranca-imagem {
    text-align: center;
  }
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
  .InfosFooter {
    text-align: start;
  }
  .seguranca-frase {
    padding-left: 6px;
  }
  .seguranca-imagem {
    text-align: end;
  }
}

@media screen and (min-width: 1025px) and (max-width: 1200px) {
  .InfosFooter {
    text-align: start;
  }
}
@media screen and (min-width: 1201px) {
  .seguranca-frase {
    padding-left: 6px;
  }
}
</style>