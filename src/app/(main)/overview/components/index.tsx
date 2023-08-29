import DailyTraffic from "./DailyTraffic"
import LastSales from "./LatestSales"

const Dashboard = () => {
    return (
        <div className="grid grid-cols-1 xl:gap-x-5 gap-y-5 xl:grid-cols-4 w-full">
            <div className="col-span-3 border border-primary-light rounded-xl p-6">
                <div>
                    <span className="text-base font-medium text-white">
                        Overview
                    </span>
                </div>
                <DailyTraffic />
            </div>
            <LastSales />
        </div>
    )
}

export default Dashboard