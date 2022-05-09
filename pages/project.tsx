import Head from "next/head";
import Image from "next/image";
import projectStatement from "../public/images/projectStatement.svg";
import methodV1 from "../public/images/methodV1.svg";
import techChallengeV1 from "../public/images/techChallengeV1.svg";
import fixImageJitter from "../public/images/fixImageJitter.svg";
import problemV1 from "../public/images/problemV1.svg";
import methodV2 from "../public/images/methodV2.svg";
import methodV22 from "../public/images/methodV2.2.svg";
import techChallengeV2 from "../public/images/techChallengeV2.svg";
import result from "../public/images/result.svg";
import futurePlan from "../public/images/futurePlan.svg";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Project - Computer Vision</title>
        <link rel="icon" href="/CODEL.ico" />
        <meta name="keywords" content="computer vision project" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className="border-solid border-2 border-sky-500 ... mb-2 mt-2">
          <Image src={projectStatement} width="1920" height="1080" />
        </div>
        <div className="border-solid border-2 border-sky-500 ... mb-2">
          <Image src={methodV1} width="1920" height="1080" />
        </div>
        <div className="border-solid border-2 border-sky-500 ... mb-2">
          <Image src={techChallengeV1} width="1920" height="1080" />
        </div>
        <div className="border-solid border-2 border-sky-500 ... mb-2">
          <Image src={fixImageJitter} width="1920" height="1080" />
        </div>
        <div className="border-solid border-2 border-sky-500 ... mb-2">
          <Image src={problemV1} width="1920" height="1080" />
        </div>
        <div className="border-solid border-2 border-sky-500 ... mb-2">
          <Image src={methodV2} width="1920" height="1080" />
        </div>
        <div className="border-solid border-2 border-sky-500 ... mb-2">
          <Image src={methodV22} width="1920" height="1080" />
        </div>
        <div className="border-solid border-2 border-sky-500 ... mb-2">
          <Image src={techChallengeV2} width="1920" height="1080" />
        </div>
        <div className="border-solid border-2 border-sky-500 ... mb-2">
          <Image src={result} width="1920" height="1080" />
        </div>
        <div className="border-solid border-2 border-sky-500 ... mb-2">
          <Image src={futurePlan} width="1920" height="1080" />
        </div>
      </main>
    </div>
  );
}
