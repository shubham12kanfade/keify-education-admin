import "./Sidebar.css";
import ClearIcon from "@material-ui/icons/Clear";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">

      <div className="sidebar__title">
        <div className="sidebar__img">
          {/* <img src={logo} alt="logo" /> */}
          <h1>Keify Education</h1>

          <i id="sidebarIcon" onClick={() => closeSidebar()}>
            <ClearIcon />
          </i>
        </div>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <a href="#">Dashboard</a>
        </div>

        <div className="sidebar__link">
          <a href="#">Login</a>
        </div>

        <div className="sidebar__link">
          <a href="#">Users Management</a>
        </div>
        
        <div className="sidebar__link">
          <a href="#">Video Management</a>
        </div>

        <div className="sidebar__link">
          <a href="#">Videos</a>
        </div>

      </div>
    </div>
  );
};
export default Sidebar;
