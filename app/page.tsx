import Image from "next/image";
import Header from "./Component/Header/header";
import Main from "./Component/Header/Main";
import Footer from "./Component/Header/footer";

export default function Home() {
  return (
    <div className="body">
    <Header />
    <hr />
    <Main />
    <hr />
    <Footer/>
    </div>
    
  );
}
