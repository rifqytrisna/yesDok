<template>
	<div class="p-8 bg-blue-900 shadow-md">
		<nuxt-link to="/">
			<img
				:src="images.logo"
				alt=""
				class="w-32 h-auto md:w-48 sm:mx-auto"
				width="384"
				height="512"
			/>
		</nuxt-link>
	</div>
</template>

<script>
export default {
	data() {
		return {
			images: { logo: '/images/headeryesdok.png' },
		};
	},
};
</script>

<style lang="scss" scoped></style>
