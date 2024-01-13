<template>
	<v-container>
		<v-row class="text-center">
			<v-col cols="12">
				<h1>Pessoa {{personType}}</h1>
				<v-sheet width="300" class="mx-auto">
					<v-form v-model="valid" @submit.prevent>
					<v-text-field variant="outlined"
						label="Nome"
						v-model="registerPersonType.personName"
						type="text"
						required
					></v-text-field>
					<v-text-field variant="outlined"
						type="text"
						:label="labelPessoa"
						v-model="registerPersonType.document"
						required
						></v-text-field>
					<VueDatePicker v-model="registerPersonType.dateBirth" />
					<v-text-field variant="outlined"
						label="Telefone"
						v-model="registerPersonType.phone"
						required
						></v-text-field>
						<v-row>
							<v-col cols="4">
								<v-btn block class="mt-2" variant="outlined" color="warning" to="/" >Voltar</v-btn>
							</v-col>
							<v-col cols='8'>
								<v-btn :disabled="!valid" type="submit" block class="mt-2" color="warning" to="/Senha-de-Acesso" >Continuar</v-btn>
							</v-col>
						</v-row>
					</v-form>
				</v-sheet>
			</v-col>
		</v-row>
	</v-container>
</template>
<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'


export default {
  name: "PersonTypeStepTwo",
  components: {
    VueDatePicker,
  },
  computed: {},
  data: () => ({
    personType: "Física",
    labelPessoa: "CPF",
    registerPersonType: {
      personName: "",
      document: "",
      dateBirth: new Date(),
      phone: "",
    },
  }),
  methods: {
  },
};
</script>

<style>

</style>