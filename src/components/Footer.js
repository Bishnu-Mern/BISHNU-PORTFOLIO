import hr from '../assets/curve-hr.svg'
import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer(){
  const { t } = useTranslation();

  return (
    <div className="mt-4 bg-dark-200 rounded-md text-white px-8 py-4">
      <ul className="text-center">
        <li><a href="#home" className="hover:underline">{t("about")}</a></li>
        <li><a href="#skills" className="hover:underline">{t("skills")}</a></li>
        <li><a href="#project" className="hover:underline">{t("projects")}</a></li>
        <li><a href="#certs" className="hover:underline">{t("certifications")}</a></li>
      </ul>

      <img src={hr} className="mb-4 mt-4 w-full md:h-1 text-white bottom-0" alt="hr" />

      <p className="text-sm font-light text-center">{t('copyRightText')}</p>

    </div>
  )
}
