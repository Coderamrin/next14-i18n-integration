"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales } from "@/i18n";


const LangSwitcher = () => {
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className="flex gap-10 justify-center my-5">
      {locales.map((locale) => (
        <Link
          key={locale}
          href={redirectedPathName(locale)}
          className="capitalize hover:underline hover:text-blue-500 inline-block"
        >
          {locale}
        </Link>
      ))}
    </div>
  );
};

export default LangSwitcher;
