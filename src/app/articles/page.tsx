"use client";

import Image from "next/image";
import { FC, useEffect, useMemo, useState } from "react";
import { FiCalendar, FiFilter, FiTag } from "react-icons/fi";

import { toPersianNumber } from "@/utils/ToPersionDigits";
import Link from "next/link";

type Article = {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  publishDate: string;
  tags: string[];
  imageUrl: string;
};

const articles: Article[] = [
  {
    id: "stress-management",
    title: "مدیریت استرس در زندگی روزمره",
    subtitle: "تمرین‌های ساده برای آرام کردن ذهن و کاهش تنش‌های روزانه.",
    author: "دکتر مرضیه خمسه",
    publishDate: "1403/09/12",
    tags: ["استرس", "سلامت روان", "مدیتیشن"],
    imageUrl: "/images/article-sample.png",
  },
  {
    id: "healthy-boundaries",
    title: "چطور مرزهای سالم در رابطه ایجاد کنیم؟",
    subtitle: "گام‌به‌گام تا ساختن احترام متقابل در روابط عاطفی و کاری.",
    author: "تیم درمان خمسه",
    publishDate: "1403/08/28",
    tags: ["روابط", "زوج درمانی", "خودشناسی"],
    imageUrl: "/images/article-sample.png",
  },
  {
    id: "sleep-hygiene",
    title: "بهداشت خواب و تاثیر آن بر مغز",
    subtitle: "چگونه با عادت‌های کوچک، کیفیت خواب و تمرکز را بالا ببریم.",
    author: "دکتر مرضیه خمسه",
    publishDate: "1403/08/10",
    tags: ["سلامت روان", "خواب", "آرامش"],
    imageUrl: "/images/article-sample.png",
  },
  {
    id: "anxiety-grounding",
    title: "تکنیک گراندینگ برای اضطراب",
    subtitle: "آموزش تکنیک ۵-۴-۳-۲-۱ برای بازگرداندن ذهن به لحظه حال.",
    author: "تیم درمان خمسه",
    publishDate: "1403/07/30",
    tags: ["اضطراب", "ذهن آگاهی", "تمرین عملی"],
    imageUrl: "/images/article-sample.png",
  },
  {
    id: "children-emotions",
    title: "همدلی با احساسات کودکان",
    subtitle: "چگونه والدین می‌توانند تنظیم هیجانی را به فرزندان بیاموزند.",
    author: "دکتر مرضیه خمسه",
    publishDate: "1403/07/15",
    tags: ["والدگری", "کودک", "سلامت خانواده"],
    imageUrl: "/images/article-sample.png",
  },
  {
    id: "self-compassion",
    title: "خودمهربانی؛ مهارتی برای درمان افسردگی",
    subtitle: "با تکنیک‌های مبتنی بر شفقت، گفتگوی درونی را تغییر دهید.",
    author: "تیم درمان خمسه",
    publishDate: "1403/06/28",
    tags: ["افسردگی", "خودشناسی", "سلامت روان"],
    imageUrl: "/images/article-sample.png",
  },
  {
    id: "anger-mapping",
    title: "نقشه خشم؛ از محرک تا واکنش سالم",
    subtitle: "شناخت چرخه خشم و راهکارهای توقف قبل از انفجار.",
    author: "دکتر مرضیه خمسه",
    publishDate: "1403/06/05",
    tags: ["خشم", "کنترل احساسات", "زوج درمانی"],
    imageUrl: "/images/article-sample.png",
  },
  {
    id: "productivity-balance",
    title: "تعادل بهره‌وری و استراحت",
    subtitle: "پروتکل ۵۰/۱۰ برای جلوگیری از فرسودگی شغلی.",
    author: "تیم درمان خمسه",
    publishDate: "1403/05/18",
    tags: ["فرسودگی", "سلامت روان", "محیط کار"],
    imageUrl: "/images/article-sample.png",
  },
  {
    id: "communication-art",
    title: "هنر گوش دادن فعال",
    subtitle: "سه مرحله برای شنیدن، فهمیدن و پاسخ دادن بدون قضاوت.",
    author: "دکتر مرضیه خمسه",
    publishDate: "1403/05/02",
    tags: ["روابط", "زوج درمانی", "مهارت ارتباطی"],
    imageUrl: "/images/article-sample.png",
  },
  {
    id: "grief-processing",
    title: "سوگ؛ مسیر عبور از فقدان",
    subtitle: "راه‌هایی برای پذیرش، بیان و معنا دادن به غم از دست دادن.",
    author: "تیم درمان خمسه",
    publishDate: "1403/04/21",
    tags: ["سوگ", "سلامت روان", "ذهن آگاهی"],
    imageUrl: "/images/article-sample.png",
  },
];

const pageSize = 6;

