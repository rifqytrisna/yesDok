import articleList from '~/seed/articleList';
import articleDetail from '~/seed/articleDetail';
import { modelArticles, modelArticle } from '~/models/articles';

export const state = () => ({
	articleList: [],
	articleDetail: {},
	errList: null,
	errDetail: null,
});

export const mutations = {
	SET_ARTICLE_LIST(state, payload) {
		state.articleList = payload;
	},
	SET_ARTICLE_DETAIL(state, payload) {
		state.articleDetail = payload;
	},
	SET_ERR_LIST(state, payload) {
		state.errList = payload;
	},
	SET_ERR_DETAIL(state, payload) {
		state.errDetail = payload;
	},
};

export const getters = {
	storeArticle(store) {
		return JSON.parse(JSON.stringify(store));
	},
};

export const actions = {
	async fetchArticleList({ commit }) {
		try {
			const response = await articleList;
			commit('SET_ARTICLE_LIST', modelArticles(response.data));
		} catch (err) {
			if (err) {
				const { code = null, message = '' } = err;

				commit('SET_ERR_LIST', {
					code,
					message,
				});
			}
		}
	},

	async fetchArticleDetail({ commit }) {
		try {
			const response = await articleDetail;
			commit('SET_ARTICLE_DETAIL', modelArticle(response.data));
		} catch (err) {
			if (err) {
				const { code = null, message = '' } = err;

				commit('SET_ERR_DETAIL', {
					code,
					message,
				});
			}
		}
	},
};
