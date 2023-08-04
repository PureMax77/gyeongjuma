import { atomsWithQuery } from "jotai-tanstack-query";
import { CoinListType, RacingDataType } from "../types/storeTypes";
import { atom } from "jotai";

// 모든 코인 목록 fetch
export const [coinListAtom, coinListStatusAtom] = atomsWithQuery<
  CoinListType[]
>((get) => ({
  queryKey: ["coinList"],
  queryFn: async ({ queryKey: [, _] }) => {
    const res = await fetch(
      `https://api.upbit.com/v1/market/all?isDetails=true`
    );
    return res.json();
  },
}));

// 코인 ticker 정보
export const racingAtom = atom<RacingDataType[]>([]);

export const rankedRacingAtom = atom((get) =>
  get(racingAtom).sort((a, b) => b.signed_change_rate - a.signed_change_rate)
);
