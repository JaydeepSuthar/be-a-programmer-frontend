<template>
	<div id="app">

		<v-app>
			<v-container >
 <h1 align="center">
		Sign in to your Account
		</h1>
				<v-layout wrap>
					<v-flex sm12 md6 offset-md3  >
						<v-card elevation="4" light tag="section">
								<v-card-text >

								<v-form  @submit.prevent="login">
									<v-text-field
										outlined
										label="Username/E-mail"
										type="text"

										v-model="login.username"
									></v-text-field>
									<v-text-field
										outlined
										hide-details
										label="Password"
										type="password"

										v-model="login.password"
									></v-text-field>
								</v-form>
							</v-card-text>

							<v-card-actions

							>
							<v-checkbox label="Remember Me" color="success"></v-checkbox> <v-spacer></v-spacer>
								<v-btn color="info"  flat>
									Forgot Your Password?
								</v-btn>
								 <v-btn color="info" nuxt to="admin/signup">
									 Sign Up
								 </v-btn>




							</v-card-actions>
							  <v-btn
									color="success"
									width="100%"
									 nuxt to="/admin/home"


								>   <v-icon>mdi-lock </v-icon> Login.. but now work without pasword
							 	</v-btn>
								<v-card-actions>  </v-card-actions>


						</v-card>
					</v-flex>
				 </v-layout>
			</v-container>
		</v-app>
	</div>
</template>

<style scoped>

h1{
	color: rgb(150, 135, 135);
}
</style>
<script>

export default {
	layout:"login" ,

data() {
			return {

				login: {
					username: "",
					password: "",


				},
			};
},
methods: {
			async login() {

		if (response.status === 200 || response.status === 204) {
						this.$store.dispatch("snackbar/setSnackbar", {
							text: `You have successfully created exam`,
						});

						this.$router.push(`/admin`);
					}
					else{
						alert("Wrong credentials");
					}

				}
			},

};
</script>

