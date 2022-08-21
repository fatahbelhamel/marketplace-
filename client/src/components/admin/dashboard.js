import Sidbare from "./sidbare.js";
import Home from "./home.js";
import Header from "./header.js";
import Widget from "./widget.js";
import Feature from "./feature.js";
import Chart from "./chart.js";
import Table from "./table.js";
   
function Dashboard(){
    return (
        <div class="dashboard">
            <Sidbare />
            <div class="homeContainer">
                <Header />
                <div class="widgets">
                   <Widget type="clients"/>
                   <Widget type="vendeurs"/>
                   <Widget type="produits"/>
                   <Widget type="commandes"/>
                </div>
                <div class="charts">
                   <Feature />
                   <Chart />
                </div>
                <div class="listContainer">
                    <div class="listTitle">Les derniers commandes</div>
                    <Table/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;