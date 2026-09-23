import { connection } from "next/server";

import { getFavoriteBooks } from "@/lib/supabase";

export default async function Home() {
  await connection();
  const { books, configured, error } = await getFavoriteBooks();

  return (
    <main className="min-h-screen bg-[#f7f5ef] px-6 py-16 text-slate-900 sm:px-10">
      <div className="mx-auto max-w-4xl">
        <header className="mb-10 border-b border-slate-300 pb-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-emerald-700">
            Week 2 · Supabase
          </p>
          <h1 className="max-w-3xl text-5xl font-bold tracking-tight sm:text-6xl">
            Books worth keeping close.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            This reading list is fetched from a Supabase table and rendered by a
            Next.js Server Component.
          </p>
        </header>

        {error ? (
          <section
            className="rounded-2xl border border-amber-300 bg-amber-50 p-6 text-amber-950"
            aria-live="polite"
          >
            <h2 className="font-semibold">
              {configured ? "The database is temporarily unavailable" : "Database setup needed"}
            </h2>
            <p className="mt-2 text-sm leading-6">{error}</p>
          </section>
        ) : books.length === 0 ? (
          <section className="rounded-2xl border border-slate-300 bg-white p-8 text-slate-600">
            The database is connected, but the reading list is empty.
          </section>
        ) : (
          <ol className="grid gap-5 sm:grid-cols-2" aria-label="Favorite books">
            {books.map((book, index) => (
              <li
                key={book.id}
                className="group rounded-2xl border border-slate-300 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
                      Book {String(index + 1).padStart(2, "0")}
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold tracking-tight">{book.title}</h2>
                    <p className="mt-2 text-slate-600">by {book.author}</p>
                  </div>
                  <span
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-emerald-100 text-lg text-emerald-900"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </div>
              </li>
            ))}
          </ol>
        )}

        <footer className="mt-10 flex items-center gap-3 text-sm text-slate-500">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" aria-hidden="true" />
          Live data from Supabase
        </footer>
      </div>
    </main>
  );
}
