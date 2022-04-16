<template>
	<section
		id="forgot-password"
		class="tw-min-w-full tw-min-h-full tw-flex tw-justify-center tw-items-center"
	>
		<v-card class="tw-w-96">
			<v-card-title class="tw-text-center">Reset Password</v-card-title>

			<v-card-content class="tw-max-w-full tw-p-4">
				<v-text-field
					type="password"
					class="tw-mx-5"
					placeholder="New Password"
					v-model="password"
					:rules="[
						required('password'),
						minLength('Password', 8),
						maxLength('Password', 16),
					]"
				></v-text-field>
				<v-btn
					@click="resetPassword"
					color="success"
					width="90%"
					class="tw-m-5"
					>Reset Password</v-btn
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
			password: "",
		};
	},

	methods: {
		async resetPassword() {
			// console.log(this.password);
			// console.log(this.$route.params.id);
			if (this.$route.params.id.length > 100) {
				try {
					let response = await this.$axios.post("/user/reset", {
						token: this.$route.params.id,
						password: this.password,
					});

					if (response.status === 204 || response.status === 200) {
						alert(response.data.msg);
						this.$router.push("/");
					}
				} catch ({ response }) {
					alert(response.data.msg);
				}
			} else {
				alert(`Please provide reset token`);
			}
		},
	},
};
</script>
