<template>
	<div id="course">
		<DialogForm :dialog="showDialog" />

		<v-data-table
			:headers="headers"
			:items="blogs"
			:items-per-page="10"
			class="mt-10 elevation-3"
		>
			<template v-slot:top>
				<v-toolbar flat>
					<v-toolbar-title class="display-1 text-decoration-underline"
						>All Blogs</v-toolbar-title
					>
					<v-divider class="mx-4" inset vertical></v-divider>
					<v-spacer></v-spacer>

					<v-btn @click="showDialog = !showDialog" class="success"
						>Add Blog</v-btn
					>

					<v-dialog v-model="dialogDelete" max-width="500px">
						<v-card>
							<v-card-title class="text-h5"
								>Are you sure you want to delete this
								item?</v-card-title
							>
							<v-card-actions>
								<v-spacer></v-spacer>
								<v-btn color="blue darken-1" text>Cancel</v-btn>
								<!-- @click="closeDelete" -->
								<v-btn color="blue darken-1" text>OK</v-btn>
								<!-- @click="deleteItemConfirm" -->
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
				<v-btn small @click="editBlog(item)" class="mr-2 warning"
					>Edit</v-btn
				>
				<v-btn small @click="deleteBlog(item)" class="mr-2 error"
					>Delete</v-btn
				>
				<!-- <v-btn small class="info" @click="showChapter(item)">Chapters</v-btn> -->
				<!-- <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon> -->
			</template>
		</v-data-table>
	</div>
</template>


<script>
	export default {
		layout: "admin",
		async asyncData({ $axios, store }) {
			let response = await $axios.get(`/blog`);
			let blogs = await response.data.data;

			return {
				blogs,
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
					{ text: "Is_active", value: "is_active" },
					{ text: "Tags", value: "tags" },
					{ text: "Author", value: "admin.name" },
					{ text: "Actions", value: "actions", sortable: false },
					// { text: "Duration(in Months)", value: "duration" },
					// { text: "Price", value: "price" },
				],
				blogs: [],
			};
		},
		methods: {
			closeDialogBox(value) {
				this.showDialog = value;
			},
			async editBlog(blog) {
				// const response = await this.$axios.delete(
				// 	`/blog/delete/${blog.id}`
				// );
				console.log(`Blog Edit Successfully: ${blog.id}`);
			},
			async deleteBlog(blog) {
				const response = await this.$axios.delete(
					`/blog/delete/${blog.id}`
				);
				console.log(`Blog Deleted Successfully: ${response.data}`);
			},
		},
	};
</script>
