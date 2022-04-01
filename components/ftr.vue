<template>
  <div
    style="background: rgb(22, 22, 22); color: whitesmoke; text-align: center"
  >
    <div class="man">
      <div>
        <v-container>
          <v-container>
            <a href="http://localhost:3000/"
              ><v-avatar id="avatar" class="mb-4" size="60">
                <img src="logo2.png" alt=""
              /></v-avatar>
            </a>

            <br />
            <h2>
              Learn to code interactively <br />
              without ever leaving your browser.
            </h2>
            <br />
            <br />
            <v-avatar class="mb-4" size="40">
              <img src="git.png" alt=""
            /></v-avatar>
            &nbsp; &nbsp;

            <v-avatar class="mb-4" size="40">
              <img src="linkdin.png" alt=""
            /></v-avatar>
            &nbsp; &nbsp;
            <v-avatar class="mb-4" size="40">
              <img src="insta.jpg" alt=""
            /></v-avatar>
            &nbsp; &nbsp;

            <v-avatar class="mb-4" size="40">
              <img src="fb.png" alt=""
            /></v-avatar>
          </v-container>
        </v-container>
      </div>
      <div>
        <v-container>
          <v-container>
            <h3>Solution</h3>
            <ul>
              <br />
              <a href="/learn"><li>Learning paths</li> </a>
              <a href="/learn">
                <li>Become a full stack web developer</li>
              </a>
              <a href="/contact">
                <li>What programming language should I learn?</li>
              </a>
            </ul></v-container
          >
        </v-container>
      </div>
      <div>
        <v-container
          ><v-container>
            <h3>Support</h3>
            <ul>
              <br />
              <a href="/contact"><li>Contact us</li> </a>
              <a href="#"> <li>FAQ</li> </a>
              <a href="/signup"> <li>Create a free account</li></a>
            </ul>
          </v-container>
        </v-container>
      </div>
      <div>
        <v-container
          ><v-container>
            <h3>Company</h3>
            <ul>
              <br />
              <a href="/blogs"> <li>Blog</li> </a>
            </ul>
          </v-container>
        </v-container>
      </div>
      <div>
        <v-container>
          <v-container>
            <h3>Legal</h3>
            <ul>
              <br />
              <a href="/#"><li>Privacy</li> </a>
              <a href="/#"> <li>Terms</li></a>
            </ul>
          </v-container>
        </v-container>
      </div>
    </div>
    <hr size="6" width="100%" color="white" />

    <br />

    © BEAP™ 2022 | All rights reserved.
    <br />
    <br />
  </div>
</template>
<style scoped>
.man {
  background: rgb(22, 22, 22);
  display: flex;
  flex-direction: row;
  color: whitesmoke;
  justify-content: space-between;
}

ul li {
  list-style: none;
}
a:link {
  color: whitesmoke;
  text-decoration: none;
}
a:hover {
  color: grey;
  text-decoration: underline;
}
a:visited {
  color: whitesmoke;
  text-decoration: none;
}
</style>
