<template>
	<ul>
		<li v-for="a of data" :key="a.title">
			<span>{{ a.date }}</span>
			<ContentRenderer :value="a"/>
		</li>
	</ul>
</template>

<script setup lang="ts">
const { data, pending, error, refresh } = await useAsyncData(
	'announcements',
	() => queryContent('/_aktuelles/').find()
)
</script>

<style lang="scss" scoped>

</style>
