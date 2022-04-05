<template>
  <v-container>
    <v-row id="user-header">
      <v-col id="profile-photo">
        <!-- <nuxt-img src="/user.png" class="tw-rounded-full" /> -->
      </v-col>
      <v-col id="user-details tw-h-full">
        <div class="tw-h-full tw-flex tw-flex-col tw-gap-4 tw-translate-y-1/2">
          <h3>{{ this.$auth.user.name }}</h3>

          <p>{{ this.$auth.user.email }}</p>
        </div>
      </v-col>
    </v-row>
    <v-row align-content="center">
      <v-tabs grow center-active>
        <v-tab>Personal Details</v-tab>
        <v-tab>Learning</v-tab>
        <v-tab>Certificate</v-tab>

        <v-tab-item id="Personal-Details"> Details </v-tab-item>
        <v-tab-item id="Learning"> Learning </v-tab-item>
        <v-tab-item id="Certificate"> Certificate </v-tab-item>
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
