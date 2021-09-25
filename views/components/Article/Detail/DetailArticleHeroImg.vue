<template>
	<div class="sm:pt-4 md:pt-12">
		<img
			class="inset-0 h-full w-full object-cover md:w-auto mx-auto"
			:src="image"
			alt="image can't be load"
		/>
	</div>
</template>

<script>
export default {
	props: {
		image: { type: String, default: '' },
	},
};
</script>

<style lang="scss" scoped></style>
