
import Footer from "../footer/footer";
import LeftSection from "../filterpage/leftside";
import RightSection from "../filterpage/rightside";
import Logo from "../../components/logo/logo";
import './style/filter.css';

const Filter = () => {
  return (
    <div className="filter-page">
      {/* Header Section */}
      <header className="header">
        <div className="header-content">
        <Logo />
        
        </div>
        <hr className="header-line" />
<div className="top">
        <div className="space-x-4 menu">
            <button className="text-sm font-medium text-gray-700 hover:text-black">Filter:</button>
            <button className="text-sm font-medium text-gray-700 hover:text-black"> Most Popular</button>
            <button className="text-sm font-medium text-red-500 border-b-2 border-red-500">Most Recent</button>
          </div>
          <h2 className="content">Featured Contents</h2>
          </div>
      </header>

      {/* Main Content Section */}
      <main className="main-content">
        {/* Left Section */}
        <LeftSection  />
        <hr className="vertical" />
        {/* Right Section */}
        <RightSection />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Filter;
