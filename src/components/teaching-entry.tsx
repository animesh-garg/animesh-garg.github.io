import { Teaching } from "@/data/teaching";

export function TeachingEntry({ teaching }: { teaching: Teaching }) {
  return (
  <div className="grid grid-cols-4 gap-x-2 ">
      <span className="text-xs text-zinc-500 mt-1">{teaching.number}</span>
      <div className="col-span-3 flex flex-col">
      <h3 className="text-base font-serif">
        {teaching.link ? (
          <a
            href={teaching.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 hover:text-zinc-600 transition-colors duration-300"
          >
            {teaching.title}
          </a>
          ) : (
          teaching.title
        )}
      </h3>
        {teaching.offering && (
          <p className="text-sm text-zinc-600">
            {teaching.offering}
          </p>
        )}
      </div>
      <div className="col-span-4 flex flex-col">
        {teaching.description && (
          <p className="text-sm text-zinc-600 leading-relaxed mt-2">
            {teaching.description}
          </p>
        )}
      </div>
    </div>
  );
}
