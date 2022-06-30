<template>
  <main>
    <h3>Bem vindo</h3>
  </main>
  <div class="livro">
    <router-link to="/Cadastrar-livro">
      <button>Livro</button>
    </router-link>
  </div>
  <div class="editora">
    <router-link to="/Cadastrar-editora">
      <button>Editora</button>
    </router-link>
  </div>
  <div class="usuario">
    <router-link to="/Cadastrar-usuario">
      <button>Usuario</button>
    </router-link>
  </div>
  <div class="autor">
    <router-link to="/Cadastrar-autor">
      <button>Autor</button>
    </router-link>
  </div>

</template>
<style scoped>
main {
  position: absolute;
  width: 684px;
  height: 526px;
  left: 560px;
  top: 275px;
  text-align: center;

  background: #000000;
  border-radius: 10px;
}

h3 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 900;
  font-size: 35px;
  line-height: 59px;

  text-align: center;

  color: rgb(255, 255, 255);
}
.txtabert {
  font-family: "Montserrat";
  text-align: center;
  text-decoration: none;
  list-style-type: none;

  color: #000000;
}
.livro button {
  position: absolute;
  width: 350px;
  height: 59px;
  left: 715px;
  top: 482px;
  text-align: center;
  border-radius: 10px;
  color: #000000;
  cursor: pointer;
  background-color: #ffffff;
}
.editora button {
  position: absolute;
  width: 350px;
  height: 59px;
  left: 715px;
  top: 550px;
  text-align: center;
  border-radius: 10px;
  color: #000000;
  cursor: pointer;
  background-color: #ffffff;
}
.usuario button {
  position: absolute;
  width: 350px;
  height: 59px;
  left: 715px;
  top: 618px;
  text-align: center;
  border-radius: 10px;
  color: #000000;
  cursor: pointer;
  background-color: #ffffff;
}
.txtabert button {
  position: absolute;
  width: 350px;
  height: 59px;
  left: 161px;
  top: 423px;
  font-family: "Montserrat";
  text-align: center;
  border-radius: 10px;
  background-color: #272424;
  color: #ffffff;
  cursor: pointer;
}
</style>
