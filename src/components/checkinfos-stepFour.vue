<template>
	<v-container>
		<v-row class="text-center">
			<v-col cols="12">
				<h1>Revise suas informações</h1>
				<v-sheet width="300" class="mx-auto">
					<v-form v-model="valid" @submit.prevent>
						<v-text-field variant="outlined"
							label="email"
							v-model="email"
							required
						></v-text-field>
						<v-text-field variant="outlined"
							label="Nome"
							v-model="personName"
							type="text"
							required
						></v-text-field>
						<v-text-field variant="outlined"
							type="text"
							:label="labelPessoa"
							v-model="document"
							required
							></v-text-field>
						<VueDatePicker v-model="dateBirth" />
						<v-text-field variant="outlined"
							label="Telefone"
							v-model="phone"
							required
						></v-text-field>
						<v-text-field variant="outlined"
							label="Sua senha"
							v-model="password"
							type="text"
							required
						></v-text-field>
						<v-row>
							<v-col cols="4">
								<v-btn block class="mt-2" variant="outlined" color="warning" to="/Senha-de-Acesso" >Voltar</v-btn>
							</v-col>
							<v-col cols='8'>
								<v-btn :disabled="!valid" type="submit" block class="mt-2" color="warning" >Cadastrar</v-btn>
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
  name: "CheckInfosStepFour",
  components: {
  },
  computed: {},
  data: () => ({
    password: "",
		valid: false
  }),
  methods: {
  },
};
</script>