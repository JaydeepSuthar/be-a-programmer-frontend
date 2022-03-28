<template>
  <v-app class="man">
    <navbar />
    <h1>Create A Free Account</h1>
    <h3>
      Hands-on practice modules, learning paths for <br />industry skills,
      projects, community, and more.
    </h3>
    <br />
    <v-container>
      <v-flex sm12 md6 offset-md3>
        <v-card elevation="4" light tag="section" class="frm">
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
    </v-container>
  </v-app>
</template>

<style scoped>
.man {
  background: rgb(221, 220, 220);
}
.frm {
  width: 850px;
  max-width: 100%;
}

h1 {
  color: rgba(243, 18, 18, 0.767);
  font-size: 50px;
  text-align: center;
}
h3 {
  color: rgba(11, 101, 161, 0.705);
  font-size: 25px;
  text-align: center;
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
      },
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

