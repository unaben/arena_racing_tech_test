import React, { useState, FC } from "react";
import RaceTitleList from "../RaceTitleList/RaceTitleList";
import "./selectComp.css";

type ISelectCompProps = {
  setEnteredMonthNumber: React.Dispatch<React.SetStateAction<string>>;
  enteredMonthNumber: string;
};

const SelectComp: FC<ISelectCompProps> = ({
  setEnteredMonthNumber,
  enteredMonthNumber,
}) => {
  const [selectedMonth, setSelectedMonth] = useState<string>("");
  const monthNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEnteredMonthNumber(selectedMonth);
    setSelectedMonth("");
  };

  return (
    <>
      <div className="form-container">
        <form onSubmit={handleFormSubmit}>
          <select
            name="month"
            id="month-select"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            <option value="">--Select month number--</option>
            {monthNumbers.map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          <button
            type="submit"
            disabled={!selectedMonth}
            className={`${!selectedMonth ? "disabled" : ""}`}
          >
            Enter
          </button>
        </form>
      </div>
      <RaceTitleList enteredMonthNumber={enteredMonthNumber} />
    </>
  );
};
export default SelectComp;
