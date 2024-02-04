import Link from "next/link";

import DarkToggleButton from "@/components/DarkToggleButton";
import Return from "@/components/Return";

const Home = () => {
  return (
    <div className="mx-auto my-5 max-w-4xl">
      <h2 className="mb-4 mt-2 text-center font-microgramma text-5xl">Blog</h2>
      <Return curPage="2" />
      <DarkToggleButton />
      <nav className="flex justify-center space-x-6 font-microgramma text-2xl">
        <span className="inline-flex items-center gap-x-2 whitespace-nowrap px-1 py-4 hover:text-blue-600 focus:outline-none disabled:opacity-50">
          <Link href="./">List</Link>
        </span>
        <span className="inline-flex items-center gap-x-2 whitespace-nowrap border-b-2 border-[#292929] px-1 py-4 focus:outline-none disabled:opacity-50 dark:border-gray-100">
          Category
        </span>
      </nav>
      <div className="container mt-5 flex h-96 items-center justify-center">
        <div className="overlay relative z-0 mx-auto my-0 max-h-full max-w-screen-md overflow-hidden p-12 text-center before:absolute before:left-0 before:top-0 before:z-[-1] before:size-full before:blur-lg before:content-['']">
          <ul className="sample1">
            <li>
              <Link href="./category/テクノロジー">テクノロジー</Link>
            </li>
            <li>
              <Link href="./category/更新情報">更新情報</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
