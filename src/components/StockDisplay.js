    import React from 'react';

    class StockDisplay extends React.Component {

        onButtonClick = (event) => {
    this.props.onSubmit(event.target.value)
        }

    render(){
        return (
            <div className="ui segment">
                <h3>Pick your Stock</h3>
    <button onClick= {this.onButtonClick} value="AAPL" className="ui primary button">Apple</button>
    <button onClick= {this.onButtonClick} value="MSFT" className="ui primary button">Microsoft</button>
    <button onClick= {this.onButtonClick} value="GOOGL" className="ui primary button">Google</button>
    <button onClick= {this.onButtonClick} value="FB" className="ui primary button">Facebook</button>
    </div>
        )
    }
    }

    export default StockDisplay;