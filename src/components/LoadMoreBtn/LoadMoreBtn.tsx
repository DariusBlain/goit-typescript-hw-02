import React from 'react'; 
import s from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  handleClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ handleClick }) => {
  return (
    <button
      className={s.loadMoreBtn}
      onClick={handleClick}
      type="button"
    >
      Load More
    </button>
  );
};

export default LoadMoreBtn;