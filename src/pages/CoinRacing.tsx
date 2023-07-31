import { useAtom } from "jotai";
import { coinListQuery } from "../store/upbitAtom";

export const CoinRacing: React.FC = () => {
  const [listAtom, listStatus] = coinListQuery;

  const [coinList] = useAtom(listAtom);
  const [coinListStatus] = useAtom(listStatus);

  console.log(coinList, coinListStatus.fetchStatus);

  return (
    <div>
      {/* {coinList.map((item, index) => (
        <div key={index}>{item.korean_name}</div>
      ))} */}
      <button className="btn">Click Me</button>
    </div>
  );
};
