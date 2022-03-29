<template>
	<v-card elevation="6" width="340px" class="ma-2">
		<v-img
			class="bg-slate-700"
			:src="`http://localhost:8000/static/img/${course.thumbnail}`"
		/>

		<v-card-title class="mt-3">₹{{course.price}}</v-card-title>

		<v-card-actions>
			<v-btn block color="primary">Buy Now</v-btn>
		</v-card-actions>

		<hr />
		<v-card-text>
			<strong>What is included</strong> <br />

			50 Lessons <br />
			Certificate
		</v-card-text>
	</v-card>
</template>

<script>
	export default {
		name: "CourseBuyCard",
		props: ['course']
	};
</script>
