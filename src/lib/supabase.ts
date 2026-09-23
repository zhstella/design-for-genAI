import "server-only";

import { createClient } from "@supabase/supabase-js";

export type FavoriteBook = {
  id: number;
  title: string;
  author: string;
  created_at: string;
};

type FavoriteBooksResult = {
  books: FavoriteBook[];
  configured: boolean;
  error: string | null;
};

export async function getFavoriteBooks(): Promise<FavoriteBooksResult> {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return {
      books: [],
      configured: false,
      error: "Supabase environment variables are not configured yet.",
    };
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false,
    },
  });

  const { data, error } = await supabase
    .from("favorite_books")
    .select("id, title, author, created_at")
    .order("id", { ascending: true });

  if (error) {
    console.error("Supabase favorite_books query failed:", error.message);

    return {
      books: [],
      configured: true,
      error: "The reading list could not be loaded. Please try again soon.",
    };
  }

  return {
    books: data ?? [],
    configured: true,
    error: null,
  };
}
