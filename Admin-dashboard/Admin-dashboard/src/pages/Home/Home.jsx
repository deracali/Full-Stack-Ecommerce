import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/Sidebar/Sidebar";


export default function Home() {
    return (
        <>
            <Topbar />
            <div className='container'>
                <Sidebar />
                <div className="home">
                    <FeaturedInfo />
                    <Chart data={userData} title="user analytics" grid dataKey="Active User" />
                    <div className="homeWidgets">
                        <WidgetSm />
                        <WidgetLg />
                    </div>
                </div>
            </div>

        </>
    );
}
