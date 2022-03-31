<template>
  <div>
    <navbar />
    <h1>Blogs</h1>

    <v-card v-for="blog in blogs" :key="blog.id" hover class="ma-2">
      <div class="blog" id="bloglist">
        <div class="img"><img src="about.png" alt="" /></div>
        <div class="contn">
          <v-container>
            <h2>{{ blog.title }}</h2>
            <v-container>
              <v-container>
                <p class="chars">{{ blog.body }}</p>
                <v-btn class="success" :to="`/blogs/${blog.id}`">
                  Read more
                </v-btn>
              </v-container>
            </v-container>
          </v-container>
        </div>
      </div>
    </v-card>
    <br />
    <br />

    <ftr />
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
  font-size: 80px;
  color: rgba(13, 82, 75, 0.603);
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
.chars {
  width: 500ch;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
