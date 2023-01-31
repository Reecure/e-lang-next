import Layout from "@/components/common/Layout/Layout";
import StatisticsStart from "@/components/common/Statistics/StatisticsStart";
import Container from "@/components/ui/Container/Container";
import React from "react";

const Statistics = () => {
  return (
    <Container>
      <StatisticsStart />
    </Container>
  );
};

export default Statistics;

Statistics.Layout = Layout;
