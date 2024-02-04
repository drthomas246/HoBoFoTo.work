"use client";

import "@theme-toggles/react/css/Within.css";

import { Within } from "@theme-toggles/react";
import { useTheme } from "next-themes";
import { SetStateAction, useEffect, useState } from "react";

const DarkToggleButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const changeToggle = (e: SetStateAction<boolean>) => {
    if (e) {
      console.log("light");
      setTheme("light");
    } else {
      console.log("dark");
      setTheme("dark");
    }
  };
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed right-10 top-5 z-50 rounded border bg-[#292929] px-2 pt-1 text-gray-100 dark:bg-gray-100 dark:text-[#292929]">
      <Within
        duration={750}
        placeholder=""
        className="[&>svg]:size-6"
        toggled={theme === "light" ? true : false}
        toggle={changeToggle}
      />
    </div>
  );
};

export default DarkToggleButton;
