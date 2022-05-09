import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Project - Computer Vision</title>
        <link rel="icon" href="/CODEL.ico" />
        <meta name="keywords" content="computer vision project" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div class="border-solid border-2 border-sky-500 ... mb-2">
          <Image
            src="/images/projectStatement.svg"
            width="1920"
            height="1080"
          />
        </div>
        <div class="border-solid border-2 border-sky-500 ... mb-2">
          <Image src="/images/methodV1.svg" width="1920" height="1080" />
        </div>
        <div class="border-solid border-2 border-sky-500 ... mb-2">
          <Image src="/images/techChallengeV1.svg" width="1920" height="1080" />
        </div>
        <div class="border-solid border-2 border-sky-500 ... mb-2">
          <Image src="/images/fixImageJitter.svg" width="1920" height="1080" />
        </div>
        <div class="border-solid border-2 border-sky-500 ... mb-2">
          <Image src="/images/problemV1.svg" width="1920" height="1080" />
        </div>
        <div class="border-solid border-2 border-sky-500 ... mb-2">
          <Image src="/images/methodV2.svg" width="1920" height="1080" />
        </div>
        <div class="border-solid border-2 border-sky-500 ... mb-2">
          <Image src="/images/methodV2.2.svg" width="1920" height="1080" />
        </div>
        <div class="border-solid border-2 border-sky-500 ... mb-2">
          <Image src="/images/techChallengeV2.svg" width="1920" height="1080" />
        </div>
        <div class="border-solid border-2 border-sky-500 ... mb-2">
          <Image src="/images/result.svg" width="1920" height="1080" />
        </div>
        <div class="border-solid border-2 border-sky-500 ... mb-2">
          <Image src="/images/futurePlan.svg" width="1920" height="1080" />
        </div>
      </main>
    </div>
  );
}
