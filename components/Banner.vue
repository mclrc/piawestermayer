<template>
	<div v-if="page.bannerImage" id="banner" :style="{ backgroundImage: `url(${page.bannerImage})`, }"></div>
</template>

<script setup lang="ts">
const { page } = useContent()
</script>

<style scoped lang="scss">
#banner {
	display: block;
	width: 100vw;
	height: 40vh;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
}
</style>
