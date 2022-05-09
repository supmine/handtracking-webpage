import Head from "next/head";
import Image from "next/image";
import angryBird from "../public/images/angrybird.png";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Computer Vision</title>
        <link rel="icon" href="/CODEL.ico" />
        <meta name="keywords" content="computer vision project" />
      </Head>

      <main className="flex w-full flex-col items-center justify-center px-20 text-center">
        <h1 className="text-8xl py-20">Playing AngryBird using hand gesture</h1>
        <div className="object-contain w-full">
          <Image src={angryBird} alt="angry bird" layout="responsive" />
        </div>
      </main>
    </div>
  );
}
