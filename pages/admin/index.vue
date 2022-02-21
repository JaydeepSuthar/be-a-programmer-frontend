<template>
	<v-container class="d-flex flex-column pa-2">
		<h2 class="text-center mt-10 mb-10">Dashboard</h2>

		<v-card
			class="d-flex flex-column justify-center align-center cyan darken-1"
			max-width="20rem"
			height="15rem"
		>
			<p class="white--text display-4 font-weight-bold">{{ users }}</p>
			<p class="white--text">Total No. Registered Users</p>
		</v-card>
	</v-container>
</template>

<script>
	export default {
		layout: "admin",
		async asyncData({ $axios }) {
			let response = await $axios.get("/user/all/count");
			let users = response.data.data;
			console.log(users);
			return {
				users,
			};
		},
	};
</script>
