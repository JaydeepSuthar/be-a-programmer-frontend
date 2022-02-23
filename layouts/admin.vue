<template>
	<v-app id="be-a-programmer">
		<v-navigation-drawer v-model="drawer" app>
			<v-sheet color="grey lighten-4" class="pa-4">
				<v-avatar
					id="avatar"
					class="mb-4"
					size="70"

				> <img src="logo1.png" alt=""/></v-avatar>


				<div><h2>Be A Programmer</h2></div>
			</v-sheet>

			<v-list dense nav>
				<v-list-item
					v-for="item in items"
					:key="item.title"
					:to="item.to"
					exact
					link
				>
					<v-list-item-icon>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-icon>

					<v-list-item-content>
						<v-list-item-title>{{ item.title }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>

			<v-btn depressed nuxt to= "/admin">
				<span>Logout</span>
				<v-icon>mdi-logout</v-icon>
			</v-btn>
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
import { mapState } from "vuex";
export default {
	name: "admin",
	data: () => ({
		drawer: true,
		items: [
			{ title: "Dashboard", icon: "mdi-view-dashboard", to: "/admin/home" },
			{ title: "Users", icon: "mdi-account", to: "/admin/user" },
			{
				title: "Instructor",
				icon: "mdi-account-supervisor",
				to: "/admin/admin-user",
			},
			{ title: "Course", icon: "mdi-video", to: "/admin/course" },
			{ title: "Blog", icon: "mdi-book", to: "/admin/blog" },
			{ title: "Exam", icon: "mdi-gavel", to: "/admin/exam" },
			{ title: "Assigment", icon: "mdi-wrench", to: "/admin/assignment" },
			{ title: "Coupon", icon: "mdi-widgets", to: "/admin/coupon" },
		],
	}),
	computed: {
		...mapState({
			snackbars: (state) => state.snackbar.snackbars,
		}),
	},
};
</script>
