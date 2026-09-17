export default function Home() {
  return (
    <main className="grid min-h-screen place-items-center bg-sky-50 p-8 font-sans text-slate-900">
      <section className="w-full max-w-xl rounded-3xl bg-white p-12 text-center shadow-xl shadow-sky-100 ring-1 ring-sky-100">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-sky-600">
          Week 1
        </p>
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">Hello, World!</h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          My first Next.js app is live on Vercel.
        </p>
      </section>
    </main>
  );
}
