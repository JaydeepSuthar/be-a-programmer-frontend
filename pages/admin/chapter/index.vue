<template>
	<div>
		<h3>Chapter Page</h3>

		<v-btn class="success">Add Chapter</v-btn>

		<v-sheet color="grey" elevation="2">
				<!-- <v-card class="mx-auto" max-width="300" tile> -->
					<v-list dense>
						<v-list-item-group
							v-model="selectedItem"
							color="primary"
						>
							<v-list-item v-for="(item, i) in items" :key="i">
								<v-list-item-icon>
									<v-icon v-text="item.icon"></v-icon>
								</v-list-item-icon>
								<v-list-item-content>
									<v-list-item-title
										v-text="item.text"
									></v-list-item-title>
								</v-list-item-content>
							</v-list-item>
						</v-list-item-group>
					</v-list>
				<!-- </v-card> -->
		></v-sheet>
	</div>
</template>
		</v-sheet>
	</div>
</template>

<script>
	export default {
		layout: "admin",
		name: "Chapter",
	};
</script>
