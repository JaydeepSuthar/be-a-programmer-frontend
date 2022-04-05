<script>
export default {
	name: "LearningList",
	async asyncData({ $axios }) {
		let learning = await $axios.get("/user/learning");

		return {
			learning,
		};
	},
};
</script>
