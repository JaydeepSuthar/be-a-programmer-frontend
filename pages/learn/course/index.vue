<template>
	<div class="course-details">
		<CourseBuyCard />
	</div>
</template>

<script>
	import { mapGetters } from "vuex";

	export default {
		name: "Course Details",
		methods: {
			getCourseId () {
				console.log(this.params)
			}
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
