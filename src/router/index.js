import { createRouter, createWebHistory } from 'vue-router'
import WelcomeStepOne from '@/components/welcome-stepOne.vue'
import PersonTypeStepTwo from '@/components/personType-stepTwo.vue'
import PasswordStepThree from '@/components/password-stepThree.vue'
import CheckInfosStepFour from '@/components/checkinfos-stepFour.vue'

const routes = [
  {
    path: '',
    name: 'StepOne',
    component: WelcomeStepOne,
  },
  {
    path: '/Cadastro-de-Pessoa',
    name: 'StepTwo',
    component: PersonTypeStepTwo,
  },
  {
    path: '/Senha-de-Acesso',
    name: 'StepThree',
    component: PasswordStepThree,
  },
  {
    path: '/Revise-suas-informações',
    name: 'StepFour',
    component: CheckInfosStepFour,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
