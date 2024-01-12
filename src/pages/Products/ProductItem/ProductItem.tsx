import img from "../../../assets/image-2.jpg";
import { ProductInterface } from "../../../types";
import styles from "./ProductItem.module.scss";

export default function ProductItem({
  product,
}: {
  product: ProductInterface;
}) {
  return (
    <div className={styles.productItem}>
      <img src={img} alt="product image" />
      <span className={styles.productName}>{product.name}</span>
      <span className={styles.productPrice}>{product.price} BAM </span>
      <select className={styles.productSize}>
        <option value={36}>36</option>
        <option value={37}>37</option>
        <option value={38}>38</option>
        <option value={39}>39</option>
        <option value={40}>40</option>
        <option value={41}>41</option>
      </select>

      <button className={styles.productBtn}>Add to cart</button>
    </div>
  );
}
