<template>
  <div class="main">
    <div class="logo">
      <a
        href="http://localhost:3000/
	   "
        ><v-avatar size="70"> <img src="logo2.png" alt="" /></v-avatar>
      </a>
    </div>
    <div>
      <ul>
        <li><a href="/home"> Home</a></li>
        <li><a href="/learn"> Courses</a></li>
        <li><a href="/blogs">Blog</a></li>
        <li><a href="/about"> About</a></li>
        <li><a href="/contact"> Contact Us</a></li>
        <li><a href="/login"> Login</a></li>
        <li>
          <button><a href="/signup"> Register </a></button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

* {
  margin: 0;
  font-family: Roboto, sans-serif;
}
.main {
  background: #292828;
  max-width: 100%;
  height: 80px;
  top: 0;
  display: flex;
  justify-content: space-between;
}
.logo {
  cursor: pointer;
  margin-left: 20px;
  margin-top: 10px;
}

ul {
  display: flex;
  justify-content: flex-end;
  font-family: "Roboto", sans-serif;
  gap: 2rem;
  font-size: 25px;
  color: white;
  background: inherit;
  cursor: pointer;
}

li {
  list-style: none;
}

/* li:hover {
  color: gray;
} */

ul button {
  padding: 7px;
  background: darkgrey;
  border: 1px solid darkgray;
  border-radius: 30px;
  color: white;
  cursor: pointer;
}
ul button:hover {
  opacity: 0.7;
}
a:link {
  color: white;
  text-decoration: none;
}
a:visited {
  color: white;
  text-decoration: none;
}
a:hover {
  color: gray;
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
</style>
