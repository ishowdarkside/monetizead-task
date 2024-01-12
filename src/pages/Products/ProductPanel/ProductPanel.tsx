import { ProductInterface } from "../../../types";
import styles from "./ProductPanel.module.scss";
import ProductItem from "../ProductItem/ProductItem";
import { useProductContext } from "../../../context/productContext";
import Pagination from "../Pagination/Pagination";

interface PropTypes {
  products: ProductInterface[];
  numResults: number;
}

export default function ProductPanel({
  products,
  numResults,
}: PropTypes): JSX.Element {
  const { page, setPage } = useProductContext();
  const totalProducts = products.length;
  const totalPages = Math.ceil(totalProducts / numResults);
  const startIndex = (page - 1) * numResults;
  const endIndex = page * numResults;
  const paginatedProducts = products.slice(startIndex, endIndex);

  return (
    <>
      <div className={styles.gridPanel}>
        {paginatedProducts.map((product, index) => {
          return <ProductItem product={product} key={index} />;
        })}
      </div>
      <Pagination totalPages={totalPages} activePage={page} setPage={setPage} />
    </>
  );
}
