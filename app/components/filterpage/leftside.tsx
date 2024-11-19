import './style/filter.css';


const news : {
title:string;
description: string;
image: string;
imgAlt: string;
}[] = [

	{
    title: "Health News",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit . Curabitur vehicula ligula vitae ante tristique, at auctor felis eleifend.",
    image: "/filter-images/family.svg",
    imgAlt: "family",
    
  },
  {
    title: "Technology News",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit . Curabitur vehicula ligula vitae ante tristique, at auctor felis eleifend.",
    image: "/filter-images/music.svg",
    imgAlt: "music",
  },
  {
    title: "Education News",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit . Curabitur vehicula ligula vitae ante tristique, at auctor felis eleifend.",
    image: "/filter-images/learn.svg",
    imgAlt: "learn",
  },
  {
    title: "Economy News",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit . Curabitur vehicula ligula vitae ante tristique, at auctor felis eleifend.",
    image: "/filter-images/money.svg",
    imgAlt: "money",
  },
  {
    title: "Housing News",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit . Curabitur vehicula ligula vitae ante tristique, at auctor felis eleifend.",
    image: "/filter-images/home.svg",
    imgAlt: "home",
  },
];

const LeftSection = () => {
  return (
    <div className="left-section">
        
        
      {news.map((item, index) => (
        <div key={index} className="news-item">
          <img src={item.image} alt={item.title} className="news-image" />
          <h2 className="news-title">{item.title}</h2>
          <p className="news-description">{item.description}</p>
        </div>
      ))}


    </div>
  );
};

export default LeftSection;
