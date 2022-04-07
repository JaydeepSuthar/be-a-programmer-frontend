<template>
	<section id="my-learning">
		<NavigationBar />
		<v-container>
			<v-list>
				<v-list-items
					v-for="item in this.courseList"
					:key="item.id"
				>
					<v-card class="mb-5" hover>
						<v-row>
							<v-col cols="2">
								<v-img
									width="200"
									:src="`http://localhost:8000/static/img/${item.thumbnail}`"
								></v-img>
							</v-col>
							<v-col cols="10">
								<v-card-title>{{ item.title }}</v-card-title>
								<v-card-actions>
									<v-btn  :to="`/learn/course/${item.id}/watch`" class="primary">Continue Learning</v-btn>
								</v-card-actions>
							</v-col>
						</v-row>
					</v-card>
				</v-list-items>
			</v-list>
		</v-container>
	</section>
</template>

<script>
export default {
	data: () => ({
		courseList: [],
	}),
	async fetch() {
		const response = await this.$axios(`/misc/learning`);
		const data = await response.data.data;
		data.map((item) => this.courseList.push(item));
		console.log(this.courseList);
	},
};
</script>
