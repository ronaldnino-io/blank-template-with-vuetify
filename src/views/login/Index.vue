<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <form @submit.prevent="login">
              <v-card class="elevation-12">
                <v-toolbar color="primary" dark flat>
                  <v-toolbar-title>Login form</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <v-btn icon large target="_blank" v-on="on">
                        <v-icon>mdi-code-tags</v-icon>
                      </v-btn>
                    </template>
                    <span>Source</span>
                  </v-tooltip>
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field
                      label="User"
                      name="user"
                      prepend-icon="mdi-account"
                      type="text"
                      v-model="email"
                    ></v-text-field>

                    <v-text-field
                      id="password"
                      label="Password"
                      name="password"
                      prepend-icon="mdi-lock"
                      type="password"
                      v-model="password"
                    ></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn type="submmit" color="primary">Login</v-btn>
                </v-card-actions>
              </v-card>
            </form>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import authService from "../../services/AuthService";

export default {
  data() {
    return {
      email: "joe@example.com",
      password: "password1",
      error: false,
    };
  },
  methods: {
    login() {
      authService.login(this.email, this.password, (loggedIn) => {
        if (!loggedIn) {
          this.error = true;
        } else {
          this.$router.replace(this.$route.query.redirect || "/");
        }
      });
    },


  },
};
</script>

<style>
.error {
  color: red;
}
</style>
