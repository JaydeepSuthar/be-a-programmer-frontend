<template>
	<div>
		<v-card>
			<h2 v-if="chapters[0] == null">No Data Found</h2>
			<v-data-table
				:headers="headers"
				:items="chapters"
				:items-per-page="5"
				class="mt-10 elevation-3"
			>
				<template v-slot:top>
					<v-toolbar flat>
						<v-toolbar-title
							class="display-1 text-decoration-underline"
							>All Chapters</v-toolbar-title
						>
						<v-divider class="mx-4" inset vertical></v-divider>
						<v-spacer></v-spacer>

						<v-btn
							@click="showDialog = !showDialog"
							class="success"
							>Add Chapter</v-btn
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
			</v-data-table>
		</v-card>
	</div>
</template>

<script>
	export default {
		layout: "admin",
		async asyncData({ params, $axios }) {
			console.log(params.id);
			const response = await $axios(`/chapter/${params.id}`);
			const chapters = await response.data.data;
			return {
				chapters,
			};
		},
		data() {
			return {
				headers: [
					{ text: "Sr No.", value: "srno" },
					{
						text: "Name",
						// align: "start",
						sortable: false,
						value: "chapter_name",
					},
					{ text: "Videos", value: "videos" },
					{ text: "Assignment", value: "assignments" },
					{ text: "is_active", value: "is_visible" },
					// { text: "Actions", value: "actions", sortable: false },
				],
				chapters: [],
			};
		},
	};
</script>
