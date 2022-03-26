<template>
	<div class="container">
		<ul>
			<li v-for="course in courses" :key="course.id">
				<!-- TODO: render course cards -->
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'CourseList',
		props: ['courses']
	}
</script>
