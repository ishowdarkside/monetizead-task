import { ReactNode, createContext, useContext, useState } from "react";

interface ProductContextInterface {
  search: string;
  setSearch: (str: string) => void;
  filter: string;
  numResults: number;
  page: number;
  setPage: (value: number) => void;
  setFilter: (val: string) => void;
  setNumResults: (val: number) => void;
}

const context = createContext<ProductContextInterface | null>(null);

export default function ProductContext({ children }: { children: ReactNode }) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("low-high");
  const [numResults, setNumResults] = useState(10);

  return (
    <context.Provider
      value={{
        search,
        setSearch,
        page,
        setPage,
        filter,
        setNumResults,
        setFilter,
        numResults,
      }}
    >
      {children}
    </context.Provider>
  );
}

export const useProductContext = () => {
  const data = useContext(context);
  if (!data) throw new Error("YOU CAN'T USE PRODUCT CONTEXT HERE");
  return data;
};
