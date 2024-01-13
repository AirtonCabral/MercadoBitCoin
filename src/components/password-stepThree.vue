<template>
	<v-container>
		<v-row class="text-center">
			<v-col cols="12">
				<h1>Senha de Acesso</h1>
				<v-sheet width="300" class="mx-auto">
					<v-form v-model="valid" @submit.prevent>
						
					<v-text-field variant="outlined"
						label="Sua senha"
						v-model="password"
						type="text"
						required
					></v-text-field>
					<v-row>
						<v-col cols="4">
							<v-btn block class="mt-2" variant="outlined" color="warning" to="/Cadastro-de-Pessoa" >Voltar</v-btn>
						</v-col>
						<v-col cols='8'>
							<v-btn :disabled="!valid" type="submit" block class="mt-2" color="warning" to="/Revise-suas-informações" >Continuar</v-btn>
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
  name: "PasswordStepThree",
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