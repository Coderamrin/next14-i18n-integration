import LangSwitcher from "@/components/LangSwitcher";
import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("Index");

  return (
    <div className="container text-center my-5 mx-auto">
      <h1 className="text-3xl font-bold">{t("title")}</h1>
      
    </div>
  );
}
