<template>
	<div class="wrapper">
		<section class="header h-44 bg-slate-900 flex flex-row justify-center items-center">
			<p class="greeting__text text-5xl text-white">
				Welcome to Be A Programmer
			</p>
		</section>

		<section class="display__course">
			<!-- Course List Here -->
			<CourseList
				imgUrl="https://picsum.photos/250/250"
				title="My New Course"
				price="500"
			/>
		</section>

		<section>
			<div class="home">
				<div class="display-2 ma-4 d-flex justify-center">
					All Courses
				</div>
				<div id="courese-list">
					<CourseList :courses="courses" />
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import { mapState } from "vuex";
	import CourseList from "../../components/CourseList.vue";

	export default {
		components: { CourseList },
		name: "IndexPage",
		computed: {
			...mapState({
				courses: (state) => state.courses.courses,
			}),
		},
	};
</script>
