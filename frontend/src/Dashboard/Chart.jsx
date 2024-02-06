import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = ({chartData}) => {
  

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={chartData.options} series={chartData.series} type="line" height={350} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;