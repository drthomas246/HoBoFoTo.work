"use client"

import React, { useRef, createRef, RefObject, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import robson from "../../public/AdobeStock_202626040.jpeg";
import hatsukami from "../../public/AdobeStock_359658626.jpeg";
import hatsukami2 from "../../public/AdobeStock_374606998.jpeg";
import sam from "../../public/AdobeStock_199050913.jpeg";
import denis from "../../public/AdobeStock_304494142.jpeg";

const Home = () => {
  const Dot ="absolute bottom-2 left-1/2 before:content-null before:absolute before:block before:bottom-0 before:w-2 before:h-2 before:rounded-full before:bg-gray-100 after:content-null after:absolute after:bottom-0 after:left-0.6 after:w-0.5 after:h-12 after:bg-gray-100";
  let downDot = `${Dot} before:animate-down`;
  let upDot = `${Dot} before:animate-up`;
  let upDownDot = `${Dot} before:animate-upDown`;
  let curPage = 0;
  const numOfPages = 5;
  const skwPage  = useRef<RefObject<HTMLDivElement>[]>([]);
  [...Array(numOfPages)].forEach((_, number) => {
    skwPage.current[number] = createRef<HTMLDivElement>();
  });
  const animTime = 1000;
  let scrolling = false;
  const pagination = () => {
    scrolling = true;

    skwPage.current[curPage].current?.classList.remove("inactive")
    skwPage.current[curPage].current?.classList.add("active");
    if (curPage !== 0) {
      skwPage.current[curPage-1].current?.classList.add("inactive");
    }
    if (curPage !== numOfPages-1) {
      skwPage.current[curPage+1].current?.classList.remove("active");
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
    if (curPage === (numOfPages-1)) return;
    curPage++;
    pagination();
  };
  const eventWheel = (e: WheelEvent) => {
    if (scrolling) return;
    if (e.deltaY < 0) {
      navigateUp();
    } else {
      navigateDown();
    };
  };
  const eventKeydown = (e: KeyboardEvent) => {
    if (scrolling) return;
    if (e.code === "ArrowUp") {
      navigateUp();
    } else if (e.code === "ArrowDown") {
      navigateDown();
    };
  };
  useEffect(() => {
    document.addEventListener("wheel", eventWheel);
    document.addEventListener("keydown", eventKeydown);
    return () => {
      document.removeEventListener("wheel", eventWheel);
      document.removeEventListener("keydown", eventKeydown);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  return (
    <div className="overflow-hidden relative h-screen">
      <div className="skw-page absolute left-0 top-0 w-full active" ref={skwPage.current[0]}>
        <div className="skw-page__half skw-page__half--left absolute top-0 w-1/2 h-screen left-0">
          <div className="overflow-hidden absolute top-0 w-[140%] h-full left-[-40%] bg-black skew-x-[-18deg]">
            <div className="skw-page__content flex items-center justify-center flex-col flex-wrap absolute left-0 top-0 w-full h-full py-0 px-[30%] text-gray-100 bg-cover bg-[#292929] origin-top-left-1-0 skew-x-[18deg]">
              <Image alt="bg" src={robson} layout="fill" objectFit="cover" />
            </div>
          </div>
        </div>
        <div className="skw-page__half skw-page__half--right absolute top-0 w-1/2 h-screen left-1/2">
          <div className="overflow-hidden absolute top-0 w-[140%] h-full bg-black right-[-40%] skew-x-[-18deg]">
            <div className="skw-page__content flex items-center justify-center flex-col flex-wrap absolute left-0 top-0 w-full h-full py-0 px-[30%] text-gray-100 bg-cover bg-[#292929] origin-top-left-0-1 skew-x-[18deg]">
              <h2 className="mb-4 text-2xl text-center font-microgramma">HoBoFoTo.work</h2>
              <p className="text-lg text-center font-ab">写真とブログとソフトウェアと</p>
              <div className={downDot}>
                <span className="font-ofelia absolute left-4 bottom-1 text-sm tracking-wider writingVertical">
                  Scroll
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="skw-page absolute left-0 top-0 w-full" ref={skwPage.current[1]}>
        <div className="skw-page__half skw-page__half--left absolute top-0 w-1/2 h-screen left-0">
          <div className="overflow-hidden absolute top-0 w-[140%] h-full bg-black left-[-40%] skew-x-[-18deg]">
            <div className="skw-page__content flex items-center justify-center flex-col flex-wrap absolute left-0 top-0 w-full h-full py-0 px-[30%] text-gray-100 bg-cover bg-[#292929] origin-top-left-1-0 skew-x-[18deg]">
              <h2 className="mb-4 text-2xl text-center font-microgramma">Foto</h2>
              <p className="text-lg text-center font-ab">
                <Link href="./foto" className="text-blue-300 border-b border-blue-300">写真たち</Link>
              </p>
              <div className={upDownDot}>
                <span className="font-ofelia absolute left-4 bottom-1 text-sm tracking-wider writingVertical">
                  Scroll
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="skw-page__half skw-page__half--right absolute top-0 w-1/2 h-screen left-1/2">
          <div className="overflow-hidden absolute top-0 w-[140%] h-full bg-black right-[-40%] skew-x-[-18deg]">
            <div className="skw-page__content flex items-center justify-center flex-col flex-wrap absolute left-0 top-0 w-full h-full py-0 px-[30%] text-gray-100 bg-cover bg-[#292929] origin-top-left-0-1 skew-x-[18deg]">
            <Image alt="bg" src={sam} layout="fill" objectFit="cover" />
            </div>
          </div>
        </div>
      </div>
      <div className="skw-page absolute left-0 top-0 w-full" ref={skwPage.current[2]}>
        <div className="absolute top-0 w-1/2 h-screen skw-page__half left-0 skw-page__half--left">
          <div className="overflow-hidden absolute top-0 w-[140%] h-full bg-black left-[-40%] skew-x-[-18deg]">
            <div className="flex items-center justify-center flex-col flex-wrap absolute left-0 top-0 w-full h-full py-0 px-[30%] text-gray-100 bg-cover bg-[#292929]  origin-top-left-1-0 skew-x-[18deg] skw-page__content">
              <Image alt="bg" src={denis} layout="fill" objectFit="cover" />
            </div>
          </div>
        </div>
        <div className="skw-page__half skw-page__half--right absolute top-0 w-1/2 h-screen left-1/2">
          <div className="overflow-hidden absolute top-0 w-[140%] h-full bg-black right-[-40%] skew-x-[-18deg]">
            <div className="skw-page__content flex items-center justify-center flex-col flex-wrap absolute left-0 top-0 w-full h-full py-0 px-[30%] text-gray-100 bg-cover bg-[#292929] origin-top-left-0-1 skew-x-[18deg]">
              <h2 className="mb-4 text-2xl text-center font-microgramma">Blog</h2>
              <p className="text-lg text-center font-ab">
                <Link href="./blog" className="text-blue-300 border-b border-blue-300">ブログ</Link>
              </p>
              <div className={upDownDot}>
                <span className="font-ofelia absolute left-4 bottom-1 text-sm tracking-wider writingVertical">
                  Scroll
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="skw-page absolute left-0 top-0 w-full" ref={skwPage.current[3]}>
        <div className="skw-page__half skw-page__half--left absolute top-0 w-1/2 h-screen left-0">
          <div className="overflow-hidden absolute top-0 w-[140%] h-full bg-black left-[-40%] skew-x-[-18deg]">
            <div className="skw-page__content flex items-center justify-center flex-col flex-wrap absolute left-0 top-0 w-full h-full py-0 px-[30%] text-gray-100 bg-cover bg-[#292929]  origin-top-left-1-0 skew-x-[18deg]">
              <h2 className="mb-4 text-2xl text-center font-microgramma">Software</h2>
              
              <p className="text-lg text-center font-ab">
                <Link href="./software" className="text-blue-300 border-b border-blue-300">ソフトウエア</Link>
              </p>
              <div className={upDownDot}>
                <span className="font-ofelia absolute left-4 bottom-1 text-sm tracking-wider writingVertical">
                  Scroll
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="skw-page__half skw-page__half--right absolute top-0 w-1/2 h-screen left-1/2">
          <div className="overflow-hidden absolute top-0 w-[140%] h-full bg-black right-[-40%] skew-x-[-18deg]">
            <div className="skw-page__content flex items-center justify-center flex-col flex-wrap absolute left-0 top-0 w-full h-full py-0 px-[30%] text-gray-100 bg-cover bg-[#292929] origin-top-left-0-1 skew-x-[18deg]">
              <Image alt="bg" src={hatsukami} layout="fill" objectFit="cover" />
            </div>
          </div>
        </div>
      </div>
      <div className="skw-page absolute left-0 top-0 w-full" ref={skwPage.current[4]}>
        <div className="skw-page__half skw-page__half--left absolute top-0 w-1/2 h-screen left-0">
          <div className="overflow-hidden absolute top-0 w-[140%] h-full bg-black left-[-40%] skew-x-[-18deg]">
            <div className="skw-page__content flex items-center justify-center flex-col flex-wrap absolute left-0 top-0 w-full h-full py-0 px-[30%] text-gray-100 bg-cover bg-[#292929]  origin-top-left-1-0 skew-x-[18deg]">
              <Image alt="bg" src={hatsukami2} layout="fill" objectFit="cover" />
            </div>
          </div>
        </div>
        <div className="skw-page__half skw-page__half--right absolute top-0 w-1/2 h-screen left-1/2">
          <div className="overflow-hidden absolute top-0 w-[140%] h-full bg-black right-[-40%] skew-x-[-18deg]">
            <div className="skw-page__content flex items-center justify-center flex-col flex-wrap absolute left-0 top-0 w-full h-full py-0 px-[30%] text-gray-100 bg-cover bg-[#292929]  origin-top-left-0-1 skew-x-[18deg]">
              <h2 className="mb-4 text-2xl text-center font-microgramma">About</h2>
              <p className="text-lg text-center font-ab">
                山原喜寛<br/>
                1979年生まれ<br/>
                日曜プログラマー<br/>
                <span className="text-sm">使用可能言語 : React(TypeScript), Python, VBA</span>
              </p>
              <div className={upDot}>
                <span className="font-ofelia absolute left-4 bottom-1 text-sm tracking-wider writingVertical">
                  Scroll
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home