import type { ContentCollectionItem } from "@nuxt/content";
import type { Blog } from "~/@types/blog.type";
import type { BlogsByTagParams } from "~/@types/blog/blogs-by-tag-params";
import type { BlogsParams } from "~/@types/blog/blogs-params";

export class BlogRepository {
  static async get(params?: BlogsParams): Promise<Blog[]> {
    let query = queryCollection("content").order("date", "DESC");

    if (!!params?.limit) {
      query = query.limit(params.limit);
    }

    if (!!params?.offset) {
      query = query.skip(params.offset);
    }

    if (!!params?.search) {
      query = query.where("title", "LIKE", `%${params.search}%`);
    }

    return await query.all();
  }

  static async getByTags(params: BlogsByTagParams): Promise<Blog[]> {
    let query = queryCollection("content").order("date", "DESC");

    query.where("tags", "LIKE", `%${params.tag}%`);

    return await query.all();
  }

  static async getBySlug(slug: string): Promise<ContentCollectionItem | null> {
    return await queryCollection("content").path(`/${slug}`).first();
  }
}
