<template>
	<div class="w-auto mx-7 md:w-1/2 md:mx-auto">
		<div class="py-6 px-0">
			<div class="flex flex-row">
				<span
					v-for="item in categories"
					:key="item.catId"
					class="
						inline-block
						bg-gray-200
						rounded-full
						px-3
						py-1
						text-sm
						font-semibold
						text-gray-700
						mr-2
					"
				>
					<nuxt-link :to="`category/${item.categorySlug}`">
						{{ item.name }}
					</nuxt-link>
				</span>
			</div>
		</div>
		<h3
			class="
				font-semibold
				text-lg
				leading-tight
				truncate
				text-blue-900
				md:text-xl
			"
		>
			{{ title }}
		</h3>
		<p class="mt-2 text-sm md:text-base">
			{{ content }}
		</p>
	</div>
</template>

<script>
export default {
	props: {
		title: { type: String, default: '' },
		categories: { type: Array, default: () => [] },
		content: { type: String, default: '' },
	},
};
</script>

<style lang="scss" scoped></style>
