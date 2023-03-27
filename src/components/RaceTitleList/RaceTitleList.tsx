import { FC } from "react";
import { IRacingData } from "../model/localization";
import useFetch from "../hook/useFetch";
import "./RaceTitleList.css";

interface IRaceTitleListProps {
  enteredMonthNumber: string;
}

const RaceTitleList: FC<IRaceTitleListProps> = ({ enteredMonthNumber }) => {
  const { eventData } = useFetch(enteredMonthNumber);
  return (
    <div className="exhibition-list-container">
      <div className="title">
        <h2>Current Race Title</h2>
      </div>
      <div className="title-container">
        {eventData.map((data: IRacingData) => (
          <p key={data.id}>{data.title}</p>
        ))}
      </div>
    </div>
  );
};

export default RaceTitleList;
