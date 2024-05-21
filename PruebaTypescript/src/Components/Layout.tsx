import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";

export default function Layout() {
  return (
    <div className="flex flex-col w-screen h-screen px-1 md:px-10 lg:px-32 md:pt-3 overflow-x-hidden">
      <Header></Header>
      <div className="sticky top-0 z-10">
        <Nav></Nav>
      </div>
      <div className="p-2 z-0">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}
