<template>
  <v-container>
    <NavigationBar />

    <h2 id="page__title">My Learning</h2>

    <LearningList />
  </v-container>
</template>


<script>
export default {
  name: "Learning",
  middleware: "auth-user",
};
</script>
