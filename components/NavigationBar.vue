<template>
	<v-container>
		<section id="navigation">
			<nav class="navbar tw-min-w-full tw-py-2 tw-bg-slate-100">
				<ul class="tw-flex tw-flex-row tw-list-none">
					<div class="left">
						<!-- Logo -->
						<v-img src="newlogo.png" width="50" />
					</div>
					<v-spacer />
					<div class="right tw-flex tw-flex-row tw-gap-1">
						<li>
							<button
								class="tw-bg-green-500 tw-p-2 tw-rounded-md tw-text-white tw-font-semibold tw-text-base"
							>
								Register
							</button>
						</li>
						<li>
							<button
								class="tw-bg-slate-400 tw-p-2 tw-rounded-md tw-text-white tw-font-semibold tw-text-base"
							>
								Login
							</button>
						</li>
					</div>
				</ul>
			</nav>
		</section>
	</v-container>
</template>

<script>
export default {
	name: "NavigationBar",
};
</script>
