<template>
  <main>
    <div class="livro">
      <label for="">Livro</label>
    </div>
    <router-link to="/cadastro">
      <button>←VOLTAR</button>
    </router-link>
    <div class="cadastro">
      <input class="pesq" type="text" placeholder="Título" />
      <input class="pesq2" type="text" placeholder="Categoria" />
      <input class="pesq3" type="text" placeholder="Editora" />
      <input class="pesq4" type="text" placeholder="Autor" />
      <button class="btncad">OK</button>
    </div>
  </main>
  
</template>
<style scoped>
.livro {
  position: absolute;
  width: 920px;
  height: 600px;
  left: 490px;
  top: 291px;

  background: #d9d9d9;
  border-radius: 20px;
}
.livro label {
  position: absolute;
  width: 120px;
  height: 44px;
  left: 400px;
  top: 30px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 44px;

  text-align: center;

  color: #6c3a3a;
}
.pesq {
  position: absolute;
  width: 180px;
  height: 30px;
  left: 527px;
  top: 374px;
  font-family: "Montserrat";
  text-align: left;
  border-radius: 10px;
  background-color: #6c3a3a;
  color: #ffffff;
}
.pesq2 {
  position: absolute;
  width: 180px;
  height: 30px;
  left: 730px;
  top: 374px;
  font-family: "Montserrat";
  text-align: left;
  border-radius: 10px;
  background-color: #6c3a3a;
  color: #ffffff;
}
.pesq3 {
  position: absolute;
  width: 180px;
  height: 30px;
  left: 930px;
  top: 374px;
  font-family: "Montserrat";
  text-align: left;
  border-radius: 10px;
  background-color: #6c3a3a;
  color: #ffffff;
}
.pesq4 {
  position: absolute;
  width: 180px;
  height: 30px;
  left: 1133px;
  top: 374px;
  font-family: "Montserrat";
  text-align: left;
  border-radius: 10px;
  background-color: #6c3a3a;
  color: #ffffff;
}
input::placeholder {
  padding: 24px;
  color: #d9d9d9;
}
input {
  text-decoration-style: none;
  border: none;
}
input:focus {
  outline: none;
}
.btncad {
  position: absolute;
  width: 50px;
  left: 1334px;
  top: 373px;
  font-style: normal;
  padding: 5px;
  list-style: none;
  font-family: "Montserrat";
  cursor: pointer;
  border-radius: 10px;
  background-color: #ffffff;
  color: #000000;
}
.btncad:hover {
  background-image: linear-gradient(#6c3a3a, #5b3a3a);
  color: #ffffff;
}
button {
  position: absolute;
  width: 80px;
  height: 30px;
  left: 1322px;
  top: 298px;
  font-family: "Montserrat";
  text-align: center;
  border-radius: 10px;
  background-color: #6c3a3a;
  color: #ffffff;
}
</style>
