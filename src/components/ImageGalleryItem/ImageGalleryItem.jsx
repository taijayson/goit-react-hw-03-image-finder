import PropTypes from "prop-types";
import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ id, src, largeImageUrl, alt, onClick }) => {
  return (
    <li className={styles.imageGalleryItem}>
      <img
        id={id}
        src={src}
        alt={alt}
        className={styles.imageGalleryItem_img}
        onClick={() => onClick(largeImageUrl)}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  largeImageUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
