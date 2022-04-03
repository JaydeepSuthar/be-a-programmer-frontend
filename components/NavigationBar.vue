<template>
	<section id="navigation">
		<v-container>
			<nav class="navbar tw-min-w-full tw-py-2">
				<ul class="tw-flex tw-flex-row tw-list-none">
					<div class="left tw-inline-block">
						<!-- Logo -->
						<span>
							<v-img
								src="https://avatars.githubusercontent.com/u/52647252?v=4&s=460"
								width="50"
							/>
						</span>
						<span>
							Be A Programmer
							{{ this.$store.state.auth.loggedIn }}
						</span>
					</div>

					<v-spacer />
					<div class="right">
						<div
							v-if="this.$store.state.auth.loggedIn"
							id="loggedIn"
						>
							<li>
								<!-- <nuxt-link to="/login"> -->
								<button
									@click="logOut"
									class="tw-bg-slate-400 tw-p-2 tw-rounded-md tw-text-white tw-font-semibold tw-text-base"
								>
									LogOut
								</button>
								<!-- </nuxt-link> -->
							</li>
						</div>

						<div
							v-else
							id="notLoggedIn"
							class="tw-flex tw-flex-row tw-gap-1"
						>
							<li>
								<nuxt-link to="/signup">
									<button
										class="tw-bg-green-500 tw-p-2 tw-rounded-md tw-text-white tw-font-semibold tw-text-base"
									>
										Register
									</button>
								</nuxt-link>
							</li>
							<li>
								<nuxt-link to="/login">
									<button
										class="tw-bg-slate-400 tw-p-2 tw-rounded-md tw-text-white tw-font-semibold tw-text-base"
									>
										Login
									</button>
								</nuxt-link>
							</li>
						</div>
					</div>
				</ul>
			</nav>
		</v-container>
		<v-divider />
	</section>
</template>

<script>
export default {
	name: "NavigationBar",
	methods: {
		logOut() {
			this.$auth.$storage.removeUniversal("user");
			this.$auth.logout();
			// let resposne = await this.$axios.delete("/user/logout");
			window.localStorage.clear();
			this.$cookies.removeAll();
			// console.log(resposne);
			// this.$router.push("/");
		},
	},
};
</script>

<style scoped>
.left {
	display: inherit;
	justify-content: center;
	align-items: center;
	gap: 1em;
	font-size: x-large;
}
</style>
