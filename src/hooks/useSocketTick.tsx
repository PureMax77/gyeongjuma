import { useEffect } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import encoding from "text-encoding";
import { useAtom } from "jotai";
import { coinListAtom, racingAtom } from "../store/upbitAtom";
import { RacingDataType, WS_ResType } from "../types/storeTypes";

export const useSocketTick = () => {
  const [coinList] = useAtom(coinListAtom);
  const [racingData, setRacingData] = useAtom(racingAtom);

  const socket = new W3CWebSocket("wss://api.upbit.com/websocket/v1");
  socket.binaryType = "arraybuffer";

  useEffect(() => {
    socket.onopen = () => {
      socket.send(
        JSON.stringify([
          { ticket: "downbit-clone" },
          { type: "ticker", codes: coinList.map((coin) => coin.market) },
        ])
      );
    };

    socket.onmessage = (evt: any) => {
      const enc = new encoding.TextDecoder("utf-8");
      const arr = new Uint8Array(evt.data);
      const data: WS_ResType = JSON.parse(enc.decode(arr));

      const newWSData: RacingDataType = {
        market: data.code,
        marketUnit: data.code.split("-")[0] as any,
        symbol: data.code.split("-")[1],
        trade_price: data.trade_price,
        signed_change_rate: data.signed_change_rate,
      };

      const newRacingData: RacingDataType[] = racingData.map((data) => {
        if (data.market === newWSData.market) return newWSData;
        else return data;
      });
      console.log(newWSData);
      setRacingData(newRacingData);
    };

    socket.onerror = (e) => {
      console.error(e);
    };

    return () => {
      socket.close();
    };
  }, []);

  return;
};
