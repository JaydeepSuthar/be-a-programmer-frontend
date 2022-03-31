<template>
  <v-card>
    <div>
      <v-container>
        <v-navigation-drawer
          v-model="drawer"
          :mini-variant="miniVariant"
          :clipped="clipped"
          fixed
          app
        >
          <v-list>
            <v-sheet color="grey lighten-4" class="pa-4">
              <v-avatar id="avatar" class="mb-4" size="100">
                <img
                  src="https://avatars.githubusercontent.com/u/95671353?s=400&u=4dd82d530f89c8ed83d3f88bdfd32475a49b1516&v=4"
                  alt=""
              /></v-avatar>
              <br />
              <h2>Fahad jariwala</h2></v-sheet
            >
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              :to="item.to"
              router
              exact
            >
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title v-text="item.title" />
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-container>
    </div>
  </v-card>
</template>
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
  data: () => ({
    drawer: true,
    role: "",
    items: [
      {
        title: "Dashboard",
        icon: "mdi-view-dashboard",
        to: " #",
        permission: ["admin", "instructor"],
      },
      {
        title: "My Courses",
        icon: "mdi-dialpad",
        to: " #",
        permission: ["admin"],
      },
      {
        title: "Exam",
        icon: "mdi-gavel",
        to: " #",
        permission: ["admin", "instructor"],
      },

      {
        title: "Certificates",
        icon: "mdi-certificate",
        to: " #",
        permission: ["admin", "instructor"],
      },

      {
        title: "Coupon",
        icon: "mdi-widgets",
        to: " #",
        permission: ["admin"],
      },
    ],
  }),
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
