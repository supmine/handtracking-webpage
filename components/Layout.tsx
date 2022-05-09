import Navbar from "./Navbar";
import Footer from "./Footer";
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="font-kanit">{children}</div>
      <Footer />
    </>
  );
}
