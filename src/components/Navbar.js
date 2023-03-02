import React, { useState, useEffect } from "react";
import logo from "../assets/NIP-logo.png";
import resume from "../assets/resume.pdf";
import DayNightToggle from "react-day-and-night-toggle";
import { useTranslation } from "react-i18next";

export default function Navbar(props) {
  const [currentLang, setCurrentLang] = useState("en");
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(currentLang);
  }, [currentLang,i18n]);

  const handleLangChange = (e) => {
    i18n.changeLanguage(e?.target?.value);
    setCurrentLang(e?.target?.value);
  };
  return (
    <div className="fixed z-50 bg-dark-500 w-full top-0 left-0 px-8 py-4 lg:px-20 xl:px-36">
      <div className="flex justify-between items-center text-white">
        <img src={logo} className="App-logo w-20 rounded-full" alt="logo" />
        <ul className="hidden md:flex">
          <li className="p-4">
            <a href="#home" className="hover:underline">
              {t("about")}
            </a>
          </li>
          <li className="p-4">
            <a href="#skills" className="hover:underline">
              {t("skills")}
            </a>
          </li>
          <li className="p-4">
            <a href="#project" className="hover:underline">
              {t("projects")}
            </a>
          </li>
          <li className="p-4">
            <a href="#certs" className="hover:underline">
              {t("certifications")}
            </a>
          </li>
        </ul>
        <div className="flex items-center  justify-between w-96">
          <a
            href={resume}
            rel="noreferrer"
            target="_blank"
            className=" bg-teal-500 rounded-full px-4 py-1 border border-teal-800 border border-4"
          >
            {t("resume")}
          </a>
          <select
            onChange={handleLangChange}
            className="bg-teal-500 px-4 py-1 border border-teal-800 border border-4 rounded-full"
            value={currentLang}
          >
            <option value="en" disabled={currentLang === "en"}>
              English
            </option>
            <option value="sp" disabled={currentLang === "sp"}>
              Spanish
            </option>
            <option value="ar" disabled={currentLang === "ar"}>
              Arabic
            </option>
            <option value="fr" disabled={currentLang === "fr"}>
              French
            </option>
          </select>
          <DayNightToggle
            onChange={() => props.setIsDarkMode(!props.isDarkMode)}
            checked={props.isDarkMode}
          />
        </div>
      </div>
    </div>
  );
}
