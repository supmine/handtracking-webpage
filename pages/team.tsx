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
        <h1>Teem</h1>
        <div className="grid grid-cols-5 gap-4 p-5">
          <div>Supanart Barnsongkit</div>
          <div>Napat</div>
          <div>First</div>
          <div>Thun</div>
        </div>
      </main>
    </div>
  );
}
