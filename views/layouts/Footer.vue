<template>
	<div
		class="
			bg-gray-500
			grid
			md:grid-flow-row md:grid-cols-3 md:grid-rows-3 md:gap-8
			sm:gap-4
			text-white
			md:p-20
			p-10
			md:h-96
			mt-20
		"
	>
		<div>
			<img
				:src="images.logo"
				alt=""
				class="w-32 h-auto md:w-48 sm:mx-auto"
				width="384"
				height="512"
			/>
			<p class="mt-5">
				YesDok adalah layanan ehealth yang terjangkau dengan platform mobile
				yang mudah digunakan dan tangguh. Menembus 17.504 pulau dan 260 juta
				pengguna di Indonesia.
			</p>
		</div>
		<div class="md:pl-20">
			<p class="text-xl mb-5">INDONESIA</p>
			<a :href="location" target="_blank">
				<span>
					PT. Yes Dok Indonesia,<br />
					Ruko Kirana Boutique <br />
					Jl. Boulevard Gading Raya Blok F3 <br />
					No.11 <br />
					Jakarta 14240 <br />
				</span>
			</a>
			<p class="text-xl my-5">SINGAPORE</p>
			<span> YesDok Pte. Ltd. </span>
		</div>
		<div class="md:pl-20">
			<p class="text-xl mb-5">KONTAK</p>
			<span class="block mb-5">
				Corporate Info : <br />
				<a :href="email.info">info@yesdok.com </a>
			</span>
			<span>
				Customer Service : <br />
				<a :href="email.help">help@yesdok.com</a>
			</span>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			images: { logo: '/images/headeryesdok.png' },
			location:
				'https://www.google.com/maps/place/Kirana+Boutique+Office/@-6.1741032,106.8940087,21z/data=!4m5!3m4!1s0x2e69f520aed63795:0xd18f4ce7a8259dbb!8m2!3d-6.174088!4d106.8940886',
			email: {
				info: 'mailto:info@yesdok.com',
				help: 'mailto:help@yesdok.com',
			},
		};
	},
};
</script>

<style lang="scss" scoped></style>
