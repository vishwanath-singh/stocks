    import React from 'react';
    import StockDisplay from './StockDisplay';
    import StockChart from './StockChart';
    import alpha from '../api/alpha';

    class App extends React.Component{
        state ={result:[],term:''}

    onTermSubmit=async (term)=> {
        const response= await alpha.get('/query',
        {
            params:{
                function:'TIME_SERIES_DAILY',
                symbol:term,
                apikey:'D5US3YLNSKJFS7DM'
                
            }
        }
        )
        if(response===null) return <div>No Data</div>
        const data= response.data['Time Series (Daily)']
    let result=[];
    for(let i=0;i<22;i++) { result.push(Object.entries(data)[i]) }
    
    this.setState({result,term})
    
    }
        
        render(){
            return (
                <div>
    <StockDisplay onSubmit={this.onTermSubmit}/>
    <StockChart data={this.state.result} term={this.state.term} />

                </div>
            )
        }
    }

    export default App;