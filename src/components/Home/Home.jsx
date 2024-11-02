import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Navbar />
      <h1>This is A Home Component</h1>
      <Outlet />
    </div>
  );
}
