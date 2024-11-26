
import "../searchpage/search.css";
import Button from "../button/button";

const news : {
  title:string;
  description: string;
  image: string;
  imgAlt: string;
  }[] = [
  
    {
      title: "Health News",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit . Curabitur vehicula ligula vitae ante tristique, at auctor felis eleifend.",
      image: "/search-image/search.svg",
      imgAlt: "family",
      
    }
  ]

const SearchPage = () =>{
  return (
    <div className='container'>
      <header className="search-container">
      <input
        type="text"
        placeholder="Search"
        className="search-input"
      />

{news.map((item, index) => (
      <div key={index}className="search-button">
      <img src={item.image} alt={item.title} className="news-image" />
      </div>
       ))}
    </header>
      <p className="hl"></p>
      <main className="main">
  <div className="flex-sections">
    <div className="flex-item">
      <h2>Search Summary</h2>
      <section className="summary"></section>
    </div>
    <div className="flex-item">
      <h2>Related Summary</h2>
      <section className="summary"></section>
    </div>
  </div>
  <div className="centered-section">
    <h2>Results Summary</h2>
    <section className="summary" id="result">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.
      </p>
    </section>
  </div>
</main>

     
      <Button  label="SUBSCRIBE TO OUR NEWSLETTER"/>
      
    </div>
  );
};

export default SearchPage;
