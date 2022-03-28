<template>
	<v-container id="course-details">
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

		<!-- {{ JSON.stringify(chapters) }} -->
		<!-- TODO: Make syllabus working -->
		<Syllabus :chapters="chapters" />

		<FAQ />
	</v-container>
</template>

<script>
	import { mapGetters, mapState } from "vuex";

	export default {
		async fetch({ store, params }) {
			await store.dispatch("chapters/loadAllChapters", params.id);
		},
		methods: {
			getCourseId() {
				console.log(this.params);
			},
		},
		computed: {
			...mapState({
				chapters: (state) => state.chapters.chapters,
			}),

			...mapGetters({
				getCourse: "courses/get",
			}),

			course() {
				return this.getCourse(this.$route.params.id);
			},
		},
	};
</script>
