<template>
  <div>
    <navbar />
    <v-app class="man">
      <div style="text-align: center">
        <strong>
          <span style="color: #025950; font-size: 70px; text-align: center"
            >Create A</span
          >
          <span style="color: orangered; font-size: 70px; text-align: center"
            >Free Account</span
          >
          <p style="font-size: 25px; background: grey">
            Hands-on practice modules, learning paths for industry skills,
            projects, community, and more.
          </p></strong
        >
      </div>

      <br />

      <v-flex sm12 md6 offset-md3>
        <v-card elevation="4" light tag="section">
          <br />

          <v-card-text>
            <v-form @submit.prevent="signup">
              <v-text-field
                outlined
                label="Name"
                type="text"
                v-model="signup.Name"
                counter="20"
                block
              ></v-text-field>
              <v-text-field
                outlined
                label="username"
                type="text"
                v-model="signup.username"
                counter="10"
              ></v-text-field>
              <v-select
                :items="qual"
                v-model="signup.qual"
                label="Qualification"
                outlined
              >
              </v-select>
              <v-textarea
                outlined
                v-model="signup.add"
                label="Address"
                counter="true"
              />

              <v-text-field
                outlined
                label="email"
                type="text"
                v-model="signup.email"
              ></v-text-field>
              <v-text-field
                outlined
                label="Password"
                type="password"
                v-model="signup.password"
                counter="8"
              ></v-text-field>

              <v-btn type="submit" block large class="success" to="/login"
                >Submit</v-btn
              >
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
      <br />
      <br />
    </v-app>
  </div>
</template>

<style scoped>
.man {
  background: whitesmoke;
}
.frm {
  background: white;
  width: 700px;
}
</style>


<script>
export default {
  layout: "login",
  data() {
    return {
      signup: {
        Name: "",
        username: "",
        email: "",
        password: "",
        add: "",
      },
      qual: ["12th Pass", "Graduate", "Post Graduate"],
    };
  },

  methods: {
    async signup() {
      if (response.status === 200) {
        this.$store.dispatch("snackbar/setSnackbar", {
          text: `Your Account is Created`,
        });

        this.$router.push(`/login`);
      }
    },
  },
};
</script>

