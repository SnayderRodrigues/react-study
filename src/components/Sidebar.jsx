import Social from "./Social";
import Information from "./Information";

const Sidebar = () => {
  return (
    <div id="sidebar">
      <p className="title">Professional Photographer</p>
      <Social />
      <Information />
      <a href="" target="_blank" className="button">
        Download Resume
      </a>
    </div>
  );
};

export default Sidebar;
