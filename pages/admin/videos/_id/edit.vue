<template>
	<v-container>
		<VideoEditForm
			:video="video"
			:saveVideo="saveVideo"
			buttonText="Save Video"
		/>
	</v-container>
</template>


<script>
	import { mapState, mapGetters } from 'vuex'
	import VideoEditForm from '@/components/VideoEditForm.vue'

	export default {
		components: {
			VideoEditForm,
		},
		computed: {
			...mapState({
				videos: (state) => state.videos.videos,
			}),
			...mapGetters({
				getVideo: 'videos/get'
			}),
			video() {
				return this.getVideo(this.$route.params.id);
			},
		},
		methods: {
			async saveVideo() {
				let video = await this.$store.dispatch('videos/edit', this.video)
				this.$router.push('/admin/videos')
			},
		},
	}
</script>
