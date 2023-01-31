import React, { useState } from "react";
import StatisticForTheAllTime from "./StatisticForTheAllTime";
import StatisticForTheDay from "./StatisticForTheDay";

type Category = "day" | "allTime";

const AvailableStatistic = () => {
  const [currentCategory, setcurrentCategory] = useState<Category>("day");

  return (
    <>
      <div>
        <div>
          <h5
            className="cursor-pointer"
            onClick={() => setcurrentCategory("day")}
          >
            For the day
          </h5>
          <h5
            className="cursor-pointer"
            onClick={() => setcurrentCategory("allTime")}
          >
            For all the time
          </h5>
        </div>
        <div>
          {currentCategory === "day" ? (
            <>
              <StatisticForTheDay />
            </>
          ) : (
            <>
              <StatisticForTheAllTime />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AvailableStatistic;
