<template>
  <div>
    <navbar />
    <v-container>
      <!-- <h2>{{ blogs.title }}</h2>

      <p>{{ blogs.body }}</p>

      <br /> -->
      <v-btn @click="showBlog">Show Blog</v-btn>
    </v-container>
    <ftr />
  </div>
</template>





<script>
import { mapGetters } from "vuex";

export default {
  methods: {
    showBlog() {
      console.log(this.blog);
    },
  },

  computed: {
    ...mapGetters({
      getBlog: "blogs/get",
    }),

    blog() {
      return this.getBlog(this.$route.params.id);
    },
  },
};
</script>
