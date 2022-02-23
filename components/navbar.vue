<template>
  <div class="main">
    <ul>
      <li>Home</li>
      <li>Courses</li>
      <li>Blog</li>
      <li>About</li>
      <li>Contact Us</li>
      <li>login</li>
      <li><button>Register</button></li>
    </ul>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

* {
  margin: 0;
  font-family: Roboto, sans-serif;
}
.main {
  background: #292828;
  max-width: 100%;
  height: 80px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}

ul {
  display: flex;
  justify-content: flex-end;
  font-family: "Roboto", sans-serif;
  gap: 2rem;
  color: white;
  background: inherit;
}

li {
  list-style: none;
}

li:hover {
  color: gray;
}

ul button {
  padding: 7px;
  background: darkgrey;
  border: 1px solid darkgray;
  border-radius: 30px;
  color: white;
}
ul button:hover {
  opacity: 0.7;
}
</style>
