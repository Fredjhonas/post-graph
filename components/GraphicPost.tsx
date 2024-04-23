import React from 'react';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

type Props = {
  dataUsers: any;
};

export default function GraphicPost({ dataUsers }: Props) {
  const series = [
    {
      data: dataUsers.map((user: any) => user.posts),
    },
  ];
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        barHeight: '100%',
        distributed: true,
        horizontal: true,
        dataLabels: {
          position: 'bottom',
        },
      },
    },
    colors: [
      '#33b2df',
      '#546E7A',
      '#d4526e',
      '#13d8aa',
      '#A5978B',
      '#2b908f',
      '#f9a3a4',
      '#90ee7e',
      '#f48024',
      '#69d2e7',
    ],
    stroke: {
      width: 1,
      colors: ['#fff'],
    },
    xaxis: {
      categories: dataUsers.map((user: any) => user.username),
    },
    yaxis: {
      labels: {
        show: true,
      },
    },
    tooltip: {
      theme: 'dark',
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: function () {
            return '';
          },
        },
      },
    },
  };

  return (
    <Chart
      options={{
        ...options,
        title: {
          text: 'CANTIDAD DE POSTEOS POR USUARIO',
          align: 'center',
        },
        dataLabels: {
          enabled: true,
          textAnchor: 'start',
          style: {
            colors: ['#000'],
          },
          formatter: function (val) {
            return `${val}`;
          },
          offsetX: 0,
          dropShadow: {
            enabled: false,
          },
        },
      }}
      series={series}
      type="bar"
      height={380}
      width={'100%'}
    />
  );
}
