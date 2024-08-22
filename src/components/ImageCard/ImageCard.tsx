import React from 'react';
import s from "./ImageCard.module.css";

interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  alt_description: string;
}

interface ImageCardProps {
  item: Image;
  handleClickImage: (item: Image) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ item, handleClickImage }) => {
  return (
    <div className={s.card}>
      <img
        onClick={() => handleClickImage(item)}
        src={item.urls.small}
        alt={item.alt_description}
        className={s.image}
      />
    </div>
  );
};

export default ImageCard;