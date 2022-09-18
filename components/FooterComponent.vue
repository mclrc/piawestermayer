<template>
	<footer>
		<ul>
			<li>©{{ new Date().getFullYear() }} Pia Westermayer</li>
		</ul>
	</footer>
</template>

<style scoped lang="scss">
@import '@/assets/style/vars.scss';

footer {
	font-family: Quicksand;
	max-width: $max-content-width;
	padding: 2rem $content-padding;
	display: block;
	margin: 0 auto;
}
ul {
	display: block;
	margin: 0 auto;
	padding: 0;
	list-style: none;
	color: $text-color;
}
</style>
