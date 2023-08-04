import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { useSocketTick } from "../hooks/useSocketTick";
import { rankedRacingAtom } from "../store/upbitAtom";
import BigNumber from "bignumber.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip
  // Legend
);

export const CoinRacing: React.FC = () => {
  const rankedRacingData = useAtomValue(rankedRacingAtom);
  const fiveRacingData = rankedRacingData.slice(0, 5);

  // 웹소켓 ticker 연결
  useSocketTick();

  // const [coinList] = useAtom(coinListAtom);
  // const [coinListStatus] = useAtom(coinListStatusAtom);

  const options = {
    responsive: true,
    scales: {
      y: {
        max: 14,
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const labels = fiveRacingData.map((data) => data.symbol);

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: fiveRacingData.map((data) =>
          BigNumber(data.signed_change_rate).multipliedBy(100).toFixed(2)
        ),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      // {
      //   label: "Dataset 2",
      //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      //   backgroundColor: "rgba(53, 162, 235, 0.5)",
      // },
    ],
  };

  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
};
