import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/products";

export function useGetProducts() {
  const { data, isLoading, isStale, isRefetching } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    staleTime: 0,
  });

  return { data, isLoading, isStale, isRefetching };
}
