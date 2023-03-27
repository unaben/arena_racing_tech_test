import React, { FC } from "react";
import { Link } from "react-router-dom";
import { IRacingData } from "../model/localization";
import "./details.css";

type IDetailsProps = {
  eventDetails: IRacingData | undefined;
};

const Details: FC<IDetailsProps> = ({ eventDetails }) => {
  const date = eventDetails?.date!;
  return (
    <div className="detail-container">
      <div className="content">
        <div className="wrapper">
          <div className="image">
            <img src={eventDetails?.images.desktop} alt={eventDetails?.title} />
          </div>
          <div className="title">
            <h1>{eventDetails?.title}</h1>
            <p className="date">{new Date(date).toLocaleDateString()}</p>
            <p>{eventDetails?.description}</p>
          </div>
          <button>
            <Link to={"/"}>Back</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
