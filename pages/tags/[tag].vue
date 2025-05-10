<script lang="ts" setup>
import { BlogRepository } from "~/repository/blog.repository";

const tag = useRoute().params.tag.toString();

const blogs = await BlogRepository.getByTags({
  tag,
});

makeSeoMeta({
  title: `Tag #${tag}`,
});
</script>

<template>
  <div class="main-container">
    <div class="min-h-[70vh]">
      <div class="mt-20">
        <div class="text-4xl font-bold font-tages text-primary">
          🚀 #{{ $route.params.tag }}
        </div>
      </div>
      <div class="mt-20">
        <template v-for="blog in blogs">
          <BlogItem :blog="blog"></BlogItem>
        </template>
      </div>
      <div class="mt-10">
        <nuxt-link
          to="/"
          class="inline-flex items-center rounded px-3 py-1 hover:bg-primary/10 transition hover:text-primary"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-4 mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          Beranda
        </nuxt-link>
      </div>
    </div>
    <Footer class="mt-10"></Footer>
  </div>
</template>
