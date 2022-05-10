import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
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
        <div className="mb-10 text-5xl">Our Source Code</div>
        <a className="mb-10 text-3xl text-cyan-600">
          <Link href="https://github.com/napatchee05/hand-vision-control">
            Version 1 Source Code on Github
          </Link>
        </a>
        <a className="mb-10 text-3xl text-cyan-600">
          <Link href="https://github.com/thunthup/hand-vision-control">
            Version 2 Source Code on Github
          </Link>
        </a>
        <a className="mb-10 text-3xl text-cyan-600">
          <Link href="https://github.com/supmine/handtracking-webpage">
            Webpage Source Code on Github
          </Link>
        </a>
      </main>
    </div>
  );
}
