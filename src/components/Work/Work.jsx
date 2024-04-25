import React from 'react';
import './Work.css';
import { portfolio_work, assets } from '../../assets/assets';

const Work = () => {
  console.log(assets); 
  
  return (
    <div className="work">
      {portfolio_work.map((item, index) => {
        console.log(item.portfolio_image); 
        return (
          <div key={index} className="portfolio_item">
            {/* <img src={item.portfolio_image} alt={item.portfolio} /> */}
            <p>{item.portfolio.toUpperCase()}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Work;
