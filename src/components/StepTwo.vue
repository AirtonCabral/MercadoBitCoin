<template>
	<v-container>
		<v-row class="text-center">
			<v-col cols="12">
				<div class="boxSteps d-flex mt-4">Etapa 2 de 4</div>
				<h1 class="boxSteps d-flex my-2">Pessoa {{personType}}</h1>
				<v-sheet class="boxSteps">
					<v-form v-model="valid" @submit.prevent>
					<v-text-field outlined
						type="text"
						label="Nome"
						v-model="registerPersonType.personName"
						:rules="personNameRules"
						required
					></v-text-field>
					<v-text-field
						v-if="labelPessoa == 'PF'"
						outlined
						type="text"
						label="CPF"
						v-model="registerPersonType.document"
						v-mask="'###.###.###-##'"
						:rules="documentRulesCPF"
						required
					></v-text-field>
					<v-text-field
						v-if="labelPessoa == 'PJ'"
						outlined
						type="text"
						label="CNPJ"
						v-model="registerPersonType.document"
						v-mask="'##.###.###/####-##'"
						:rules="documentRulesCNPJ"
						required
					></v-text-field>
					<v-menu
						v-model="menu"
						:close-on-content-click="false"
						:nudge-right="40"
						transition="scale-transition"
						offset-y
						min-width="auto"
					>
						<template v-slot:activator="{ on, attrs }">
							<v-text-field
								outlined
								v-model="registerPersonType.dateBirth"
								label="Data de nascimento"
								readonly
								v-bind="attrs"
								v-on="on"
							></v-text-field>
						</template>
						<v-date-picker
							v-model="registerPersonType.dateBirth"
							@input="menu = false"
						></v-date-picker>
					</v-menu>
					<v-text-field outlined
						label="Telefone"
						v-model="registerPersonType.phone"
						:rules="phoneRules"
						v-mask="'(##) #####-####'"
						required
					></v-text-field>
					<v-row>
						<v-col cols="4">
							<v-btn block class="mt-2" outlined color="black" to="/" >Voltar</v-btn>
						</v-col>
						<v-col cols='8'>
							<v-btn :disabled="!valid" type="submit" block class="mt-2" color="warning" @click.prevent="goToNext()" >Continuar</v-btn>
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
	name: "PersonTypeStepTwo",
	components: {},
	data: () => ({
		valid: false,
		menu: false,
		personStorage: '',
		personType: '',
		labelPessoa: 'PF',
		registerPersonType: {
			personName: "",
			document: "",
			dateBirth: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
			phone: "",
		},
		personNameRules: [
			v => v.length >= 10 || 'Digite um nome válido '
		],
		documentRulesCPF: [
			v => v.length >= 11 || 'Digite um CPF válido ',
		],
		documentRulesCNPJ: [
			v => v.length <= 18 || 'Digite um CNPJ válido'
		],
		phoneRules: [
			v => v.length == 15 || 'Digite um telefone válido'
		]
	}),
	mounted() {
		// eslint-disable-next-line
		debugger
		this.personStorage = JSON.parse(sessionStorage.getItem('personType'))
		if(this.personStorage){
			this.personType= this.personStorage.personType === 'PF'? 'Física' : 'Jurídica'
			this.labelPessoa = this.personStorage.personType
			console.log(this.personType)
		} else {
			this.$router.push({name: 'StepOne'})
		}
	},
	methods: {
		goToNext(){
			let stringfydInfos = JSON.stringify(this.registerPersonType)
			sessionStorage.setItem('Infos', stringfydInfos)
			this.$router.push({name: 'StepThree'})
		},
	},
};
</script>

<style>

</style>