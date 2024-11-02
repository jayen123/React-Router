import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { MagnifyingGlass } from "react-loader-spinner";

export default function Home() {
  const navigation = useNavigation();
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <Navbar />
      {navigation.state === "loading" ? (
        <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="magnifying-glass-loading"
          wrapperStyle={{}}
          wrapperClass="magnifying-glass-wrapper"
          glassColor="#c0efff"
          color="#e15b64"
        />
      ) : (
        <Outlet />
      )}

      <Footer />
    </div>
  );
}
