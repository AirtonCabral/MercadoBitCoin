<template id="welcome">
	<v-container>
		<v-row class="text-center">
			<v-col cols="12">
				<h1 class="titlePage">Seja bem vindo!</h1>
				<v-sheet width="300" class="mx-auto">
					<v-form v-model="valid" @submit="goToNext">
					<v-text-field variant="outlined"
						label="email"
						v-model="email"
						:rules="emailRules"
						required
					></v-text-field>
					<v-radio-group v-model="personType" inline>
						<v-radio label="Pessoa Física" value="PF"></v-radio>
						<v-radio label="Pessoa Jurídica" value="PJ"></v-radio>
					</v-radio-group>
					<v-btn :disabled="!valid" type="submit" block class="mt-2" color="warning" >Continuar</v-btn>
					</v-form>
				</v-sheet>
			</v-col>
		</v-row>
	</v-container>
</template>
<script>
export default {
	name: 'WelcomeStepOne',
	data: () => ({
		valid: false,
		email: '',
		emailRules: [
			v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Por favor, adicione um email válido'
		],
		personType: 'PF',
	}),
	methods: {
    goToNext(){
			let InfosForRegister = {
				personType: this.personType,
				email: this.email
			}
			let stringfydInfos = JSON.stringify(InfosForRegister)
			sessionStorage.setItem('personType', stringfydInfos)
			this.$router.push({name: 'StepTwo'})
		}
  }
}
</script>

<style scoped>
.titlePage {
	margin-bottom: 20px;
	margin-left: -60px;
}
</style>