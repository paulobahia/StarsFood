"use client"
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const BarChart = (props: any) => {
    const { chartOptions, chartData } = props;

    return (
        <Chart
            options={chartOptions}
            series={chartData}
            type="bar"
            width="100%"
            height="100%"
        />
    );
};

export default BarChart;