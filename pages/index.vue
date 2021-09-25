<template>
	<div class="px-6 mt-8 md:mt-24">
		<div>
			<h1 class="text-2xl md:text-4xl text-blue-900 font-bold">
				Artikel Terbaru
			</h1>

			<div v-for="item in storeArticle.articleList" :key="item.id">
				<nuxt-link :to="`article/${item.slug}`">
					<HomeArticleCard
						:title="item.title"
						:categories="item.categories"
						:image="item.image"
						:content="item.content"
						isSideImage
					>
						<template slot="side-image">
							<div class="h-64 w-auto md:w-1/4 lg:w-1/2">
								<img
									class="inset-0 h-full w-full object-cover"
									:src="item.image"
									alt="image can't be load"
								/>
							</div>
						</template>
					</HomeArticleCard>
				</nuxt-link>
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
			query: '',
		};
	},
	async fetch({ store: { dispatch } }) {
		await dispatch('article/fetchArticleList');
	},
	computed: {
		...mapState({
			storeArticle: (state) => state.article,
		}),
	},
};
</script>
<style scoped></style>
