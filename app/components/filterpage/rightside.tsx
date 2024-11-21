import './style/filter.css';

const news: {
  title: string;
  description: string;
  image: string;
  imgAlt: string;
  link: string;
}[] = [
{
    title: "Worship with us at FRM!",
    description: "Click the link below for more",
    image: "/filter-images/crowd.svg",
    imgAlt: "family",
    link: 'https://frm.co.ng/pgx.asp//',
    
  },
  {
    title: "2west EP- Rain Down",
    description: "Listen Now",
    image: "/filter-images/speaker.svg",
    imgAlt: "family",
    link: 'https://Applemusic.com/pgx.asp//',
    
  },
  {
    title: "Looking for a Reliable Bank?",
    description: "Bank with Us and Say Less, Click the link below",
    image: "/filter-images/loan.svg",
    imgAlt: "family",
    link: 'https://ohhbank.com/',
    
  },
 
];

const RightSection = () => {
  return (
    <div className="right-section">
     
      <div className="grid gap-6">
        {news.map((item, index) => (  // Correct usage of the news array
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden text-center"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover featured-image"
            />
            <div className="p-4 featured">
              <h3 className="text-xl font-semibold featured-heading ">{item.title}</h3>
              <p className="text-gray-600 featured-description ">{item.description}</p>
              <p className="text-gray-600 featured-link ">{item.link}</p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightSection;
