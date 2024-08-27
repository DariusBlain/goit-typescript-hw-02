import { useEffect, useState, useRef, useCallback } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import fetchImagesWithSearch from "../../images-api";
import "./App.css";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import { UnsplashResponse } from "./App.types";


interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  alt_description: string;
}

function App() {
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [notFound, setNotFound] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<Image | null>(null);
  const lastImageRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (query === "") return;
      setIsLoading(true);
      setError(false);
      setNotFound(false);
      try {
        const data: UnsplashResponse = await fetchImagesWithSearch(query, page);
        if (data.results.length === 0) {
          setNotFound(true);
        } else {
          setImages((prev) => [...prev, ...data.results]);
          setTotal(data.total_pages);
        }
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query, page]);

  useEffect(() => {
    if (page > 1 && lastImageRef.current) {
      setTimeout(() => {
        const top = lastImageRef.current?.getBoundingClientRect().top ?? 0;
        window.scrollTo({ top: window.scrollY + top, behavior: "smooth" });
      }, 100);
    }
  }, [images, page]);

  const handleSetQuery = (query: string) => {
    setQuery(query);
    setImages([]);
    setPage(1);
  };

  const handleClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleClickImage = (data: Image) => {
    setModalImage(data);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalImage(null);
  };

  return (
    <>
      <SearchBar onSubmit={handleSetQuery} />
      {images.length > 0 && (
        <ImageGallery
          items={images}
          handleClickImage={handleClickImage}
          lastImageRef={lastImageRef}
        />
      )}
      {isLoading && <Loader />}
      {(error || notFound) && <ErrorMessage />}
      {total > page && !isLoading && !error && (
        <LoadMoreBtn handleClick={handleClick} />
      )}
      {modalImage && (<ImageModal onClose={closeModal} isOpen={isOpen} data={modalImage} />
      )}
    </>
  );
}

export default App;