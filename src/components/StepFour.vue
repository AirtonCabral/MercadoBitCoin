<template>
	<v-container>
		<v-row class="text-center">
			<v-col cols="12">
				<div class="boxSteps d-flex mt-4">Etapa 4 de 4</div>
				<h1 class="boxSteps d-flex my-4">Revise as informações</h1>
				<v-sheet class="boxSteps">
					<v-form v-model="valid" @submit.prevent>
						<v-text-field outlined
							label="email"
							v-model="confirmData.email"
							required
						></v-text-field>
						<v-text-field outlined
							label="Nome"
							v-model="confirmData.personName"
							type="text"
							required
						></v-text-field>
						<v-text-field
							v-if="labelPessoa == 'PF'"
							outlined
							type="text"
							label="CPF"
							v-model="confirmData.document"
							v-mask="'###.###.###-##'"
							:rules="documentRulesCPF"
							required
						></v-text-field>
						<v-text-field
							v-if="labelPessoa == 'PJ'"
							outlined
							type="text"
							label="CNPJ"
							v-model="confirmData.document"
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
									v-model="confirmData.dateBirth"
									label="Data de nascimento"
									readonly
									v-bind="attrs"
									v-on="on"
								></v-text-field>
							</template>
							<v-date-picker
								v-model="confirmData.dateBirth"
								@input="menu = false"
							></v-date-picker>
						</v-menu>
						<v-text-field outlined
							label="Telefone"
							v-model="confirmData.phone"
							required
						></v-text-field>
						<v-text-field outlined
							label="Digite sua senha"
							v-model="confirmData.password"
							:rules="passwordRules"
							:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
							:type="showPassword ? 'text' : 'password'"
							@click:append="showPassword = !showPassword"
							required
						></v-text-field>
						<v-row>
							<v-col cols="4">
								<v-btn block class="mt-2" outlined color="black" to="/Senha-Acesso" >Voltar</v-btn>
							</v-col>
							<v-col cols='8'>
								<v-btn :disabled="!valid" type="submit" block class="mt-2" color="warning" @click.prevent="finish()">Cadastrar</v-btn>
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
  name: "StepFour",
  computed: {},
  data: () => ({
		valid: false,
		menu: false,
		InfosStorage: '',
		PasswordStorage: '',
		PersonTypeStorage: '',
		labelPessoa:'PF',
		showPassword: false,
		confirmData: {
			email: '',
			personName:	'',
			document: '',
			dateBirth: '',
			phone: '',
			password: '' 
		},
		emailRules: [
			v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Por favor, adicione um email válido'
		],
		personNameRules: [
			v => v.length >= 10 || 'Digite um nome válido '
		],
		documentRulesCPF: [
			v => v.length >= 11 || 'Digite um CPF válido ',
		],
		documentRulesCNPJ: [
			v => v.length <= 18 || 'Digite um CNPJ válido'
		],
		passwordRules: [
			v => v.length >= 8 || 'A senha deve ter no mínimo 8 caracteres'
		],
  }),
	created() {
		// eslint-disable-next-line
		debugger
		this.InfosStorage = JSON.parse(sessionStorage.getItem('Infos'))
		this.PasswordStorage = JSON.parse(sessionStorage.getItem('Password'))
		this.PersonTypeStorage = JSON.parse(sessionStorage.getItem('personType'))
		console.log(this.PersonTypeStorage)
		this.labelPessoa = this.PersonTypeStorage.personType
		this.confirmData = {
			email: this.PersonTypeStorage.email,
			personName:	this.InfosStorage.personName,
			document: this.InfosStorage.document,
			dateBirth: this.InfosStorage.dateBirth,
			phone: this.InfosStorage.phone,
			password: this.PasswordStorage 
		}
	},
	methods: {
		finish() { 
			alert('Cadastro realizado com sucesso')
			sessionStorage.setItem('Password', '')
			sessionStorage.setItem('Infos', '')
			sessionStorage.setItem('personType', '')
			this.$router.push({name: 'StepOne'})
		}
  },
};
</script>