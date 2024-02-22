import Sidebar from "../components/sidebar.js/Sidebar";
import "./Layout.css";
// import "apexcharts";
// import "apexcharts/dist/apexcharts.css";
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col w-full">
      <Sidebar />
      <hr style={{borderWidth:"2px"}} className="mb"></hr>
      <div id="layoutChild" className="flex justify-center">{children}</div>
    </div>
  );
};

export default Layout;
