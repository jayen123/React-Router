import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
