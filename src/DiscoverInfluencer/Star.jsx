import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

// Import local images
import img1 from '../Assets/first.png';
import img2 from '../Assets/second.png';
import img3 from '../Assets/third.png';
import img4 from '../Assets/third.png';
import img5 from '../Assets/second.png';
import img6 from '../Assets/first.png';
import img7 from '../Assets/second.png';
import img8 from '../Assets/first.png';
import img9 from '../Assets/third.png';
import correct from '../Assets/correct.png';
import yt from '../Assets/yt.png';
import insta from '../Assets/instagram.png';
import snap from '../Assets/Snapchat.png';
import fb from '../Assets/Facebook.png';
import xlogo from '../Assets/X.png';
import crown from '../Assets/crown.png';

// Use the imported images
const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const socialMediaData = [
  [{ img: insta }, { img: xlogo }, { img: fb }, { img: snap }],
  [{ img: insta }, { img: xlogo }, { img: fb }],
  [{ img: insta }, { img: xlogo }, { img: yt }, { img: fb }],
  [{ img: insta }, { img: xlogo }, { img: yt }, { img: fb }],
  [{ img: insta }, { img: xlogo }, { img: fb }],
  [{ img: insta }, { img: xlogo }, { img: fb }, { img: snap }],
  [{ img: insta }, { img: xlogo }, { img: fb }],
  [{ img: insta }, { img: xlogo }, { img: fb }, { img: snap }],
  [{ img: insta }, { img: xlogo }, { img: yt }, { img: fb }],
];

const Data = [
  { name: 'Ashwini Singh' },
  { name: 'Gautam Sachdeva' },
  { name: 'Alok' },
  { name: 'Alok' },
  { name: 'Gautam Sachdeva' },
  { name: 'Ashwini Singh' },
  { name: 'Gautam Sachdeva' },
  { name: 'Ashwini Singh' },
  { name: 'Alok' },
];

const ImageComp = ({ gridColumns}) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };


  return (
    <div className="container w-full mx-auto p-4">
          
    <div className={`grid gap-4 ${gridColumns === 3 ? "grid-cols-3" : "grid-cols-4"}`}>
      {images.map((src, index) => (
        <div
          key={index}
          className="relative group"
          onClick={() => handleImageClick(index)}
        >
          {selectedImage === index && (
            <img
              src={crown}
              alt="crown"
              className="absolute top-[-20px] right-[-20px] w-[40px] h-[40px]  z-10"
            />
          )}
          <div className="relative w-full h-[160px] group object-cover">
            <img
              src={src}
              alt={`placeholder ${index}`}
              className={`w-full h-full ${selectedImage === index ? 'border-2 border-yellow-500' : ''} object-cover transition duration-500 ease-in-out group-hover:backdrop-blur`}
            />
            <div className="absolute inset-0 bg-black opacity-0 border-3 border-blue-500 group-hover:opacity-50 transition duration-500 ease-in-out"></div>
          </div>
          <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-200 ease-in-out">
           <Link to = {"/viewProfile"}>
           <button  style={{ background: "linear-gradient(90deg, #1E3BDD 0%, #1D9ED5 100%)" }} className="bg-blue-700 font-bold text-[12px] relative top-[-31px] text-white px-7 py-2 rounded-[6px]">
              View Profile
            </button>
           </Link>
          </div>
          <div className="flex items-center space-x-2 p-2 bg-white">
            <p className="text-sm font-semibold font-body">{Data[index]?.name}</p>
            <img src={correct} className="h-[12px] w-[12px]" />
          </div>
          <div className="flex justify-start space-x-2 p-2 bg-white">
            {socialMediaData[index]?.map((socialItem, idx) => (
              <img
                key={idx}
                src={socialItem.img}
                alt="social media"
                className="w-[20px] h-[20px]"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default ImageComp;
