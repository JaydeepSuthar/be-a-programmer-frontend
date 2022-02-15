<template>
	<v-row>
		<v-col cols="12" sm="6" md="6">
			<v-text-field
				outlined
				v-model="video.title"
				label="Title"
				counter="50"
				:rules="[
					required('Title'),
					minLength('Title', 5),
					maxLength('Title', 50),
				]"
			/>
		</v-col>
		<v-col cols="12" sm="6" md="6">
			<v-text-field
				outlined
				v-model="video.slug"
				label="slug"
				counter="50"
				:rules="[
					required('Slug'),
					minLength('Slug', 5),
					maxLength('Slug', 24),
				]"
			/>
		</v-col>
		<v-col cols="12" sm="12" md="12">
			<v-textarea
				outlined
				v-model="video.description"
				label="Description"
				counter="true"
				:rules="[required('description'), minLength('description', 20)]"
			/>
		</v-col>
		<v-col cols="12">
			<v-btn class="primary">
				<v-icon left>mdi-cloud-upload</v-icon>
				<span>Upload</span>
				<!-- <v-file-input hide-input hidden></v-file-input> -->
			</v-btn>
		</v-col>
		<v-col cols="12" sm="6" md="4">
			<v-text-field
				outlined
				type="number"
				v-model="video.price"
				label="Price"
				:rules="[required('Price')]"
			/>
		</v-col>

		<v-col cols="12" sm="6" md="4">
			<v-text-field outlined v-model="video.duration" label="Duration" />
			<!-- :rules="[required('Course duration')]" -->
		</v-col>

		<v-col cols="12" sm="6" md="4">
			<v-text-field
				outlined
				v-model="video.requirement"
				label="Requirement"
			/>
			<!-- :rules="[required('basic requirement for course')]" -->
		</v-col>

		<v-col cols="12">
			<v-checkbox
				v-model="video.is_active"
				label="Is Active"
				color="info"
			></v-checkbox>
		</v-col>

		<v-col cols="12">
			<v-text-field
				outlined
				readonly
				v-model="video.instructor"
				label="Instructor"
			/>
		</v-col>
	</v-row>
</template>

<script>
	import validation from "@/utils/validations";

	export default {
		name: "CourseCreateForm",
		data() {
			return {
				valid: false,
				...validation,
				video: {
					title: "",
					slug: "",
					description: "",
					thumbnail: "",
					price: 0,
					duration: "",
					requirement: "",
					is_active: false,
					instructor: "Jaydeep Suthar",
				},
			};
		},
	};
</script>
