"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { toPersianNumber } from "@/utils/ToPersionDigits";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  if (totalPages <= 1) return null;

  const goToPage = (target: number) => {
    const nextPage = Math.min(Math.max(target, 1), totalPages);
    const params = new URLSearchParams(searchParams.toString());

    if (nextPage === 1) {
      params.delete("page");
    } else {
      params.set("page", nextPage.toString());
    }

    const query = params.toString();
    const nextUrl = query ? `${pathname}?${query}` : pathname;

    router.push(nextUrl);

    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
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
  );
};

export default Pagination;
