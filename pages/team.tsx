import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Team - Computer Vision</title>
        <link rel="icon" href="/CODEL.ico" />
        <meta name="keywords" content="computer vision project" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1>Test h1 main</h1>
      </main>
    </div>
  );
}
