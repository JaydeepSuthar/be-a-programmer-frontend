<template>
	<v-app id="be-a-programmer">
		<v-navigation-drawer v-model="drawer" app>
			<v-sheet color="grey lighten-4" class="pa-4">
				<v-avatar
					id="avatar"
					class="mb-4"
					color="grey darken-1"
					size="64"
				></v-avatar>

				<div><h2>Be A Programmer</h2></div>
			</v-sheet>

			<v-list dense nav>
				<v-list-item v-for="item in items" :key="item.title" link>
					<v-list-item-icon>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-icon>

					<v-list-item-content>
						<v-list-item-title>{{ item.title }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar app elevate-on-scroll>
			<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

			<v-toolbar-title>Be A Programmer</v-toolbar-title>
		</v-app-bar>

		<v-main>
			<v-container>
				<Nuxt />
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
	export default {
		name: "admin",
		data: () => ({
			drawer: null,
			items: [
				{ title: "Dashboard", icon: "mdi-view-dashboard" },
				{ title: "Users", icon: "mdi-account" },
			],
		}),
	};
</script>
