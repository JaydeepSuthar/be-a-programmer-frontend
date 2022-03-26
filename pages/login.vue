<template>
<div>
<v-app>
	<h1>Login</h1> <br>
<v-layout>
<v-flex sm12 md6 offset-md3  >
<v-card elevation="4" light tag="section">

	

		<UserAuthForm :submitForm="handleUserLogin" buttonText="Login" />

		<br>


		<v-btn @click="loginWithGoogle" color="blue">Sign in with Google</v-btn><br> <br>

	<strong style="font-size:20px;">New User? </strong>&nbsp;&nbsp;&nbsp;
	<v-btn type="submit"  large class="success" to="/signup">Sign up</v-btn>


	</v-container>

		</v-card>
		</v-flex>
		</v-layout>
		</v-app>
		</div>
</template>
<style scoped>

h1{
	color:rgba(15, 135, 182, 0.767);
	font-size: 40px;
	text-align: center;

}
</style>

<script>
	import UserAuthForm from '@/components/UserAuthForm.vue'

	export default {
		components: {
			UserAuthForm
		},
		methods: {
			async handleUserLogin(loginInfo) {
				let response = await this.$auth.loginWith('local', {
					data: loginInfo
				})
				let user = response.data.loggedInUser;

				this.$auth.setUser(user)
			},
			async loginWithGoogle() {
				let response = await this.$auth.loginWith('google');
			}
		}
	}
</script>
