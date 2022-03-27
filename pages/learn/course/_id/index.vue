<template>
	<v-container id="course-details">
		<!-- <pre>
			{{ course }}
		</pre
		> -->
		<h2>{{ course.title }}</h2>

		<p>{{ course.description }}</p>

		<p>fetch chapters and show as sylabus</p>

		<p></p>

		<div class="instructor-details">
			<h2>instructor</h2>

			<div class="avtar-with-name">
				<v-avatar size="36px">
					<img
						alt="Avatar"
						src="https://avatars.githubusercontent.com/u/52647252?v=4&s=460"
					/>
				</v-avatar>
				<strong class="ml-3">{{ course.admin.name }}</strong>
			</div>
		</div>

		<FAQ />
	</v-container>
</template>

<script>
	import { mapGetters } from "vuex";

	import FAQ from '../../../../components/FAQ.vue'

	export default {
		name: "Course Details",
		components: ['FAQ'],
		methods: {
			getCourseId() {
				console.log(this.params);
			},
		},
		computed: {
			...mapGetters({
				getCourse: "courses/get",
			}),

			course() {
				return this.getCourse(this.$route.params.id);
			},
		},
	};
</script>
