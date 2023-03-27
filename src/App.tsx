import { useState, FC } from "react";
import "./App.css";
import Details from "./components/details/Details";
import Header from "./components/header/Header";
import RaceList from "./components/RaceList/RaceList";
import SelectComp from "./components/selectComp/SelectComp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import useFetch from "./components/hook/useFetch";
import { IRacingData } from "./components/model/localization";

const App: FC = () => {
  const [enteredMonthNumber, setEnteredMonthNumber] = useState<string>("");
  const [eventDetails, setEventDetails] = useState<IRacingData | undefined>();
  const { eventData } = useFetch(enteredMonthNumber);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <RaceList eventData={eventData} setEventDetails={setEventDetails} />
      ),
    },
    {
      path: "/details/:id",
      element: <Details eventDetails={eventDetails} />,
    },
  ]);

  return (
    <div className="container">
      <header>
        <Header />
      </header>
      <div className="sub-container">
        <aside>
          <SelectComp
            setEnteredMonthNumber={setEnteredMonthNumber}
            enteredMonthNumber={enteredMonthNumber}
          />
        </aside>
        <main>
          <RouterProvider router={router} />
        </main>
      </div>
    </div>
  );
};

export default App;
