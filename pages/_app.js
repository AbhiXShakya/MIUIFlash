import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div className="pclamp pt-2 lg:py-8 lg:px-40">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
