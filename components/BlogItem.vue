<script lang="ts" setup>
import type { Blog } from "~/@types/blog.type";
defineProps<{
  blog: Blog;
}>();
</script>

<template>
  <NuxtLink
    :to="makeSlug(blog.title)"
    class="transition hover:text-primary rounded px-5 py-4 flex justify-between items-center group hover:bg-primary/5 gap-x-5"
  >
    <div class="grow min-w-0">
      <div class="font-semibold text-xl font-tages inline-flex">
        <span class="mr-2">{{ blog.icon }}</span>
        {{ blog.title }}
      </div>
      <div class="mt-0.5 text-muted truncate text-sm">
        {{ blog.description }}
      </div>
      <div class="mt-4 text-xs inline-flex space-x-2 items-center text-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-3 mr-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
          />
        </svg>
        {{ blog.place }},
        {{ formatDate(blog.date) }}
      </div>
    </div>
    <div>
      <div
        class="size-8 rounded-full flex items-center justify-center dark:bg-gray-800 bg-gray-100 -translate-x-full transition group-hover:translate-x-0 opacity-0 group-hover:opacity-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  </NuxtLink>
</template>
