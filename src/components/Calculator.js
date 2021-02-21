import {Component} from 'react'

class Calculator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            initial: '',
            rate: '',
            goal: '',
            calculated: 0
        };

        this.handleInitialChange = this.handleInitialChange.bind(this)
        this.handleRateChange = this.handleRateChange.bind(this)
        this.handleGoalChange = this.handleGoalChange.bind(this)
        this.calculate = this.calculate.bind(this);
    };

    handleInitialChange = (e) => {
        const value = e.target.value;
        this.setState({ initial: value })
    }

    handleRateChange = (e) => {
        const value = e.target.value;
        this.setState({ rate: value })
    }

    handleGoalChange = (e) => {
        const value = e.target.value;
        this.setState({ goal: value })
    }

    calculate = () => {
        let count = 0;
        let initial = this.state.initial;
        let sum = initial;
        let rate = (this.state.rate/100);
        let trueRate = (rate+1)
        let goal = this.state.goal;

        while (sum < goal) {
            count ++; // 1
            sum = sum*trueRate; // 5500
        }
        
        this.setState({
            calculated: count
        })
    }

    render() {
        return(
            <>
                <h1>
                    Compound Interest Calculator
                </h1>
                <label>
                    Initial Investment
                </label><br/>
                $ <input onChange={ this.handleInitialChange } value={ this.state.initial }></input><br/><br/>
                <label>
                    Interest Rate
                </label><br/>
                % <input onChange={ this.handleRateChange } value={ this.state.rate }></input><br/><br/>
                <label>
                    Goal
                </label><br/>
                $ <input onChange={ this.handleGoalChange } value={ this.state.goal }></input><br/><br/>
                <button onClick={ this.calculate }>
                    Calculate
                </button>
                <h1>
                    Trades Necessary: { this.state.calculated === 0 ? "" : this.state.calculated }
                </h1>
            </>
        )
    }
}

export default Calculator;