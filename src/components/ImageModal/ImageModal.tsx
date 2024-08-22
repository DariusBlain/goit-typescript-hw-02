import React from 'react';
import s from "./ImageModal.module.css";
import ReactModal from "react-modal";

interface User {
  name?: string;
}

interface ImageData {
  alt_description?: string;
  likes?: number;
  urls: {
    regular?: string;
  };
  user?: User;
}

interface ImageModalProps {
  onClose: () => void;
  isOpen: boolean;
  data: ImageData;
}

const ImageModal: React.FC<ImageModalProps> = ({ onClose, isOpen, data }) => {
  const { alt_description = "", likes = 0, urls, user } = data;

  return (
    <div className={s.wrapper}>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={onClose}
        className={s.content}
        overlayClassName={s.overlay}
        contentLabel="Image Modal"
      >
        <img src={urls?.regular} alt={alt_description} />
        <div className={s.descriptionWrapper}>
          <p className={s.description}>Author: {user?.name}</p>
          <p className={s.description}>Likes: {likes}</p>
          <p className={s.description}>
            Description: <span className={s.span}>{alt_description}</span>
          </p>
        </div>
      </ReactModal>
    </div>
  );
};

export default ImageModal;