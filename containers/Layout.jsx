import Footer from "./Footer";
import Header from "./Header";


export default function Layout({children}) {
  return (
    <>
      <Header/>
      <section className="layout">
        {children}
      </section>
      <Footer/>
    </>
  )
}
