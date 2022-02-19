import { getData } from '@/utils/get-data';

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
