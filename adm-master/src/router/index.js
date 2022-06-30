import { createRouter, createWebHistory } from "vue-router";
import cadastroComp from "../views/cadastroComp.vue";
import BemVindo from "../views/BemVindo.vue";
import CadLivro from "../views/CadLivro.vue";
import CadEditora from "../views/CadEditora.vue";
import CadUsuario from "../views/CadUsuario.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/cadastro",
      name: "CadastroComp",
      component: cadastroComp,
    },
    {
      path: "/",
      name: "BemVindo",
      component: BemVindo,
    },
    {
      path: "/Cadastrar-livro",
      name: "CadLivro",
      component: CadLivro,
    },
    {
      path: "/Cadastrar-editora",
      name: "CadEditora",
      component: CadEditora,
    },
    {
      path: "/Cadastrar-usuario",
      name: "CadUsuario",
      component: CadUsuario,
    },
  ],
});

export default router;
