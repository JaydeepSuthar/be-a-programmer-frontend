<template>
	<v-container>
		<v-row align-content-sm="center">
			<v-col
				v-for="course in courses"
				:key="course.id"
				xl="3"
				lg="4"
				md="4"
				sm="6"
			>
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
			</v-col>
		</v-row>
	</v-container>
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
