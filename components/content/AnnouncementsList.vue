<template>
	<ul>
		<li v-for="a of data" :key="a.title">
			<span class="date">{{ new Date(a.date).toLocaleDateString('de-DE') }}</span>
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
ul {
	list-style: none;
}

li {
	.date {
		font-size: .9em;
		color: #888;
	}
	&:not(:last-child) {
		padding-bottom: 1rem;
		border-bottom: 1px solid #ddd;
	}
}

</style>
