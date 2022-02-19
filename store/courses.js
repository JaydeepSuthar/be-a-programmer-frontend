

export const state = () => ({
	courses: [],
});

export const mutations = {
	SET_COURSES (state, courses) {
		state.courses = courses
	}
}

export const actions = {
	async loadAllCourses({ commit }) {
		let { data: courses } = await getData('/course', this.$axios);

		commit('SET_COURSES', courses);
	}
}

const getData = async (url, axios) => {
	let response = await axios.get(url);

	return {
		data: response.data
	};
};
