import { useGetProducts } from "../../hooks/useProducts";
import { useProtect } from "../../hooks/useProtect";
import { useCheckExpiredToken } from "../../hooks/useCheckExpiredToken";
import { groupAllProducts } from "../../utilities/helpers";
import Navbar from "../../ui/Navbar/Navbar";
import styles from "./Products.module.scss";
import ProductPanel from "./ProductPanel/ProductPanel";
import FilterPanel from "./FilterPanel/FilterPanel";
import { useProductContext } from "../../context/productContext";
import { Navigate } from "react-router-dom";
import { searchFilter } from "../../utilities/filter";
import Spinner from "../../ui/Spinner/Spinner";

export default function Products(): JSX.Element {
  useProtect();
  const { data: response, isLoading, isRefetching } = useGetProducts();
  useCheckExpiredToken(response, isLoading, isRefetching);
  const { search, filter, numResults } = useProductContext();
  if (isLoading || isRefetching) return <Spinner />;
  if (!isLoading && !isRefetching && !response)
    return <Navigate to="/auth/login" />;

  const productsGrouped = groupAllProducts(response.products, filter);

  //Search
  const searchResults = searchFilter(search, productsGrouped);

  return (
    <>
      <Navbar />
      <section className={styles.sectionBody}>
        <div className="container">
          <FilterPanel />
          {!searchResults && (
            <ProductPanel products={productsGrouped} numResults={numResults} />
          )}
          {searchResults && (
            <ProductPanel products={searchResults} numResults={numResults} />
          )}
          {searchResults && !searchResults.length && (
            <span>No results for now!</span>
          )}
        </div>
      </section>
    </>
  );
}
