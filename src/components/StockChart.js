import React from 'react';
import {LineChart,CartesianGrid,XAxis,YAxis,Tooltip,Legend,Line} from 'recharts';

class StockChart extends React.Component{
   

    renderItem=()=>{
        const stock=[];
        this.props.data.map(item =>{
            stock.push({date:item[0],value:item[1]['4. close']})
            return null;
        })

        if(stock.length===0) return null;
       

return (
    <div className="ui segment">
    <label>{this.props.term}</label>
<LineChart width={800} height={500} data={stock}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
   <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="date" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="value" stroke="#8884d8" />
 </LineChart>
 </div>
)

   }
  
  render(){
      
      return (
          <div>
              <div>{this.renderItem()}</div>
        
          </div>
      )
       
        
    
}
}

export default StockChart;