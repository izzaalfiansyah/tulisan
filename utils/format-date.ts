export const formatDate = (value: string) => {
  const date = new Date(value);

  return date.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
