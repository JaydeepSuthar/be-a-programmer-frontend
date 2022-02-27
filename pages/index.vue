<template>

  <div class="parent">

    <navbar />
    <section>
      <div class="middle">
        <div class="intro">
          <h1>
            Learn <br />
            Programming
          </h1>
          <br />
          Build projects, practice and learn to code from scratch without
          leaving your browser . <br /><br /><br />
          <button>Explore Couse Library</button>
		   <v-btn color="warning" nuxt to="/admin/home"> Go to Admin Panel </v-btn>
        </div>
        <div class="video">
          <video controls width="650px" autoplay>
            <source src="how.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div class="extra">
        <h1>GET OUT OF THE TUTORIAL HELL</h1>
        <br />
        <p>
          You have read about "Practice makes a man perfect", but you still
          learn by watching hours of videos. For the first time ever, you can
          experience an interactive course completely online - a perfect blend
          of theory and practice right inside your browser. 10x more engaging,
          higher quality, cheaper, and a stellar experience for visual learners.
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

* {
  margin: 0;
  font-family: "Roboto", sans-serif;
}

.parent {
  display: flex;
  flex-direction: column;
  color: aliceblue;
  flex-shrink: 0;
  margin: 0;
  background: #292928;
  box-sizing: border-box;
  font-size: 20px;
}

.middle {
  display: flex;
}

.video {
  background: inherit;
  width: 800px;
  display: flex;
  flex-shrink: 2;
  flex-grow: 1;
  justify-content: flex-end;
  background: inherit;
}

button {
  border-radius: 25px;
  background: rgb(35, 35, 158);
  border: 2px solid rgb(35, 35, 158);
  color: whitesmoke;
  padding: 20px;
}
button:hover {
  opacity: 0.7;
}

.intro {
  width: 500px;
  background: inherit;
  text-align: center;
}

.imtro h1 {
  color: #ff0800;
  font-size: 50px;
}

.extra {
  display: flex;
  flex-direction: column;
  flex-basis: 450px;
  text-align: justify;
  padding-top: 30px;
  background: white;
  color: black;
}

.extra h1 {
  color: rgb(248, 124, 8);
  font-size: 30px;
}
</style>







<script>
	export default {
		name: "IndexPage",
	};
</script>

