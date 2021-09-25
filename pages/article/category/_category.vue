<template>
	<div class="container mx-auto">
		<h1
			class="
				text-2xl
				lg:text-4xl
				text-blue-900
				font-bold
				mt-7
				md:mt-20
				mb-4
				pl-6
				md:pl-0
			"
		>
			Category: {{ categoryName }}
		</h1>

		<div
			class="
				md:grid md:grid-flow-row md:grid-cols-2 md:grid-rows-2
				lg:grid-cols-3 lg:grid-rows-3
				md:gap-8
				sm:gap-4
				px-4
			"
		>
			<div v-for="item in storeArticle.articleList" :key="item.id">
				<div class="cursor-pointer" @click="gotoArticleDetail(item.slug)">
					<HomeArticleCard
						:title="item.title"
						:categories="item.categories"
						:image="item.image"
						:content="item.content"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	components: {
		HomeArticleCard: () =>
			import(`~/views/components/Home/HomeArticleCard.vue`),
	},
	data() {
		return {
			categoryName: '',
		};
	},
	computed: {
		...mapState({
			storeArticle: (state) => state.article,
		}),
	},
	created() {
		this.getCategoryName();
		this.fetchArticleList();
	},
	methods: {
		getCategoryName() {
			const {
				$route: {
					params: { category },
				},
			} = this;

			const words = category.split('-');
			this.categoryName = words
				.map((word) => {
					return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
				})
				.join(' ');
		},
		async fetchArticleList() {
			const {
				$store: { dispatch },
			} = this;

			await dispatch('article/fetchArticleList');
		},
		gotoArticleDetail(slug) {
			this.$router.push(`/article/${slug}`);
		},
	},
};
</script>

<style lang="scss" scoped></style>
