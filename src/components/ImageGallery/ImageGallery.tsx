import React from 'react';
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  alt_description: string;
}

interface ImageGalleryProps {
  items: Image[];
  handleClickImage: (item: Image) => void;
  lastImageRef: React.RefObject<HTMLLIElement>;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ items, handleClickImage, lastImageRef }) => {
  return (
    <ul className={s.gallery}>
      {items.map((item, index) => {
        const isLastImage = index === items.length - 1;
        return (
          <li
            key={item.id}
            className={s.item}
            ref={isLastImage ? lastImageRef : null}
          >
            <ImageCard item={item} handleClickImage={handleClickImage} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;