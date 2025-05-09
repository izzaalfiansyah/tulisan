import slugify from "slugify";

export const makeSlug = (text: string) => {
  return slugify(text, { lower: true, trim: true });
};
