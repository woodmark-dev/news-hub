import "../filterpage/filter.css";
import LeftSection from "./components/leftside";
import RightSection from "./components/rightside";
import Button from "../button/button";

const Filter = () => {
  return (
    <div className="filter-page">
      {/* Header Section */}
      <p className="hl"></p>
      <div className="filter">
        <header className="header">
          <div className="top">
            <div className="menu">
              <Button label="Filter" />
              <Button label="Most Popular" />
              <Button label="Most Recent" />
            </div>
            <h2 className="content">Featured Contents</h2>
          </div>
        </header>

        {/* Main Content Section */}
        <main className="main-content">
          {/* Left Section */}
          <LeftSection />
          <div className="vertical"> </div>

          {/* Right Section */}

          <RightSection />
        </main>
      </div>
    </div>
  );
};

export default Filter;
