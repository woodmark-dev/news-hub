
import "../searchpage/search.css";
import Button from "../button/button";

const SearchPage = () =>{
  return (
    <div className='container'>
      <header className="search-container">
      <input
        type="text"
        placeholder="Search"
        className="search-input"
      />
      <div className="search-button">
        🔍
      </div>
    </header>
      <p className="hl"></p>
      <main className='main'>
      <div className=''>
        <h2>Search Summary</h2>
        <section className='summary'>
          
        </section>
</div>

          <div className=''>
        <h2>Related Summary</h2>
        <section className='summary'>
          
        </section>
</div>
        
        <div className=''>
        <h2>Results Summary</h2>
        <section className='summary'>
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
