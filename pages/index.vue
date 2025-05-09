<script lang="ts" setup>
import type { Blog } from "~/@types/blog.type";
import { BlogRepository } from "~/repository/blog.repository";

const recentBlogs: Blog[] = await BlogRepository.get();

useSeoMeta({
  titleTemplate(title) {
    return title
      ? `${title} - Muhammad Izza Alfiansyah`
      : "✍️ Tulisan - Muhammad Izza Alfiansyah";
  },
  applicationName: "Tulisan - Muhammad Izza Alfiansyah",
});
</script>

<template>
  <!-- <div
    class="absolute top-0 left-0 right-0 bg-gradient-to-b from-primary/35 to-transparent vie-transparent to-b h-[25vh] blur-2xl"
  ></div> -->
  <div
    class="flex items-center py-28 pb-10 mb-10 border-b border-b-gray-100 dark:border-b-gray-800 relative"
  >
    <div class="text-center w-full relative">
      <div class="text-5xl font-bold text-primary font-tages">
        Welcome to My Blog
      </div>
      <div class="mt-3 text-sm">
        Terkadang ada beberapa hal yang perlu diungkapkan, namun tak tahu dimana
        harus mengungkapkannya. Bukankah begitu?
      </div>
      <div class="mt-10">
        <input
          type="text"
          class="w-full px-5 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 outline-none border transition border-gray-100 dark:border-gray-800 focus:border-primary"
          placeholder="Cari Tulisan..."
        />
      </div>
    </div>
  </div>
  <div class="">
    <template v-for="blog in recentBlogs">
      <BlogItem :blog="blog"></BlogItem>
    </template>
  </div>
</template>
