"use client"

import React, { useState, useRef, RefObject, createRef } from "react";
import Link from "next/link";

import Return from "@/components/Return";

const Home = () => {
  const softwareCountNumber= 3
  const softwareTab  = useRef<RefObject<HTMLButtonElement>[]>([]);
  [...Array(softwareCountNumber)].forEach((_, number) => {
    softwareTab.current[number] = createRef<HTMLButtonElement>();
  });
  const data = [
    {
      name:"大阪周辺高校情報",
      application: "Web",
      license:"Business Source License 1.1 modification",
      distributed:"https://drthomas246.github.io/OsakaHightSchool/",
      about:"大阪の学校一覧です。近隣の都道府県も少しあります。"
    },
    {
      name:"Novel Editor",
      application: "Windows",
      license:"GPL-3.0 license",
      distributed:"https://github.com/drthomas246/novel_editor/releases",
      about:"小説家になろう用のエディタです。"
    },
    {
      name:"日課表作成システム",
      application: "Windows",
      license:"MIT license",
      distributed:"https://www.vector.co.jp/soft/winnt/business/se515819.html",
      about:"授業ごとの情報記録するソフトウェアです。"
    }
  ];
  const [tabNumber, setTabNumber]= useState(0);
  const changeTab = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.dataset.tab !== undefined) {
      setTabNumber(parseInt(e.currentTarget.dataset.tab, 10));
    }
    for(let i=0; i<softwareCountNumber; i+=1){
      softwareTab.current[i].current?.classList.remove("text-gray-100");
    }
    e.currentTarget.classList.add("text-gray-100");

  }
  return(
    <div className="mx-auto max-w-2xl my-5">
    <Return/>
    <h1 className="text-gray-100 text-5xl mt-2 mb-4 text-center font-microgramma">Software</h1>
    <div className="font-maruGo mt-8 text-gray-100 text-lg [&>p]:indent-4">
      <div className="text-sm font-medium text-center text-gray-400 border-b border-gray-100">
        <ul className="flex flex-wrap -mb-px">
          <li className="me-2">
            <button onClick={changeTab} ref={softwareTab.current[0]} data-tab={0} className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-200 hover:border-gray-200 text-gray-100">大阪周辺高校情報</button>
          </li>
          <li className="me-2">
            <button onClick={changeTab} ref={softwareTab.current[1]} data-tab={1} className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-200 hover:border-gray-200">Novel Editor</button>
          </li>
          <li className="me-2">
            <button onClick={changeTab} ref={softwareTab.current[2]} data-tab={2} className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-200 hover:border-gray-200">日課表作成システム</button>
          </li>
        </ul>
      </div>
      <div>
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-100">Full name</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-100 sm:col-span-2 sm:mt-0">{data[tabNumber].name}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-100">Application for</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-100 sm:col-span-2 sm:mt-0">{data[tabNumber].application}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-100">License</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-100 sm:col-span-2 sm:mt-0">{data[tabNumber].license}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-100">Distributed to</dt>
            <dd className="mt-1 text-sm leading-6 text-blue-300 sm:col-span-2 sm:mt-0">
              <Link href={data[tabNumber].distributed} rel="noopener noreferrer" target="_blank" className="border-b border-blue-300">
                {data[tabNumber].distributed}
              </Link>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-100">About</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-100 sm:col-span-2 sm:mt-0">{data[tabNumber].about}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
  )
}

export default Home;