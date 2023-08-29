import BarChart from "@/app/components/ui/barchart";

const DailyTraffic = () => {
    const barChartDataDailyTraffic = [
        {
            name: "Tráfego Diário",
            data: [20, 30, 40, 35, 70, 50, 30, 40, 75, 30, 20, 35, 40, 25, 45],
        },
    ];

    const barChartOptionsDailyTraffic = {
        chart: {
            toolbar: {
                show: false,
            },
        },
        tooltip: {
            style: {
                fontSize: "12px",
                fontFamily: undefined,
                backgroundColor: "#000000"
            },
            onDatasetHover: {
                style: {
                    fontSize: "12px",
                    fontFamily: undefined,
                },
            },
            theme: "dark",
        },
        xaxis: {
            categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"],
            show: false,
            labels: {
                show: true,
                style: {
                    colors: "#A3AED0",
                    fontSize: "14px",
                    fontWeight: "500",
                },
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            show: false,
            color: "black",
            labels: {
                show: true,
                style: {
                    colors: "#CBD5E0",
                    fontSize: "14px",
                },
            },
        },
        grid: {
            show: false,
            strokeDashArray: 5,
            yaxis: {
                lines: {
                    show: true,
                },
            },
            xaxis: {
                lines: {
                    show: false,
                },
            },
        },
        fill: {
            type: "gradient",
            gradient: {
                type: "vertical",
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                colorStops: [
                    [
                        {
                            offset: 0,
                            color: "#ADFA1D",
                            opacity: 1,
                        },
                        {
                            offset: 100,
                            color: "rgba(173, 250, 29, 1)",
                            opacity: 0.28,
                        },
                    ],
                ],
            },
        },
        dataLabels: {
            enabled: false,
        },
        plotOptions: {
            bar: {
                borderRadius: 7,
            },
        },
    };
    return (
        <div className="w-full h-full">
            <BarChart
                chartData={barChartDataDailyTraffic}
                chartOptions={barChartOptionsDailyTraffic}
            />
        </div>
    )
}

export default DailyTraffic