const ArticlesPage: FC = () => {
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [page, setPage] = useState(1);

  const tagList = useMemo(() => Array.from(new Set(articles.flatMap((item) => item.tags))), []);

  const filteredArticles = useMemo(() => {
    if (!activeTags.length) return articles;
    return articles.filter((article) => activeTags.every((tag) => article.tags.includes(tag)));
  }, [activeTags]);

  useEffect(() => {
    setPage(1);
  }, [activeTags]);

  const totalPages = Math.max(1, Math.ceil(filteredArticles.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * pageSize;
  const visibleArticles = filteredArticles.slice(start, start + pageSize);

  const toggleTag = (tag: string) => {
    setActiveTags((prev) => (prev.includes(tag) ? prev.filter((item) => item !== tag) : [...prev, tag]));
  };

  const resetFilters = () => setActiveTags([]);

  const goToPage = (target: number) => {
    setPage(Math.min(totalPages, Math.max(1, target)));
  };

  return (
    <section className="min-h-screen bg-background pb-16">
      <Image src="/images/article.png" alt="article-vector" className="hidden xl:block absolute top-2/3 right-0 z-0" width={500} height={200} />
      <div className="relative isolate overflow-hidden bg-gradient-to-l from-primary/10 via-background to-secondary/10">
        <div className="absolute -left-10 top-6 h-40 w-40 rounded-full bg-secondary/30 blur-3xl" />
        <div className="absolute -right-14 bottom-6 h-48 w-48 rounded-full bg-primary/25 blur-3xl" />
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 pb-16 pt-24 text-right">
          <div className="flex items-center gap-3 text-secondary font-vazir text-sm md:text-base">
            <FiFilter className="h-5 w-5" />
            <span> مقالات و یادداشت‌های روانشناسی</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-vazir font-black text-primary leading-tight">مقالات روانشناسی</h1>
          <p className="max-w-3xl text-foreground/80 font-vazir leading-8">لیست جدیدترین مقالات روانشناسی | یادگیری مهارت‌های روانی برای زندگی بهتر </p>
          <div className="flex flex-wrap items-center gap-4 text-sm font-vazir text-foreground/70">
            <span className="rounded-full bg-primary/10 px-4 py-2 font-bold text-primary">مجموع: {toPersianNumber(articles.length)} مقاله</span>
            {activeTags.length > 0 ? (
              <button onClick={resetFilters} className="rounded-full border border-secondary/40 px-4 py-2 text-secondary transition hover:bg-secondary/10 cursor-pointer">
                پاک کردن فیلترها
              </button>
            ) : null}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 -mt-10 lg:-mt-14">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          <aside className="order-1 lg:col-span-1">
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
                  {tagList.map((tag) => {
                    const isActive = activeTags.includes(tag);
                    return (
                      <button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-vazir transition w-full ${
                          isActive
                            ? "border-primary bg-primary text-primary-foreground shadow-md shadow-primary/30"
                            : "border-primary/20 bg-primary/5 text-primary hover:border-primary/40 hover:bg-primary/10"
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
          </aside>

          <div className="order-1 lg:order-2 lg:col-span-3 flex flex-col gap-6">
            <div className="flex items-center justify-between gap-3 text-sm font-vazir text-foreground/70 p-3 rounded-2xl border border-primary/10 bg-white/80 shadow-xl shadow-primary/10 backdrop-blur ">
              <div>
                نمایش {toPersianNumber(filteredArticles.length ? start + 1 : 0)} تا {toPersianNumber(Math.min(start + pageSize, filteredArticles.length))} از {toPersianNumber(filteredArticles.length)}{" "}
                مقاله
              </div>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">{activeTags.length ? `تگ‌های فعال: ${activeTags.map((tag) => `#${tag}`).join("، ")}` : "بدون فیلتر تگ"}</span>
            </div>

            {visibleArticles.length ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {visibleArticles.map((article) => (
                  <article
                    key={article.id}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-lg shadow-primary/10 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20"
                  >
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image src={article.imageUrl} alt={article.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                      <div className="absolute right-3 top-3 flex flex-wrap gap-2">
                        {article.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="rounded-full bg-white/90 px-3 py-1 text-xs font-vazir text-primary shadow">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-3 p-5">
                      <div className="flex items-center justify-between text-xs font-vazir text-foreground/70">
                        <div className="flex items-center gap-1">
                          <FiCalendar className="h-4 w-4" />
                          <span>{toPersianNumber(article.publishDate)}</span>
                        </div>
                        <span className="rounded-full bg-primary/5 px-2 py-1 text-primary">{article.author}</span>
                      </div>
                      <h3 className="text-lg font-vazir font-extrabold text-primary leading-snug">
                        <Link className="text-lg font-vazir font-extrabold text-primary leading-snug" href={`article/${article.id}`}>
                          {article.title}
                        </Link>
                      </h3>
                      <p className="text-sm font-vazir text-foreground/80 leading-7">{article.subtitle}</p>
                      <div className="mt-auto flex flex-wrap gap-2 pt-2">
                        {article.tags.map((tag) => (
                          <span key={tag} className="rounded-full border border-primary/10 bg-primary/5 px-2 py-1 text-[11px] font-vazir text-primary">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-primary/30 bg-primary/5 p-10 text-center font-vazir text-primary">هیچ مقاله‌ای با تگ‌های انتخابی یافت نشد.</div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-primary/10 bg-white px-4 py-3 shadow-sm">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="cursor-pointer rounded-full border border-primary/20 px-4 py-2 font-vazir text-sm text-primary transition hover:bg-primary/10 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  قبلی
                </button>
                <button
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="cursor-pointer rounded-full border border-primary/20 px-4 py-2 font-vazir text-sm text-primary transition hover:bg-primary/10 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  بعدی
                </button>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                  <button
                    key={pageNumber}
                    onClick={() => goToPage(pageNumber)}
                    className={`cursor-pointer rounded-full px-3 py-2 text-sm font-vazir transition ${
                      currentPage === pageNumber ? "bg-primary text-primary-foreground shadow" : "bg-primary/5 text-primary hover:bg-primary/10"
                    }`}
                  >
                    {toPersianNumber(pageNumber)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticlesPage;
