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
      description: blog.description,
    });

    higlight.highlightAll();
  }
}

watch(() => blog, generateTitle);

onMounted(() => {
  generateTitle();
});
</script>

<template>
  <template v-if="blog">
    <template v-if="blog.imagePath">
      <img
        :src="blog.imagePath"
        :alt="blog.title"
        class="w-full object-cover h-48"
      />
    </template>
    <div class="main-container">
      <div class="mt-20">
        <template v-if="blog.icon">
          <div class="text-7xl mb-4">{{ blog.icon }}</div>
        </template>
        <div class="font-bold text-4xl font-tages text-primary">
          {{ blog.title }}
        </div>
        <div class="text-sm text-muted">{{ blog.description }}</div>
        <div class="mt-5 inline-flex text-muted text-sm items-center">
          <svg
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
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
            />
          </svg>

          {{ blog.place }}, {{ formatDate(blog.date) }}
        </div>
        <template v-if="blog.tags">
          <div class="mt-2 flex flex-wrap items-center gap-2">
            <template v-for="tag in blog.tags">
              <NuxtLink
                :to="`/tags/${tag}`"
                class="text-primary bg-primary/20 px-2 text-sm rounded"
              >
                # {{ tag }}
              </NuxtLink>
            </template>
          </div>
        </template>
        <!-- <div class="mt-10">
          <input
            type="text"
            placeholder="Tulis Komentar..."
            class="w-full bg-transparent border-none outline-none placeholder:text-gray-500"
          />
        </div> -->
      </div>
      <div class="mt-10 pt-5 border-t border-t-gray-100 dark:border-t-gray-800">
        <ContentRenderer
          class="content-note antialiased"
          :value="blog"
        ></ContentRenderer>
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
          Tulisan Lainnya
        </nuxt-link>
      </div>
      <Footer class="mt-20"></Footer>
    </div>
  </template>
  <template v-else>
    <NotFound></NotFound>
  </template>
</template>
