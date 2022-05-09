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
      <main className="flex w-full flex-1 flex-col items-center justify-center px-10 text-center">
        <div className="mb-10 text-5xl">Meet The Team</div>
        <div className="flex w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <img
                className="rounded-3xl mb-2"
                src="https://scontent.fbkk12-2.fna.fbcdn.net/v/t1.6435-9/136741436_2789656357956376_2614371051396205242_n.jpg?_nc_cat=105&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=yaYqKdMNJvEAX-lQtEJ&_nc_oc=AQl65fyOacsChsoSuTyo6uDXR8rNXGHom8Ef8F8ANSQvlvgFbvKUQ2FPvczlcyLTzCM&_nc_ht=scontent.fbkk12-2.fna&oh=00_AT8UwGoe1KtNT5rQ_q7KWrUD5omuBC-nCuvpEkAklLVwUw&oe=629DCE77"
              ></img>
              <div className="text-2xl">Napat Cheetanom</div>
              <div className="text-xl">6231317521</div>
              <div>Contributed in AI Flow Process</div>
            </div>
            <div>
              <img
                className="rounded-3xl mb-2"
                src="https://scontent.fbkk12-4.fna.fbcdn.net/v/t39.30808-1/234139242_4286706641383283_3524840382679924267_n.jpg?stp=dst-jpg_p480x480&_nc_cat=110&ccb=1-6&_nc_sid=7206a8&_nc_ohc=pRlsaP1i8YUAX-vyGBn&_nc_ht=scontent.fbkk12-4.fna&oh=00_AT-veHXWnyrPxuWG7nXHAUI0gUuBoRhfQzmZYLXjBXjBmA&oe=627DEADA"
              ></img>
              <div className="text-2xl">Supanart Barnsongkit</div>
              <div className="text-xl">6230522621</div>
              <div>Contributed in Researching Process</div>
            </div>
            <div>
              <img
                className="rounded-3xl mb-2"
                src="https://scontent.fbkk13-2.fna.fbcdn.net/v/t1.6435-9/118407812_1610189792483160_7447130907652370590_n.jpg?_nc_cat=111&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=ydgmC6lmYZ0AX9h59Gx&tn=12A_27YiOshXlOVA&_nc_ht=scontent.fbkk13-2.fna&oh=00_AT_UCos0iUKB8hic7Sh05ueoeSczurHLZ1fGv27iDGSzag&oe=629F6072"
              ></img>
              <div className="text-2xl">Tanapol Hongfongfah</div>
              <div className="text-xl">6230221721</div>
              <div>Contributed in Interative Process</div>
            </div>
            <div>
              <img
                className="rounded-3xl mb-2"
                src="https://scontent.fbkk12-2.fna.fbcdn.net/v/t39.30808-6/245160715_5029821663699996_7540981110192779560_n.jpg?_nc_cat=105&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=IO_lCRzkT_QAX8EsnVx&_nc_ht=scontent.fbkk12-2.fna&oh=00_AT-rB36-xEpXWG9PwMcNzvYJGCo2JT2FVl_16HTupyBk3w&oe=627EAB07"
              ></img>
              <div className="text-2xl">Thunthup Kiratisehwe</div>
              <div className="text-xl">6230205721</div>
              <div>Contributed in AI Flow Process</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
