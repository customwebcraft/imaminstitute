import { notFound } from "next/navigation";
import { newsItems } from "@/lib/data";

interface Params {
  params: { slug: string };
}

export function generateMetadata({ params }: Params) {
  const article = newsItems.find((item) => item.href.endsWith(params.slug));
  if (!article) {
    return { title: "News | Imam Institute" };
  }

  return {
    title: `${article.title} | Imam Institute`,
    description: article.description,
  };
}

export default function NewsArticlePage({ params }: Params) {
  const article = newsItems.find((item) => item.href.endsWith(params.slug));
  if (!article) {
    notFound();
  }

  return (
    <section className="bg-off-white">
      <div className="mx-auto max-w-4xl px-6 py-24 md:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-crimson">News</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-navy text-display">{article.title}</h1>
        <p className="mt-3 text-sm uppercase tracking-[0.2em] text-ink-muted">{article.date}</p>
        <div className="mt-10 rounded-[1.75rem] bg-white p-8 shadow-sm">
          <p className="text-base leading-8 text-ink-muted">{article.description}</p>
          <p className="mt-6 text-sm text-ink-muted">More details will be published here soon.</p>
        </div>
      </div>
    </section>
  );
}
