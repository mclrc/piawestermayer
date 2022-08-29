<template>
	<ul>
		<li v-for="a of data" :key="a.title"><ContentRenderer :value="a"/></li>
	</ul>
</template>

<script setup lang="ts">
const { data, pending, error, refresh } = await useAsyncData(
	'announcements',
	() => queryContent('/_aktuelles/').find()
)
console.log(data)
</script>

<style lang="scss" scoped>

</style>
