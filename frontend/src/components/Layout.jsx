import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function Layout({
  children,
}) {
  return (
    <div className="dashboard-layout">

      <Sidebar />

      <div className="dashboard-content">

        <Navbar />

        {children}

      </div>

    </div>
  );
}

export default Layout;