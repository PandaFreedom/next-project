
// import { log } from "console";
import Image from "next/image";

export default function Home() {
  // console.log('This is Home Page');
  if (typeof window !== 'undefined') {
    console.log('This is Home Page');
  }
  return (
    <>
      <div className="flex justify-center items-center  flex-col">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <h1 className="border-inherit  border-2 w-full mt-5 border-purple-500 text-center text-purple-500">Hallo NextJs</h1>
      </div>
    </>
  );
}
