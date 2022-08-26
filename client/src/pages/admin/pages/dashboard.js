import Sidbare from "./../components/sidbare.js";
import Header from "./../components/header.js";
import Widget from "./../components/widget.js";
import Feature from "./../components/feature.js";
import Chart from "./../components/chart.js";
import Table from "./../components/table.js";
   
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