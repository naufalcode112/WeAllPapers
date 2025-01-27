import React from 'react'

interface WalpaperProps {
  image: string;
  title: string;
  author: string;
  rate: number;
  isPremium: bool;
}
const WalpaperList: React.FC<WalpaperList> = ({image, title, author, rate, isPremium}) => {
  return (
   <div>
      <img src={image} className="mx-auto rounded-t-lg" alt={title} height="800" width="250" />
      <h3 className="bg-indigo text-left text-indigo-600">{title}</h3>
      <h4 className="text-left text-gray-500">{author}</h4>
      <h4 className="text-left text-orange-500">
        <i className="fa fa-star"></i>
        {rate}
      </h4>
   </div>
  )
}
export default WalpaperList
