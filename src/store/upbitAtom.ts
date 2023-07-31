import { atomsWithQuery } from "jotai-tanstack-query";
import { CoinListType } from "../types/storeTypes";

export const coinListQuery = atomsWithQuery<CoinListType[]>((get) => ({
  queryKey: ["coinList"],
  queryFn: async ({ queryKey: [, _] }) => {
    const res = await fetch(
      `https://api.upbit.com/v1/market/all?isDetails=false`
    );
    return res.json();
  },
}));
