import React, { useState } from "react";
import AvailableStatistic from "./AvailableStatistic";
import StatisticIsNotAvailible from "./StatisticIsNotAvailable";

const StatisticsStart = () => {
  const [logged, setlogged] = useState(true);
  return (
    <div>
      {!logged ? (
        <>
          <StatisticIsNotAvailible />
        </>
      ) : (
        <>
          <AvailableStatistic />
        </>
      )}
    </div>
  );
};

export default StatisticsStart;
