<template>
	<div class="main">
		<ul>
			<div class="logo">
				<a
					href="http://localhost:3000/
	   "
					><v-avatar size="70">
						<img src="logo2.png" alt=""
					/></v-avatar>
				</a>
			</div>
			<li><nuxt-link to="/home"> Home</nuxt-link></li>
			<li><nuxt-link to="/learn"> Courses</nuxt-link></li>
			<li><nuxt-link to="/blogs">Blog</nuxt-link></li>
			<li><nuxt-link to="/about"> About</nuxt-link></li>
			<li>
				<nuxt-link to="/contact"> Contact Us</nuxt-link>
			</li>
			<div class="not-logged-in">
				<li><nuxt-link to="/login"> Login</nuxt-link></li>
				<li>
					<button><a href="/signup"> Register </a></button>
				</li>
			</div>
			<div>
				<li><nuxt-link to="/login"> Log Out</nuxt-link></li>
			</div>
		</ul>
	</div>
</template>

<script>
export default {
	name: "Navbar",
};
</script>

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
}
.logo {
	position: absolute;
	left: 2rem;
	cursor: pointer;
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

li:hover {
	color: gray;
	text-decoration: underline;
}

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
	color: grey;
	cursor: pointer;
	text-decoration: none;
}
a:active {
	color: grey;
}
</style>
