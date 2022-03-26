<template>

<div>

<h1>
Get help with Beap
</h1>
<h3>
Share any problem, feedback, or question you have.
</h3> <br>
 <v-card class="card">

	<div class="man">

			<div class="contact">
				Contact information : <br><br>
You can contact the support from the form on right, or reach out to us on social media. <br> <br>
						E-mail: <br>  Beap@gmail.com  <br> <br>
				Contact: <br> +91 9054854287 <br> <br><br>
				<v-avatar class="mb-4" size="40">
					<img src="git.png" alt=""
				/></v-avatar> &nbsp; &nbsp;

					<v-avatar class="mb-4" size="40">
					<img src="linkdin.png" alt=""
				/></v-avatar> &nbsp; &nbsp;
				<v-avatar class="mb-4" size="40">
					<img src="insta.jpg" alt=""
				/></v-avatar> &nbsp; &nbsp;

				<v-avatar class="mb-4" size="40">
					<img src="fb.png" alt=""
				/></v-avatar>



			</div>
			<div  class= "form">
				 <h2> Send Us Message : </h2> <br>

				<v-form >
			<v-text-field
				v-model="name"
				label="Name"
				placeholder="Entere Your name"
				autofocus
				outlined

			></v-text-field>

			<v-text-field
				v-model="Email"
				label="E-mail"
				placeholder="EnterYour E-Mail"
				autofocus
				outlined

			></v-text-field>
			<v-text-field
				v-model="subject"
				placeholder="Enter Your Subject "
				autofocus
				label="Subjet"
				outlined
				></v-text-field>
				<v-textarea
					outlined
					v-model="Mesaage"
					label="Mesage"
					counter="true"
					placeholder="Enter Your Mesage"

				/>


			<v-btn large class="success">Submit</v-btn>
		</v-form>

			</div>

          </div>
</v-card>

</div>

</template>

<style >

.card{
	margin: 40px;
}
.man{
	display: flex;

}

 h1 {
	 text-align: center;
	 font-size: 80px;
 }
 h3{
	 font-size :40px;
	  text-align: center;
 }
 .form{

		width: 60%;
		background: rgb(238, 237, 237);
		color: black;
		padding: 40px;



 }
 .contact{
background:#292928;
width: 40%;
color: white;




	font-size: 25px;
	padding: 40px;


 }

</style>

