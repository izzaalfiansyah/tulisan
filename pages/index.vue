<script lang="ts" setup>
import type { Blog } from "~/@types/blog.type";
import { BlogRepository } from "~/repository/blog.repository";

const search = ref("");
const blogs = ref<Blog[]>([]);

const getBlogs = async () => {
  blogs.value = (await BlogRepository.get({
    search: search.value,
  })) as any;
};

watch(search, getBlogs);

onMounted(() => {
  getBlogs();
});

makeSeoMeta();
</script>

<template>
  <div class="main-container">
    <div
      class="flex items-center py-20 pb-10 mb-10 border-b border-b-gray-100 dark:border-b-gray-800 relative"
    >
      <div class="text-center w-full relative">
        <div class="text-4xl font-bold text-primary font-tages">
          Welcome to My Blog
        </div>
        <div class="mt-3 text-sm">
          Terkadang ada beberapa hal yang perlu diungkapkan, namun tak tahu
          dimana harus mengungkapkannya. Bukankah begitu?
        </div>
        <div class="mt-10">
          <input
            type="text"
            class="w-full px-5 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 outline-none border transition border-gray-100 dark:border-gray-800 focus:border-primary"
            placeholder="Cari Tulisan..."
            v-model="search"
          />
        </div>
      </div>
    </div>
    <div class="space-y-2">
      <template v-if="!blogs.length">
        <div class="text-center text-muted">Blog tidak ditemukan</div>
      </template>
      <template v-for="blog in blogs">
        <BlogItem :blog="blog"></BlogItem>
      </template>
    </div>
    <div class="mt-30">
      <Footer class="mt-32"></Footer>
    </div>
  </div>
</template>
