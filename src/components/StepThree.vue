<template>
	<v-container>
		<v-row class="text-center">
			<v-col cols="12">
				<div class="boxSteps d-flex mt-4">Etapa 3 de 4</div>
				<h1 class="boxSteps d-flex my-2">Senha de Acesso</h1>
				<v-sheet class="boxSteps">
					<v-form v-model="valid" @submit.prevent>
					<v-text-field outlined
						label="Digite sua senha"
						v-model="password"
						:rules="passwordRules"
						:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
						:type="showPassword ? 'text' : 'password'"
						@click:append="showPassword = !showPassword"
						required
					></v-text-field>
					<v-row>
						<v-col cols="4">
							<v-btn block class="mt-2" outlined color="black" to="/Cadastro-Pessoal" >Voltar</v-btn>
						</v-col>
						<v-col cols='8'>
							<v-btn :disabled="!valid" type="submit" block class="mt-2" color="warning" @click.prevent="goToNext()"  >Continuar</v-btn>
						</v-col>
						</v-row>
					</v-form>
				</v-sheet>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
  name: "StepThree",
  components: {
  },
  computed: {},
  data: () => ({
    password: "",
		passwordRules: [
			v => v.length >= 8 || 'A senha deve ter no mínimo 8 caracteres'
		],
		valid: false,
		showPassword: false,
  }),
	mounted() {
		// eslint-disable-next-line
		debugger
		this.InfosStorage = JSON.parse(sessionStorage.getItem('Infos'))
		this.InfosStorage ? '' : this.$router.push({name: 'StepTwo'})
	},
  methods: {
		goToNext() {
			let stringfyPassword = JSON.stringify(this.password)
			sessionStorage.setItem('Password', stringfyPassword)
			this.$router.push({name: 'StepFour'})
		}
  },
};
</script>