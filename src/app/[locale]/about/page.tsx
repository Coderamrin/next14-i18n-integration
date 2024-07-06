import React from "react";
import { getTranslations } from "next-intl/server";

const AboutPage = async () => {
  const t = await getTranslations("About");
  return (
    <div className="container text-center my-5 mx-auto">
      <h1 className="text-3xl font-bold">{t("title")}</h1>
    </div>
  );
};

export default AboutPage;
