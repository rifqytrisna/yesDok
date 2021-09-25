<template>
	<div
		class="
			md:flex
			flex-col
			md:flex-row
			overflow-hidden
			bg-white
			rounded-lg
			shadow-xl
			mt-4
			w-100
			mx-2
		"
	>
		<slot name="side-image" />

		<div
			:class="{ 'py-8 px-6': isSideImage }"
			class="w-full text-gray-800 flex flex-col justify-between"
		>
			<img
				v-if="!isSideImage"
				class="inset-0 h-full md:w-full object-cover"
				width="384"
				:src="image"
				alt="image can't be load"
			/>
			<div :class="{ 'py-8 px-6': !isSideImage }">
				<h3
					class="
						font-semibold
						text-lg
						leading-tight
						truncate
						text-blue-900 text-xl
						md:text-2xl
					"
				>
					{{ title }}
				</h3>
				<p class="mt-2 text-sm md:text-base">
					{{ content }}
				</p>
				<div class="py-4 px-0">
					<div class="flex flex-row">
						<span
							v-for="item in categories"
							:key="item.catId"
							class="
								inline-block
								bg-gray-200
								rounded-full
								px-2
								md:px-3
								py-1
								md:text-sm
								font-semibold
								text-gray-700
								mr-1
								md:mr-2
								text-xs
							"
						>
							{{ item.name }}
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: { type: String, default: '' },
		categories: { type: Array, default: () => [] },
		image: { type: String, default: '' },
		content: { type: String, default: '' },
		isSideImage: { type: Boolean, default: false },
	},
};
</script>

<style lang="scss" scoped></style>
