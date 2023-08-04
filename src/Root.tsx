import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import {
  coinListAtom,
  coinListStatusAtom,
  racingAtom,
} from "./store/upbitAtom";
import { useAtom } from "jotai";
import { LoadingPage } from "./pages/LoadingPage";
import { useEffect } from "react";
import {
  API_TickerResType,
  CoinListType,
  RacingDataType,
} from "./types/storeTypes";

const Root = () => {
  const [coinList] = useAtom(coinListAtom);
  const [coinListStatus] = useAtom(coinListStatusAtom);

  const [racingData, setRacingData] = useAtom(racingAtom);

  const isLoading = !coinListStatus.isFetched || racingData.length === 0;

  // racing ticker 데이터 초기화
  const initTickerData = async (coinList: CoinListType[]) => {
    if (!coinList || racingData.length !== 0) return;
    console.log("init Ticker");
    let targetCoins: string = "";

    coinList.forEach((data: CoinListType, index) => {
      if (data.market.includes("KRW-")) {
        if (index === 0) {
          targetCoins = data.market;
        } else {
          targetCoins = targetCoins + ", " + data.market;
        }
      }
    });

    // 초기 데이터 로딩
    const res = await fetch(
      `https://api.upbit.com/v1/ticker?markets=${targetCoins}`
    );
    const initData: API_TickerResType[] = await res.json();

    // 초기 racing 데이터 세팅
    const newRacingData = initData.map((data, index) => {
      const newData: RacingDataType = {
        market: data.market,
        marketUnit: data.market.split("-")[0] as any,
        symbol: data.market.split("-")[1],
        trade_price: data.trade_price,
        signed_change_rate: data.signed_change_rate,
      };
      return newData;
    });

    setRacingData(newRacingData);
  };

  useEffect(() => {
    initTickerData(coinList);
  }, [coinList]);

  return (
    <div>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div>
          <Header />
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default Root;
