interface Props {
  title?: string;
  description?: string;
}

export const makeSeoMeta = (props?: Props) => {
  useSeoMeta({
    title: props?.title,
    description: props?.description,
    ogTitle: props?.title,
    ogDescription: props?.description,
    ogType: "article",
    author: "Muhammad Izza Alfiansyah",
    applicationName: "Tulisan - Muhammad Izza Alfiansyah",
    titleTemplate(title) {
      return title
        ? `${title} - Muhammad Izza Alfiansyah`
        : "✍️ Tulisan - Muhammad Izza Alfiansyah";
    },
  });
};
