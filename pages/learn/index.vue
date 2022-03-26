<template>
	<div class="wrapper">
		<section class="header h-44 bg-slate-900 flex flex-row items-center">
			<p class="greeting__text text-5xl text-white">
				Welcome to BeAProgrammer
			</p>
		</section>

		<section class="display__course">
			<p class="section__title">Courses</p>

			<!-- Course List Here -->
			<CourseList
				imgUrl="https://picsum.photos/250/250"
				title="My New Course"
				price="500"
			/>
		</section>

		<section>
			<div class="home">
				<div class="display-4 ma-4 d-flex justify-center">
					All Courses
				</div>
				<div class="d-flex flex-wrap">
					<div v-for="course in courses" :key="course.id">
						<video-list-video :video="course" />
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import { mapState } from "vuex";
	import VideoListVideo from "../../components/VideoListVideo.vue";

	export default {
		components: { VideoListVideo },
		name: "IndexPage",
		computed: {
			...mapState({
				courses: (state) => state.courses.courses,
			}),
		},
	};
</script>
