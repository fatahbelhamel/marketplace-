import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {name:"janvier", total:1200},
  {name:"février", total:2100},
  {name:"mars", total:800},
  {name:"avril", total:1600},
  {name:"mai", total:900},
  {name:"juane", total:1700},
];
   
function Chart(){
    return (
      <div class="chart">
           <div class="titl">Les 6 moins dernier (revunu)</div>
           <ResponsiveContainer width="100%" aspect={2 / 1}>
              <AreaChart width={730} height={250} data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="orange" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="orange" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="rgba(0,0,0,.4)"/>
                <CartesianGrid strokeDasharray="3 3" stroke="rgb(228,225,225)"/>
                <Tooltip />
                <Area type="monotone" dataKey="total" stroke="rgba(0,0,0,.2)" fillOpacity={1} fill="url(#total)" />
              </AreaChart>
          </ResponsiveContainer>
      </div>
    )
}

export default Chart;