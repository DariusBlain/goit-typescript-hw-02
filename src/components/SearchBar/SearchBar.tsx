import React from 'react';
import toast, { Toaster } from "react-hot-toast";
import { IoIosSearch } from "react-icons/io";
import s from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const notify = () => toast.error("Please enter search term!");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const form = e.currentTarget;
    const text = (form.elements.namedItem("text") as HTMLInputElement).value;
    if (text.trim() === "") {
      notify();
      return;
    }
    onSubmit(text);
    form.reset();
  };

  return (
    <>
      <header className={s.header}>
        <form onSubmit={handleSubmit} className={s.form}>
          <IoIosSearch size="18" className={s.icon} />
          <input
            name="text"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={s.input}
          />
          <Toaster />
          <button className={s.btn} type="submit">
            Search
          </button>
        </form>
      </header>
    </>
  );
};

export default SearchBar;