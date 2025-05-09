<script lang="ts" setup>
import { BlogRepository } from "~/repository/blog.repository";

const slug: string = useRoute().params.slug.toString();

const { data: blog } = useAsyncData(() => BlogRepository.getBySlug(slug));
</script>

<template>
  <ContentRenderer v-if="blog" :value="blog"></ContentRenderer>
</template>
