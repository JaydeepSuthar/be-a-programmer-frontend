<template>
	<div class="course-list d-flex flex-wrap">
		<div class="course-card" v-for="course in courses" :key="course.id">
			<v-card
				width="340px"
				hover
				class="ma-2"
				:to="`/learn/course/${course.id}`"
			>
				<v-img
					:src="`http://localhost:8000/static/img/${course.thumbnail}`"
					@error="`http://localhost:8000/static/img/nodejs.png`"
				/>
				<v-card-title>{{ course.title }}</v-card-title>
			</v-card>
		</div>
	</div>
</template>

<script>
	export default {
		name: "CourseList",
		props: ["courses"],
		methods: {
			showCourseList() {
				console.log(this.courses);
			},
		},
	};
</script>

<style lang="scss" scoped>
</style>
