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

function shareBlog() {
  try {
    navigator.share({
      title: blog?.title,
      text: blog?.description,
      url: window.location.href,
    });
  } catch (e) {
    //
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
      <div class="mt-14">
        <template v-if="blog.icon">
          <div class="text-7xl mb-4">{{ blog.icon }}</div>
        </template>
        <div class="font-bold text-4xl font-tages text-primary">
          {{ blog.title }}
        </div>
        <div class="text-sm mt-2 text-gray-500">{{ blog.description }}</div>
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
      <div class="mt-10 flex items-center justify-between">
        <NuxtLink
          to="/"
          class="inline-flex items-center rounded px-3 py-1 hover:bg-primary/10 transition hover:text-primary text-sm uppercase"
        >
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
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          Lainnya
        </NuxtLink>
        <button
          type="button"
          @click="shareBlog"
          class="inline-flex items-center rounded px-3 py-1 hover:bg-primary/10 transition hover:text-primary text-sm uppercase"
        >
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
              d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
            />
          </svg>

          Bagikan
        </button>
      </div>
      <Footer class="mt-20"></Footer>
    </div>
  </template>
  <template v-else>
    <NotFound></NotFound>
  </template>
</template>
