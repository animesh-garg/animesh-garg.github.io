import { ArrowUpRight } from "lucide-react";
import { News } from "@/data/news";

export function NewsEntry({ news }: { news: News }) {
  return (
  <div className="grid grid-cols-4 gap-x-2">
      <span className="text-sm text-zinc-500 mt-1">{news.date}</span>
      <div className="col-span-3 flex flex-col">
        <h3 className="text-base font-serif">
          {news.link ? (
              <a
                href={news.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 hover:text-zinc-600 transition-colors duration-300"
              >
                {news.title}
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 text-zinc-500"
                />
              </a>
            ) : (
              news.title
            )}
        </h3>
        {news.description && (
          <section>
          <p className="text-sm text-zinc-600 leading-relaxed mt-1 [&_a]:underline [&_a]:text-zinc-900 [&_a:hover]:text-zinc-600"
            dangerouslySetInnerHTML={{ __html: news.description }}
          />
        </section>
        )}
      </div>

    </div>
  );
}
