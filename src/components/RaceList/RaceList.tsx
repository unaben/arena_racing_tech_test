import React, { FC } from "react";
import { Link } from "react-router-dom";
import { IRacingData } from "../model/localization";
import "./RaceList.css";

interface IRaceListProps {
  eventData: IRacingData[];
  setEventDetails: React.Dispatch<
    React.SetStateAction<IRacingData | undefined>
  >;
}

const RaceList: FC<IRaceListProps> = ({ setEventDetails, eventData }) => {
  return (
    <div className="main-container">
      <div className="wrapper">
        {eventData?.map((data) => (
          <div key={data.id} className="frame">
            <div className="image-wrapper">
              <img src={data.images.desktop} alt={data.title} />
              <div className="text-wrapper">
                <h2>{data.title}</h2>
                <p>{new Date(data.date).toDateString()}</p>
              </div>
            </div>
            <div className="main-btn-container">
              <button onClick={() => setEventDetails(data)}>
                <Link to={`/details/${data.id}`}>Details</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RaceList;
