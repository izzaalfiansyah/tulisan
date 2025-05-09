<script lang="ts" setup>
import { BlogRepository } from "~/repository/blog.repository";

const slug: string = useRoute().params.slug.toString();

const blog = await BlogRepository.getBySlug(slug);

function generateTitle() {
  if (!!blog) {
    let title = blog.title;

    if (blog.icon) {
      title = `${blog.icon} ${title}`;
    }

    makeSeoMeta({
      title,
    });
  }
}

watch(() => blog, generateTitle);

onMounted(() => {
  generateTitle();
});
</script>

<template>
  <ContentRenderer v-if="blog" :value="blog"></ContentRenderer>
</template>
