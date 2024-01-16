import Vue from 'vue'
import VueRouter from 'vue-router'

import StepOne from '../components/StepOne.vue'
import StepTwo from '../components/StepTwo.vue'
import StepThree from '../components/StepThree.vue'
import StepFour from '../components/StepFour.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'StepOne',
    component: StepOne
  },
  {
    path: '/Cadastro-Pessoal',
    name: 'StepTwo',
    component: StepTwo
  },{
    path: '/Senha-Acesso',
    name: 'StepThree',
    component: StepThree
  },{
    path: '/Revisar-Informações',
    name: 'StepFour',
    component: StepFour
  }
]

const router = new VueRouter({
  routes
})

export default router
