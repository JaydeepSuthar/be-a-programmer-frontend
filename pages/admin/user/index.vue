<template>
	<v-container fluid>
		<div id="course">
			<v-data-table
				:headers="headers"
				:items="users"
				:items-per-page="10"
				class="mt-10 elevation-3"
			>
				<template v-slot:top>
					<v-toolbar flat>
						<v-toolbar-title
							class="display-1 text-decoration-underline"
							>All Users</v-toolbar-title
						>
						<v-divider class="mx-4" inset vertical></v-divider>
						<v-spacer></v-spacer>
						<!-- <v-btn
							@click="showDialog = !showDialog"
							class="success"
							>Add Course</v-btn
						> -->
						<v-dialog v-model="dialogDelete" max-width="500px">
							<v-card>
								<v-card-title class="text-h5"
									>Are you sure you want to delete this
									item?</v-card-title
								>
								<v-card-actions>
									<v-spacer></v-spacer>
									<v-btn
										color="blue darken-1"
										text
										@click="closeDelete"
										>Cancel</v-btn
									>
									<v-btn
										color="blue darken-1"
										text
										@click="deleteItemConfirm"
										>OK</v-btn
									>
									<v-spacer></v-spacer>
								</v-card-actions>
							</v-card>
						</v-dialog>
					</v-toolbar>
				</template>
				<template v-slot:item.actions="{ item }">
					<!-- <v-btn small class="mr-2 warning">Edit</v-btn> -->
					<v-btn small @click="deleteUser(item)" class="mr-2 error"
						>Delete</v-btn
					>
				</template>
			</v-data-table>
		</div>
	</v-container>
</template>


<script>
	export default {
		layout: "admin",
		async asyncData({ $axios, store }) {
			let response = await $axios.get(`/user/all`);
			let users = await response.data.data;
			console.log(response);
			// store.commit('SET_COURSES', users);
			return {
				users,
			};
		},

		data() {
			return {
				showDialog: false,
				headers: [
					{
						text: "Name",
						align: "start",
						sortable: false,
						value: "name",
					},
					{ text: "Email", value: "email" },
					{ text: "Contact", value: "contact" },
					{ text: "Authenticated", value: "is_authenticated" },
					{ text: "Actions", value: "actions", sortable: false },
				],
				courses: [],
			};
		},
		methods: {
			closeDialogBox(value) {
				this.showDialog = value;
			},

			async deleteUser(user) {
				let confirmation = confirm(
					`Are you sure you want to delete ${user.name}`
				);

				if (confirmation) {
					const response = await this.$axios.delete(
						`/user/delete/${user.id}`
					);

					console.log(`User Deleted Successfully: ${response.data}`);

					this.$store.dispatch("snackbar/setSnackbar", {
						text: `You have successfully deleted your user, ${user.title}.`,
					});

					// TODO: NOT THE MOST EFFECIENT WAY
					this.$nuxt.refresh();
				}
			},
		},
	};
</script>
