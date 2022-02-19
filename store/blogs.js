import { getData } from '@/utils/get-data';

export const state = () => ({
	blogs: [],
});

export const mutations = {
	SET_BLOGS(state, blogs) {
		state.blogs = blogs;
	}
};

export const actions = {
	async loadAllBlogs({ commit }) {
		let { data: blogsData } = await getData('/blog', this.$axios);
		let blogs = blogsData.data;
		commit('SET_BLOGS', blogs);
	}
};

