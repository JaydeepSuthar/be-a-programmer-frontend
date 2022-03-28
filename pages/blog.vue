<template>
  <div>
    <h1>Blogs</h1>

    <v-card v-for="blog in blogs" :key="blog.id" hover class="ma-2">
      <div class="blog">
        <div class="img"><img src="about.png" alt="" /></div>
        <div class="contn">
          <v-container>
            <h2>{{ blog.title }}</h2>
            <p>{{ blog.body }}</p>
          </v-container>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  async fetch({ store }) {
    await store.dispatch("blogs/loadAllBlogs"); // yha se vo iss action ko dipatch karega matlb call karega
  },

  computed: {
    ...mapState({
      // ye vo sare data ko state me se nikalega
      blogs: (state) => state.blogs.blogs,
    }),
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
.blog {
  display: flex;
}
.img {
  width: 40%;
}
.contn {
  width: 60%;
  background: #292928;
  color: whitesmoke;
}
</style>
