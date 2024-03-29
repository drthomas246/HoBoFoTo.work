"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { createRef, RefObject, useEffect, useRef } from "react";

import DarkToggleButton from "@/components/DarkToggleButton";

import sam from "../../public/AdobeStock_199050913.jpeg";
import robson from "../../public/AdobeStock_202626040.jpeg";
import denis from "../../public/AdobeStock_304494142.jpeg";
import hatsukami from "../../public/AdobeStock_359658626.jpeg";
import hatsukami2 from "../../public/AdobeStock_374606998.jpeg";

const Home = () => {
  const router = useSearchParams();
  const Dot =
    "absolute bottom-2 left-1/2 before:content-null before:absolute before:block before:bottom-0 before:w-2 before:h-2 before:rounded-full before:bg-[#292929] before:dark:bg-gray-100 after:content-null after:absolute after:bottom-0 after:left-0.6 after:w-0.5 after:h-12 after:bg-[#292929] after:dark:bg-gray-100";
  let downDot = `${Dot} before:animate-down`;
  let upDot = `${Dot} before:animate-up`;
  let upDownDot = `${Dot} before:animate-upDown`;
  let curPageParam = false;
  let curPage = 0;
  if (router.get("curPage") !== null) {
    curPage = parseInt(router.get("curPage") as string, 10);
    curPageParam = true;
  }
  console.log(router.get("curPage"));
  const numOfPages = 5;
  const skwPage = useRef<RefObject<HTMLDivElement>[]>([]);
  [...Array(numOfPages)].forEach((_, number) => {
    skwPage.current[number] = createRef<HTMLDivElement>();
  });
  const animTime = 1000;
  let scrolling = false;
  let startY: number | null = null;
  let endY: number | null = null;
  const pagination = () => {
    scrolling = true;

    skwPage.current[curPage].current?.classList.remove("inactive");
    skwPage.current[curPage].current?.classList.add("active");
    if (curPage !== 0) {
      skwPage.current[curPage - 1].current?.classList.add("inactive");
    }
    if (curPage !== numOfPages - 1) {
      skwPage.current[curPage + 1].current?.classList.remove("active");
    }

    setTimeout(() => {
      scrolling = false;
    }, animTime);
  };
  const navigateUp = () => {
    if (curPage === 0) return;
    curPage--;
    pagination();
  };
  const navigateDown = () => {
    if (curPage === numOfPages - 1) return;
    curPage++;
    pagination();
  };
  const eventWheel = (e: WheelEvent) => {
    if (scrolling) return;
    if (e.deltaY < 0) {
      navigateUp();
    } else {
      navigateDown();
    }
  };
  const eventKeydown = (e: KeyboardEvent) => {
    if (scrolling) return;
    if (e.code === "ArrowUp") {
      navigateUp();
    } else if (e.code === "ArrowDown") {
      navigateDown();
    }
  };
  function logSwipeStart(event: TouchEvent) {
    event.preventDefault();

    startY = event.touches[0].pageY;
  }
  function logSwipe(event: TouchEvent) {
    event.preventDefault();
    endY = event.touches[0].pageY;
  }
  function logSwipeEnd(event: TouchEvent) {
    // event.preventDefault();
    if (endY !== null && startY !== null) {
      if (0 < endY - startY) {
        navigateUp();
      } else {
        navigateDown();
      }
      startY = null;
      endY = null;
    }
  }
  useEffect(() => {
    document.addEventListener("wheel", eventWheel);
    document.addEventListener("keydown", eventKeydown);
    document.addEventListener("touchstart", logSwipeStart);
    document.addEventListener("touchmove", logSwipe);
    document.addEventListener("touchend", logSwipeEnd);
    if (curPageParam) {
      pagination();
    }
    return () => {
      document.removeEventListener("wheel", eventWheel);
      document.removeEventListener("keydown", eventKeydown);
      document.removeEventListener("touchstart", logSwipeStart);
      document.removeEventListener("touchmove", logSwipe);
      document.removeEventListener("touchend", logSwipeEnd);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="relative h-screen overflow-hidden">
      <DarkToggleButton />
      <div
        className="skw-page active absolute left-0 top-0 w-full"
        ref={skwPage.current[0]}
      >
        <div className="skw-page__half skw-page__half--left absolute left-0 top-0 h-screen w-1/2">
          <div className="absolute left-[-80%] top-0 h-full w-[180%] skew-x-[-18deg] overflow-hidden bg-gray-100 dark:bg-[#292929] sm:left-[-40%] sm:w-[140%]">
            <div className="skw-page__content absolute left-0 top-0 flex size-full origin-top-left-1-0 skew-x-[18deg] flex-col flex-wrap items-center justify-center bg-gray-100 bg-cover px-[30%] py-0 text-[#292929] dark:bg-[#292929] dark:text-gray-100">
              <Image
                alt="bg"
                src={robson}
                style={{ objectFit: "cover" }}
                fill
                priority
              />
            </div>
          </div>
        </div>
        <div className="skw-page__half skw-page__half--right absolute left-1/2 top-0 h-screen w-1/2">
          <div className="absolute right-[-80%] top-0 h-full w-[180%] skew-x-[-18deg] overflow-hidden bg-gray-100 dark:bg-[#292929] sm:right-[-40%] sm:w-[140%]">
            <div className="skw-page__content absolute left-0 top-0 flex size-full origin-top-left-0-1 skew-x-[18deg] flex-col flex-wrap items-center justify-center bg-gray-100 bg-cover px-[30%] py-0 text-[#292929] dark:bg-[#292929] dark:text-gray-100">
              <h1 className="mb-4 text-center font-microgramma text-2xl">
                HoBoFoTo.work
              </h1>
              <h3 className="text-center font-ab text-lg">
                写真とブログとソフトウェアと
              </h3>
              <div className={downDot}>
                <span className="absolute bottom-1 left-4 font-ofelia text-sm tracking-wider">
                  Scroll
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="skw-page absolute left-0 top-0 w-full"
        ref={skwPage.current[1]}
      >
        <div className="skw-page__half skw-page__half--left absolute left-0 top-0 h-screen w-1/2">
          <div className="absolute left-[-80%] top-0 h-full w-[180%] skew-x-[-18deg] overflow-hidden bg-gray-100 dark:bg-[#292929] sm:left-[-40%] sm:w-[140%]">
            <div className="skw-page__content absolute left-0 top-0 flex size-full origin-top-left-1-0 skew-x-[18deg] flex-col flex-wrap items-center justify-center bg-gray-100 bg-cover px-[30%] py-0 text-[#292929] dark:bg-[#292929] dark:text-gray-100">
              <h2 className="mb-4 text-center font-microgramma text-2xl">
                Foto
              </h2>
              <h3 className="text-center font-ab text-lg">
                <Link
                  href="./foto"
                  className="border-b border-blue-600 text-blue-600 dark:border-blue-300 dark:text-blue-300"
                >
                  写真たち
                </Link>
              </h3>
              <div className={upDownDot}>
                <span className="absolute bottom-1 left-4 font-ofelia text-sm tracking-wider">
                  Scroll
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="skw-page__half skw-page__half--right absolute left-1/2 top-0 h-screen w-1/2">
          <div className="absolute right-[-80%] top-0 h-full w-[180%] skew-x-[-18deg] overflow-hidden bg-gray-100 dark:bg-[#292929] sm:right-[-40%] sm:w-[140%]">
            <div className="skw-page__content absolute left-0 top-0 flex size-full origin-top-left-0-1 skew-x-[18deg] flex-col flex-wrap items-center justify-center bg-gray-100 bg-cover px-[30%] py-0 text-[#292929] dark:bg-[#292929] dark:text-gray-100">
              <Image
                alt="bg"
                src={sam}
                style={{ objectFit: "cover" }}
                fill
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="skw-page absolute left-0 top-0 w-full"
        ref={skwPage.current[2]}
      >
        <div className="skw-page__half skw-page__half--left absolute left-0 top-0 h-screen w-1/2">
          <div className="absolute left-[-80%] top-0 h-full w-[180%] skew-x-[-18deg] overflow-hidden bg-gray-100 dark:bg-[#292929] sm:left-[-40%] sm:w-[140%]">
            <div className="skw-page__content absolute left-0 top-0 flex size-full origin-top-left-1-0 skew-x-[18deg] flex-col flex-wrap items-center justify-center bg-gray-100 bg-cover px-[30%]  py-0 text-[#292929] dark:bg-[#292929] dark:text-gray-100">
              <Image
                alt="bg"
                src={denis}
                style={{ objectFit: "cover" }}
                fill
                priority
              />
            </div>
          </div>
        </div>
        <div className="skw-page__half skw-page__half--right absolute left-1/2 top-0 h-screen w-1/2">
          <div className="absolute right-[-80%] top-0 h-full w-[180%] skew-x-[-18deg] overflow-hidden bg-gray-100 dark:bg-[#292929] sm:right-[-40%] sm:w-[140%]">
            <div className="skw-page__content absolute left-0 top-0 flex size-full origin-top-left-0-1 skew-x-[18deg] flex-col flex-wrap items-center justify-center bg-gray-100 bg-cover px-[30%] py-0 text-[#292929] dark:bg-[#292929] dark:text-gray-100">
              <h2 className="mb-4 text-center font-microgramma text-2xl">
                Blog
              </h2>
              <h3 className="text-center font-ab text-lg">
                <Link
                  href="./blog"
                  className="border-b border-blue-600 text-blue-600 dark:border-blue-300 dark:text-blue-300"
                >
                  ブログ
                </Link>
              </h3>
              <div className={upDownDot}>
                <span className="absolute bottom-1 left-4 font-ofelia text-sm tracking-wider">
                  Scroll
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="skw-page absolute left-0 top-0 w-full"
        ref={skwPage.current[3]}
      >
        <div className="skw-page__half skw-page__half--left absolute left-0 top-0 h-screen w-1/2">
          <div className="absolute left-[-80%] top-0 h-full w-[180%] skew-x-[-18deg] overflow-hidden bg-gray-100 dark:bg-[#292929] sm:left-[-40%] sm:w-[140%]">
            <div className="skw-page__content absolute left-0 top-0 flex size-full origin-top-left-1-0 skew-x-[18deg] flex-col flex-wrap items-center justify-center bg-gray-100 bg-cover px-[30%] py-0  text-[#292929] dark:bg-[#292929] dark:text-gray-100">
              <h2 className="mb-4 text-center font-microgramma text-2xl">
                Software
              </h2>

              <h3 className="text-center font-ab text-lg">
                <Link
                  href="./software"
                  className="border-b border-blue-600 text-blue-600 dark:border-blue-300 dark:text-blue-300"
                >
                  ソフトウエア
                </Link>
              </h3>
              <div className={upDownDot}>
                <span className="absolute bottom-1 left-4 font-ofelia text-sm tracking-wider">
                  Scroll
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="skw-page__half skw-page__half--right absolute left-1/2 top-0 h-screen w-1/2">
          <div className="absolute right-[-80%] top-0 h-full w-[180%] skew-x-[-18deg] overflow-hidden bg-gray-100 dark:bg-[#292929] sm:right-[-40%] sm:w-[140%]">
            <div className="skw-page__content absolute left-0 top-0 flex size-full origin-top-left-0-1 skew-x-[18deg] flex-col flex-wrap items-center justify-center bg-gray-100 bg-cover px-[30%] py-0 text-[#292929] dark:bg-[#292929] dark:text-gray-100">
              <Image
                alt="bg"
                src={hatsukami}
                style={{ objectFit: "cover" }}
                fill
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="skw-page absolute left-0 top-0 w-full"
        ref={skwPage.current[4]}
      >
        <div className="skw-page__half skw-page__half--left absolute left-0 top-0 h-screen w-1/2">
          <div className="absolute left-[-80%] top-0 h-full w-[180%] skew-x-[-18deg] overflow-hidden bg-gray-100 dark:bg-[#292929] sm:left-[-40%] sm:w-[140%]">
            <div className="skw-page__content absolute left-0 top-0 flex size-full origin-top-left-1-0 skew-x-[18deg] flex-col flex-wrap items-center justify-center bg-gray-100 bg-cover px-[30%] py-0  text-[#292929] dark:bg-[#292929] dark:text-gray-100">
              <Image
                alt="bg"
                src={hatsukami2}
                fill
                priority
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
        <div className="skw-page__half skw-page__half--right absolute left-1/2 top-0 h-screen w-1/2">
          <div className="absolute right-[-80%] top-0 h-full w-[180%] skew-x-[-18deg] overflow-hidden bg-gray-100 dark:bg-[#292929] sm:right-[-40%] sm:w-[140%]">
            <div className="skw-page__content absolute left-0 top-0 flex size-full origin-top-left-0-1 skew-x-[18deg] flex-col flex-wrap items-center justify-center bg-gray-100 bg-cover px-[30%] py-0  text-[#292929] dark:bg-[#292929] dark:text-gray-100">
              <h2 className="mb-4 text-center font-microgramma text-2xl">
                About
              </h2>
              <p className="text-center font-ab text-lg">
                山原喜寛
                <br />
                1979年生まれ
                <br />
                日曜プログラマー
                <br />
                <span className="text-sm">
                  使用可能言語 : React(TypeScript), Python, VBA
                </span>
              </p>
              <div className={upDot}>
                <span className="absolute bottom-1 left-4 font-ofelia text-sm tracking-wider">
                  Scroll
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
