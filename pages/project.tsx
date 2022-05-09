import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Project - Computer Vision</title>
        <link rel="icon" href="/CODEL.ico" />
        <meta name="keywords" content="computer vision project" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div>
          <Image
            src="/images/projectStatement.jpg"
            width="1920"
            height="1080"
          />
          <Image src="/images/methodV1.jpg" width="1920" height="1080" />
          <Image src="/images/techChallengeV1.jpg" width="1920" height="1080" />
          <Image src="/images/fixImageJitter.jpg" width="1920" height="1080" />
          <Image src="/images/problemV1.jpg" width="1920" height="1080" />
          <Image src="/images/methodV2.jpg" width="1920" height="1080" />
          <Image src="/images/methodV2.2.jpg" width="1920" height="1080" />
          <Image src="/images/techChallengeV2.jpg" width="1920" height="1080" />
          <Image src="/images/Result.jpg" width="1920" height="1080" />
          <Image src="/images/futurePlan.jpg" width="1920" height="1080" />
        </div>
      </main>
    </div>
  );
}
