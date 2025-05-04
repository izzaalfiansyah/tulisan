<script lang="ts" setup>
const props = defineProps<{
  path: string;
}>();

const { data } = await useAsyncData(() => {
  return queryCollection("content").path(props.path).first();
});
</script>

<template>
  <ContentRenderer v-if="data" :value="data"></ContentRenderer>
</template>
