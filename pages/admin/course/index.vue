<template>
	<div id="course">

		<DialogForm :dialog="showDialog" />

		<v-data-table
			:headers="headers"
			:items="courses"
			:items-per-page="10"
			class="mt-10 elevation-3"
		>
			<template v-slot:top>
				<v-toolbar flat>
					<v-toolbar-title class="display-1 text-decoration-underline">All Courses</v-toolbar-title>
					<v-divider class="mx-4" inset vertical></v-divider>
					<v-spacer></v-spacer>

					<v-btn
						@click="showDialog = !showDialog"
						class="success mb-5"
						>Add Course</v-btn
					>

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
			<!-- eslint-ignore-next-line -->
			<template v-slot:item.actions="{ item }">
				<!-- <v-icon small class="mr-2" @click="editItem(item)">
					mdi-pencil
				</v-icon> -->
				<v-btn small class="mr-2 warning">Edit</v-btn>
				<v-btn small class="mr-2 error">Delete</v-btn>
				<v-btn small class="info" @click="showChapter(item)">Chapters</v-btn>
				<!-- <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon> -->
			</template>
		</v-data-table>
	</div>
</template>


<script>
	export default {
		layout: "admin",
		async asyncData({ $axios, store }) {
			let response = await $axios.get(`/course`);
			let courses = await response.data;
			console.log(response);
			// store.commit('SET_COURSES', courses);
			return {
				courses,
			};
		},

		data() {
			return {
				showDialog: false,
				headers: [
					{
						text: "Title",
						align: "start",
						sortable: false,
						value: "title",
					},
					{ text: "Slug", value: "slug" },
					{ text: "Price", value: "price" },
					{ text: "Duration(in Months)", value: "duration" },
					{ text: "is_active", value: "is_active" },
					{ text: "Instructor", value: "admin.name" },
					{ text: "Actions", value: "actions", sortable: false },
				],
				courses: [],
			};
		},
		methods: {
			closeDialogBox(value) {
				this.showDialog = value;
			},
			showChapter(value) {
				// FIXME: THIS IS INCOMPLETE
				console.log(value);
				this.$router.push(`/admin/course/${value.id}/chapter`)
			}
		},
	};
</script>
