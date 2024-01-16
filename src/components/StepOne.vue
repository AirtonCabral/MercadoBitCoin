<template id="welcome">
	<v-container class="boxSteps">
		<v-row class="text-center">
			<v-col cols="12">
				<div class="boxSteps d-flex mt-4">Etapa 1 de 4</div>
				<h1 class="boxSteps d-flex my-2">Seja bem vindo!</h1>
				<v-sheet class="boxSteps">
					<v-form v-model="valid">
						<v-text-field 
							outlined
							label="email"
							v-model="email"
							:rules="emailRules"
							required
						></v-text-field>
						<v-radio-group v-model="personType" row>
							<v-radio label="Pessoa Física" color="warning" value="PF"></v-radio>
							<v-radio label="Pessoa Jurídica" color="warning" value="PJ"></v-radio>
						</v-radio-group>
						<v-btn
							:disabled="!valid"
							type="submit"
							block
							large
							color="warning"
							@click.prevent="goToNext()">Continuar</v-btn>
					</v-form>
				</v-sheet>
			</v-col>
		</v-row>
	</v-container>
</template>
<script>
export default {
	name: 'StepOne',
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