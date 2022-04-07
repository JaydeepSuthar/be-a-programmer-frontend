<template>
	<v-container>
		<v-row id="user-header">
			<v-col id="profile-photo">
				<!-- <nuxt-img src="/user.png" class="tw-rounded-full" /> -->
				<img src="/user.png" alt="">
			</v-col>
			<v-col id="user-details tw-h-full">
				<div
					class="tw-h-full tw-flex tw-flex-col tw-gap-4 tw-translate-y-1/2"
				>
					<h3>Name: {{ this.$auth.user.name }}</h3>

					<p>Email: {{ this.$auth.user.email }}</p>
				</div>
			</v-col>
		</v-row>
		<v-row align-content="center">
			<v-tabs grow center-active>
				<v-tab>Personal Details</v-tab>
				<!-- <v-tab>Learning</v-tab>
				<v-tab>Certificate</v-tab> -->

				<v-tab-item>
					<br />

					<v-form>
						<v-row>
							<v-col col="11" sm="11" md="10">
								<v-text-field
									v-model="name"
									label="name"
									outlined
									disabled
								>
								</v-text-field>
							</v-col>
							<v-icon> mdi-pencil </v-icon>
						</v-row>

						<v-row>
							<v-col col="11" sm="11" md="10">
								<v-text-field
									v-model="email"
									label="email"
									disabled
									outlined
								></v-text-field>
							</v-col>
							<v-icon> mdi-pencil </v-icon>
						</v-row>
						<v-row>
							<v-col col="11" sm="11" md="10">
								<v-text-field
									v-model="contact"
									label="Contact no"
									outlined
									disabled
								></v-text-field>
							</v-col>
							<v-icon> mdi-pencil </v-icon>
						</v-row>
						<v-row>
							<v-col col="11" sm="11" md="10">
								<v-text-field
									v-model="Password"
									label="Password"
									outlined
									disabled
									type="password"
								></v-text-field>
							</v-col>
							<v-icon> mdi-pencil </v-icon>
						</v-row>
						<v-row>
							<v-col col="11" sm="11" md="10">
								<v-textarea
									v-model="address"
									label="address"
									outlined
									disabled
								></v-textarea>
							</v-col>
							<v-icon> mdi-pencil </v-icon>
						</v-row>

						<v-row>
							<v-col col="11" sm="11" md="10">
								<v-text-field
									v-model="qualification"
									label="qualification"
									outlined
									disabled
								></v-text-field>
							</v-col>
							<v-icon> mdi-pencil </v-icon>
						</v-row>
					</v-form></v-tab-item
				>
				<!-- <v-tab-item id="Learning"> Learning </v-tab-item> -->
				<!-- <v-tab-item id="Certificate"> Certificate </v-tab-item> -->
			</v-tabs>
		</v-row>
	</v-container>
</template>

<script>
export default {
	name: "Profile",
	middleware: "auth-user",
};
</script>
