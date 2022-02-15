<template>
	<div id="course">
		<h2>Course</h2>

		<v-btn @click="showDialog = !showDialog" class="success mb-5">Add Course</v-btn>

		<DialogForm :dialog="showDialog" />

		<v-data-table
			:headers="headers"
			:items="courses"
			:items-per-page="5"
			class="mt-4 elevation-1"
		></v-data-table>
	</div>
</template>


<script>
	export default {
		layout: "admin",
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
					{ text: "Duration", value: "duration" },
					{ text: "is_active", value: "is_active" },
					{ text: "Instructor", value: "instructor" },
				],
				courses: [
					{
						title: "Nodejs Master Class",
						slug: "node-masterclass",
						price: 700,
						duration: "60 days",
						is_active: true,
						instructor: "Jaydeep Suthar"
					},
					{
						title: "Reactjs Master Class",
						slug: "react-masterclass",
						price: 500,
						duration: "30 days",
						is_active: false,
						instructor: "Keval Mangroliya"
					},
					{
						title: "Vue Master Class",
						slug: "vue-masterclass",
						price: 500,
						duration: "20 days",
						is_active: true,
						instructor: "Jaydeep Suthar"
					},
				],
				desserts: [
					{
						name: "Frozen Yogurt",
						calories: 159,
						fat: 6.0,
						carbs: 24,
						protein: 4.0,
						iron: "1%",
					},
					{
						name: "Ice cream sandwich",
						calories: 237,
						fat: 9.0,
						carbs: 37,
						protein: 4.3,
						iron: "1%",
					},
					{
						name: "Eclair",
						calories: 262,
						fat: 16.0,
						carbs: 23,
						protein: 6.0,
						iron: "7%",
					},
					{
						name: "Cupcake",
						calories: 305,
						fat: 3.7,
						carbs: 67,
						protein: 4.3,
						iron: "8%",
					},
					{
						name: "Gingerbread",
						calories: 356,
						fat: 16.0,
						carbs: 49,
						protein: 3.9,
						iron: "16%",
					},
					{
						name: "Jelly bean",
						calories: 375,
						fat: 0.0,
						carbs: 94,
						protein: 0.0,
						iron: "0%",
					},
					{
						name: "Lollipop",
						calories: 392,
						fat: 0.2,
						carbs: 98,
						protein: 0,
						iron: "2%",
					},
					{
						name: "Honeycomb",
						calories: 408,
						fat: 3.2,
						carbs: 87,
						protein: 6.5,
						iron: "45%",
					},
					{
						name: "Donut",
						calories: 452,
						fat: 25.0,
						carbs: 51,
						protein: 4.9,
						iron: "22%",
					},
					{
						name: "KitKat",
						calories: 518,
						fat: 26.0,
						carbs: 65,
						protein: 7,
						iron: "6%",
					},
				],
			};
		},
		methods: {
			closeDialogBox(value) {
				this.showDialog = value;
			}
		}
	};
</script>
