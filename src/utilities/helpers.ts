import { ProductInterface } from "../types";

export function getBirthYear(date: Date) {
  const dateFormat = new Date(date);

  return +dateFormat.getFullYear();
}

export function isValidJWT(token: string) {
  const jwtRegex = /^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.[A-Za-z0-9-_.+/=]*$/;
  return jwtRegex.test(token);
}

export function groupAllProducts(products: ProductInterface[], filter: string) {
  const allProducts = Object.values(products);

  //"Izvaditi" sve linkedin producte i merge sa ostalim produktima
  const outputArray = allProducts.flatMap((item: ProductInterface) => {
    if (!item.linkedProducts) return [item];

    return [
      item,
      ...Object.values(item.linkedProducts).map((item) => ({
        name: item.name,
        price: item.price,
      })),
    ];
  });

  if (filter === "low-high") {
    return outputArray
      .filter((item, index, array) => !checkDuplicates(item, index, array))
      .sort((a, b) => a.price - b.price);
  }

  if (filter === "high-low") {
    console.log("EVE ME SAD OVDJE");
    return outputArray
      .filter((item, index, array) => !checkDuplicates(item, index, array))
      .sort((a, b) => b.price - a.price);
  }

  return outputArray.filter(
    (item, index, array) => !checkDuplicates(item, index, array)
  );
}

function checkDuplicates(
  item: ProductInterface,
  index: number,
  array: ProductInterface[]
) {
  const firstIndex = array.findIndex(
    (otherItem, otherIndex) =>
      otherIndex < index &&
      otherItem.name === item.name &&
      otherItem.price === item.price
  );
  return firstIndex !== -1;
}
