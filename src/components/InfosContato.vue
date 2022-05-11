<template>
  <div class="InfosContato">
    <div class="informacoes">
      <b-container>
        <p class="titulo">Espaço-Cerâmica</p>
        <b-row>
          <b-col cols="12" sm="12" md="12" lg="5" xl="7">
            <b-col cols="12" sm="6" md="6" lg="12" xl="12">
              <div class="informacoes-endereco">
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

          <b-col cols="12" sm="" md="" lg="7" xl="5">
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
              <b-col md="12" lg="10" xl="12">
                <div class="enviar">
                  <button class="enviar-bt">Enviar</button>
                </div>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="12" lg="12" xl="12">
                <p class="noticia">Receba nossa Newsletter</p>
                <label class="label__text___newsletter" for="phone"
                  >Insira o seu email aqui*</label
                >
              </b-col>
            </b-row>

            <b-row>
              <b-col cols="12" sm="12" md="12" lg="12" xl="12">
                <b-row>
                  <b-col cols="12" sm="7" md="6" lg="6" xl="8">
                    <div class="inserir-email">
                      <b-form-input class="noticia-input"></b-form-input>
                    </div>
                  </b-col>
                  <b-col cols="12" sm="5" md="3" lg="4" xl="4">
                    <button class="enviar-email">Participar</button>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>
<style  scoped>
.InfosContato {
  background-color: white;
}

.informacoes {
  background-color: white;
  padding: 60px;
  color: black;
}
.informacoes-endereco {
  font-weight: 500;
}
.titulo {
  text-transform: uppercase;
  font-weight: bold;
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