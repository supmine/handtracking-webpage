import Head from "next/head";
import Image from "next/image";
import YoutubeVideo from "../components/YoutubeVideo";
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Demo - Computer Vision</title>
        <link rel="icon" href="/CODEL.ico" />
        <meta name="keywords" content="computer vision project" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-10 text-center">
        <div className="mb-10 text-5xl">Demo</div>
        <YoutubeVideo />
      </main>
    </div>
  );
}
