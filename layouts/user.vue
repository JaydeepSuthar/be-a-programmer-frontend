<template>
  <div class="man">
    <v-card class="profilecard">
      <v-container>
        <div class="profile">
          <div>
            <v-img>
              <img
                src="https://avatars.githubusercontent.com/u/95671353?v=4"
                alt=""
                class="rounded"
              />
            </v-img>
          </div>
          <div>
            <h1>
              Fahad Jariwala
              <!-- // {{ users.name }} -->
              <v-icon>mdi-pencil</v-icon>
            </h1>
            <br />
            <h3>
              fahad@beap.dev
              <!-- {{ users.email }} -->
              <v-icon>mdi-pencil</v-icon>
            </h3>
          </div>
        </div>
      </v-container>
    </v-card>
    <div class="other">
      <div>
        <v-card width="32.5vw" height="500px">
          <h2>Your Details</h2>
          <br />
          <v-divider />
        </v-card>
      </div>
      <div>
        <v-card width="32.5vw" height="500px">
          <h2>Learning</h2>
          <br />
          <v-divider />
        </v-card>
      </div>
      <div>
        <v-card width="32.5vw" height="500px">
          <h2>certificates</h2>
          <br />
          <v-divider />
        </v-card>
      </div>
    </div>
  </div>
</template>
<style scoped>
.man {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.profilecard {
  background: rgb(80, 88, 100);
}
.profile {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.other {
  display: flex;
  flex-wrap: wrap;
}
h1 {
  font-size: 60px;
  color: whitesmoke;
}
h3 {
  font-size: 40px;
  color: whitesmoke;
}
.rounded {
  border-radius: 250px;
  width: 350px;
}
</style>
<script>
import { mapState } from "vuex";
export default {
  name: "home",

  async fetch() {
    const rawUser = localStorage.getItem("auth.user");
    const { role } = JSON.parse(rawUser);
    console.log(`Role: ${role}`);
    this.role = role;
  },
  fetchOnServer: false,
  data: () => ({}),
  computed: {
    ...mapState({
      snackbars: (state) => state.snackbar.snackbars,
    }),
  },
  methods: {
    async logOut() {
      console.log(`i am clicked`);
      this.$auth.$storage.removeUniversal("user");
      let resposne = await this.$axios.delete("/admin/logout");
      window.localStorage.clear();
      this.$cookies.removeAll();
      console.log(resposne);
      this.$router.push("/home");
    },
  },
};
</script>
