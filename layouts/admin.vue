<template>
	<v-app id="be-a-programmer">
		<v-navigation-drawer v-model="drawer" app>
			<h2>Sidebar</h2>
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
		name: "AdminLayout",
		data: () => ({ drawer: null }),
	};
</script>
