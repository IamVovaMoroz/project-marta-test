// import Image from "next/image";
// import React from "react";

// -----------
// interface CardProps {
//   className?: string;
//   imgSrc: string;
//   imgAlt: string;
//   category?: string;
//   title?: string;
//   summary?: string;
//   href?: string;
//   btnLabel?: string;
// }

// const Card: React.FC<CardProps> = ({
//   className = "",
//   imgSrc,
//   imgAlt,
//   category,
//   title,
//   summary,
//   href,
//   btnLabel = "Read more",
// }) => (
//   <div className={`card ${className}`}>
//     <div className="card-wrapper">
//       <div className="inner-container">
//         <div className="image-container">
//           <Image src={imgSrc} alt={imgAlt} width={480} height={320} />
//         </div>
//         <div className="card-content">
//           {category && (
//             <div className="card-label" data-category={category}>
//               {category}
//             </div>
//           )}

//           {title && (
//             <div className="card-title">
//               <h3>{title}</h3>
//             </div>
//           )}

//           {summary && (
//             <div className="summary">
//               <p>{summary}</p>
//             </div>
//           )}

//           {href && (
//             <a href={href}>
//               <button>{btnLabel}</button>
//             </a>
//           )}
//         </div>
//       </div>
//     </div>
//   </div>
// );

// export default Card;
import Image from "next/image";
import React from "react";

interface BlogCardProps {
  className?: string;
  imgSrc: string;
  imgAlt: string;
  category?: string;
  title?: string;
  description?: string;
  date?: string;
  author?: string;
  slug?: string;
}

const Card: React.FC<BlogCardProps> = ({
  className = "",
  imgSrc,
  imgAlt,
  category,
  title,
  description,
  date,
  author,
  slug,
}) => (
  <div className={`card ${className}`}>
    <div className="card-wrapper">
      <div className="inner-container">
        <div className="image-container">
          <Image src={imgSrc} alt={imgAlt} width={480} height={320} priority />
        </div>
        <div className="card-content">
          {category && (
            <div className="card-label" data-category={category}>
              {category}
            </div>
          )}

          {title && (
            <div className="card-title">
              <h3>{title}</h3>
            </div>
          )}

          {description && (
            <div className="description">
              <p>{description}</p>
            </div>
          )}

          {date && (
            <div className="card-date">
              <p>{date}</p>
            </div>
          )}

          {author && (
            <div className="card-author">
              <p>{author}</p>
            </div>
          )}

          {slug && (
            <a href={`/${slug}`}>
              <button>Read more</button>
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default Card;
