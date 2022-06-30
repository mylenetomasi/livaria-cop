<template>
  <main>
    <h3>Escolha uma categoria para Cadastrar</h3>
    <div class="categorias">
      <router-link to="/Cadastrar-livro">
        <div class="livro">
          <label for="">Livro</label>
          <ul>
            <li>Título</li>
            <li>Categoria</li>
            <li>Editora</li>
            <li>Autor</li>
          </ul>
        </div>
      </router-link>
      <router-link to="/Cadastrar-editora">
        <div class="editora">
          <label for="">Editora</label>
          <ul>
            <li>Id</li>
            <li>Nome</li>
            <li>Site</li>
            <li>Telefone</li>
          </ul>
        </div>
      </router-link>
      <router-link to="/Cadastrar-usuario">
        <div class="usuario">
          <label for="">Usuário</label>
          <ul>
            <li>Id</li>
            <li>Username</li>
            <li>Email</li>
            <li>Nome</li>
            <li>Senha</li>
          </ul>
        </div>
      </router-link>
      <router-link to="/Cadastrar-autor">
        <div class="autor">
          <label for="">Usuário</label>
          <ul>
            <li>Id</li>
            <li>Username</li>
            <li>Email</li>
            <li>Nome</li>
            <li>Senha</li>
          </ul>
        </div>
      </router-link>
    </div>
  </main>
</template>
<style scoped>
h3 {
  position: absolute;
  width: 1080px;
  height: 359px;
  left: 300px;
  top: 180px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 900;
  font-size: 35px;
  line-height: 59px;

  text-align: center;

  color: #070707;
}
.livro {
  position: absolute;
  width: 277px;
  height: 310px;
  left: 350px;
  top: 291px;

  background: #d9d9d9;
  border-radius: 49px;
}
.livro label {
  position: absolute;
  width: 120px;
  height: 44px;
  left: 80px;
  top: 30px;
  cursor: pointer;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 44px;

  text-align: center;

  color: #000000;
}
.livro ul {
  position: absolute;
  width: 117px;
  height: 29px;
  left: 0px;
  top: 80px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  line-height: 29px;
  text-align: left;
  list-style-type: none;

  color: #000000;
}

.editora {
  position: absolute;
  width: 277px;
  height: 310px;
  left: 720px;
  top: 291px;

  background: #d9d9d9;
  border-radius: 49px;
}
.editora label {
  position: absolute;
  width: 177px;
  height: 44px;
  left: 50px;
  top: 30px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 44px;

  text-align: center;

  color: #000000;
}
.editora ul {
  position: absolute;
  width: 24px;
  height: 29px;
  top: 80px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  line-height: 29px;
  text-align: left;
  list-style-type: none;

  color: #000000;
}
.usuario {
  position: absolute;
  width: 277px;
  height: 310px;
  left: 1080px;
  top: 291px;

  background: #d9d9d9;
  border-radius: 49px;
}
.usuario label {
  position: absolute;
  width: 179px;
  height: 44px;
  left: 50px;
  top: 30px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 44px;

  text-align: center;

  color: #000000;
}
.usuario ul {
  position: absolute;
  width: 24px;
  height: 29px;
  top: 80px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  line-height: 29px;
  text-align: left;
  list-style-type: none;

  color: #000000;
}
</style>
<script setup></script>
