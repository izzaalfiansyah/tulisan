import type { Theme } from "~/@types/theme.type";

export class ThemeRepository {
  static get(): Theme {
    const theme = localStorage.getItem("theme");

    if (!!theme) {
      return theme as Theme;
    }

    return "system";
  }

  static getSystem(): Theme {
    if (this.media.matches) {
      return "dark";
    } else {
      return "light";
    }
  }

  static media: MediaQueryList = window.matchMedia(
    "(prefers-color-scheme: dark)"
  );

  static set(theme: Theme) {
    localStorage.setItem("theme", theme);
  }

  static init() {
    let theme = this.get();

    if (theme == "system") {
      theme = this.getSystem();
    }

    if (theme == "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
}
