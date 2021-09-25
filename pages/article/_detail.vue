<template>
	<div class="article-detail-page md:container mx-auto">
		<DetailArticleHeroImg :image="storeArticle.articleDetail.image" />
		<DetailArticleContent
			:title="storeArticle.articleDetail.title"
			:categories="storeArticle.articleDetail.categories"
			:content="storeArticle.articleDetail.content"
		/>
	</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	components: {
		DetailArticleContent: () =>
			import(`~/views/components/Article/Detail/DetailArticleContent.vue`),
		DetailArticleHeroImg: () =>
			import(`~/views/components/Article/Detail/DetailArticleHeroImg.vue`),
	},
	computed: {
		...mapState({
			storeArticle: (state) => state.article,
		}),
	},
	created() {
		this.fetchArticleDetail();
	},
	methods: {
		async fetchArticleDetail() {
			const {
				$store: { dispatch },
			} = this;

			await dispatch('article/fetchArticleDetail');
		},
	},
};
</script>

<style scoped></style>
