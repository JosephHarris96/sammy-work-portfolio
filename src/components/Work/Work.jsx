import React, { useState } from 'react';
import './Work.css';
import { portfolio_work, assets } from '../../assets/assets';

const Work = () => {
  return (
    <div className="work">
      {portfolio_work.map((item, index) => {
        return (
          <div className="portfolio-image">
          <img src={item.portfolio_image} alt={item.portfolio} />
          <p>{item.portfolio.toUpperCase()}</p>
          </div>
        )
      })}
    </div>
  )
}

// const Work = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
  
//   return (
//     <div className="work">
//       {portfolio_work.map((item, index) => {
//         return (
//           <div
//             key={index}
//             className="portfolio_item"
//             onMouseEnter={() => setHoveredIndex(index)}
//             onMouseLeave={() => setHoveredIndex(null)}
//           >
//             <img
//               className={`portfolio_item_image ${hoveredIndex === index ? 'visible' : 'hidden'}`}
//               src={item.portfolio_image}
//               alt={item.portfolio}
//             />
//             <p>{item.portfolio.toUpperCase()}</p>
//             <hr />
//           </div>
//         );
//       })}
//     </div>
//   );
// };

export default Work;
