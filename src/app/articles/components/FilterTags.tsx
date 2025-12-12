"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FiTag } from "react-icons/fi";

type FilterTagsProps = {
  tags: string[];
  activeTags: string[];
};

const FilterTags = ({ tags, activeTags }: FilterTagsProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateTags = (nextTags: string[]) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("tag");
    nextTags.forEach((tag) => params.append("tag", tag));
    params.delete("page"); // reset pagination when filters change

    const query = params.toString();
    router.push(query ? `${pathname}?${query}` : pathname);
  };

  const toggleTag = (tag: string) => {
    const current = new Set(activeTags);
    current.has(tag) ? current.delete(tag) : current.add(tag);
    updateTags(Array.from(current));
  };

  const resetFilters = () => updateTags([]);

  return (
    <div className="rounded-2xl border border-primary/10 bg-white/80 shadow-xl shadow-primary/10 backdrop-blur lg:sticky lg:top-28">
      <div className="flex items-center justify-between gap-3 border-b border-primary/10 p-5">
        <div className="flex items-center gap-2 text-primary font-vazir font-bold">
          <FiTag className="h-5 w-5" />
          <span>فیلتر تگ‌ها</span>
        </div>
        {activeTags.length ? (
          <button onClick={resetFilters} className="cursor-pointer rounded-full border border-secondary/40 px-3 py-1 text-xs font-vazir text-secondary transition hover:bg-secondary/10">
            پاک کردن
          </button>
        ) : null}
      </div>
      <div className="flex flex-col gap-4 p-5">
        <p className="text-xs font-vazir text-foreground/70">تگ‌های دلخواه را فعال کنید تا مقالات مرتبط نمایش داده شود.</p>
        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => {
            const isActive = activeTags.includes(tag);
            return (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-vazir transition w-full ${
                  isActive ? "border-primary bg-primary text-primary-foreground shadow-md shadow-primary/30" : "border-primary/20 bg-primary/5 text-primary hover:border-primary/40 hover:bg-primary/10"
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-2 text-xs font-vazir">
          {activeTags.length ? (
            activeTags.map((tag) => (
              <span key={tag} className="rounded-full bg-secondary/15 px-3 py-1 text-secondary">
                #{tag}
              </span>
            ))
          ) : (
            <span className="rounded-full bg-primary/5 px-3 py-1 text-primary">همه تگ‌ها فعال‌اند</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterTags;
