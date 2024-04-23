import React from 'react';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

type Props = {
  postCount: number;
};

export default function GraphicPost({ postCount }: Props) {
  const series = [
    {
      name: 'POSTEOS',
      type: 'column',
      data: [postCount],
    },
  ];

  const options = {
    grid: {
      strokeDashArray: 6,
    },
    chart: {
      toolbar: {
        show: false,
      },
      stacked: true,
    },
    stroke: {
      width: [2],
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [2],
    },
    labels: ['POSTEOS'],
    xaxis: {
      labels: {
        show: true,
      },
    },
    colors: ['#DB8E6B'],
    markers: {
      size: 4,
      strokeWidth: 0,
    },
    plotOptions: {
      bar: {
        columnWidth: '30%',
      },
    },
  };

  return (
    <Chart
      options={{
        ...options,
        title: {
          text: 'CANTIDAD DE POSTEOS',
          align: 'center',
        },
      }}
      series={series}
      type="bar"
      height={300}
      width={500}
    />
  );
}
