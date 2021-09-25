<template>
	<div>
		<Header />
		<nuxt />
		<Footer />
	</div>
</template>

<script>
export default {
	components: {
		Header: () => import(`~/views/layouts/Header`),
		Footer: () => import(`~/views/layouts/Footer`),
	},
};
</script>

<style></style>
