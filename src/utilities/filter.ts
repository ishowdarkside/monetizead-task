import { ProductInterface } from "../types";

export function searchFilter(search: string, products: ProductInterface[]) {
  const regex = new RegExp(search, "i");
  const searchResults = products.filter((item: ProductInterface) =>
    regex.test(item.name)
  );

  return searchResults;
}
