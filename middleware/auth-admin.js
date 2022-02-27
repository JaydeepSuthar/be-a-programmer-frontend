export default async function ({ $auth, redirect, store }) {

	let user = $auth.$storage.getUniversal('user');

	console.log(user);

	if (user && !(user.role === 'student')) {
		// let user in
	} else {
		redirect('/');
		alert('You are not allowed');
	}
}
