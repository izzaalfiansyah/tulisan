<script lang="ts" setup>
import type { Theme } from "~/@types/theme.type";
import { ThemeRepository } from "~/repository/theme.repository";

const currentTheme = ref<Theme>("system");

const themes = [
  {
    theme: "system",
    icon: `
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z"
          />
        </svg>`,
  },
  {
    theme: "light",
    icon: `<svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
          />
        </svg>`,
  },
  {
    theme: "dark",
    icon: `<svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
          />
        </svg>`,
  },
];

function loadTheme() {
  ThemeRepository.init();
}

function setTheme(theme: Theme) {
  ThemeRepository.set(theme);
  currentTheme.value = theme;
  loadTheme();
}

onMounted(() => {
  currentTheme.value = ThemeRepository.get();

  ThemeRepository.media.addEventListener("change", (e) => {
    loadTheme();
  });

  loadTheme();
});
</script>

<template>
  <div
    class="inline-flex items-center space-x-2 rounded-full px-2 py-1 border border-gray-100 dark:border-gray-800"
  >
    <template v-for="theme in themes">
      <button
        type="button"
        :class="{ 'text-primary': currentTheme == theme.theme }"
        v-html="theme.icon"
        @click="setTheme(theme.theme as Theme)"
      ></button>
    </template>
  </div>
</template>
