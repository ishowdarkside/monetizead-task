import styles from "./Pagination.module.scss";
interface PropTypes {
  totalPages: number;
  activePage: number;
  setPage: (val: number) => void;
}

export default function Pagination({
  totalPages,
  activePage,
  setPage,
}: PropTypes) {
  return (
    <div className={styles.paginationWrapper}>
      {Array.from({ length: totalPages }, (val, num) => {
        const innerText = num + 1;
        return (
          <button
            key={num}
            onClick={() => setPage(innerText)}
            className={`${styles.pageBtn} ${
              innerText === activePage ? styles.activebtn : ""
            }`}
          >
            {innerText}
          </button>
        );
      })}
    </div>
  );
}
