<template>
	<section
		id="forgot-password"
		class="tw-min-w-full tw-min-h-full tw-flex tw-justify-center tw-items-center"
	>
		<v-card class="tw-w-96">
			<v-card-title class="tw-text-center">Forgot Password</v-card-title>

			<v-card-content class="tw-max-w-full tw-p-4">
				<v-text-field
					class="tw-mx-5"
					placeholder="you-are-awesome@mail.com"
					v-model="email"
					:rules="[required('email'), emailFormat()]"
				></v-text-field>
				<v-btn
					@click="forgotPassword"
					color="success"
					width="90%"
					class="tw-m-5"
					>Forgot Password</v-btn
				>
			</v-card-content>
		</v-card>
	</section>
</template>

<script>
import validation from "@/utils/validations";

export default {
	data() {
		return {
			...validation,
			email: "",
		};
	},

	methods: {
		async forgotPassword() {
			console.log(this.email);
			// if (this.email) {
			try {
				let response = await this.$axios.post("/user/forgot", {
					email: this.email,
				});

				if (response.status === 204 || response.status === 200) {
					alert(response.data.msg);
					this.$router.push("/");
				}
			} catch ({ response }) {
				alert(response.data.msg);
			}
			this.email = "";
			// }
		},
	},
};
</script>
