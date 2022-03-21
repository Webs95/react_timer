import React from "react";
import './App.css';

class App extends React.Component {
    state = {
        count: 0,
        counting: false
    }

    componentDidMount() {
        const userCount = localStorage.getItem('timer');
        if(userCount) {
            this.setState({count: +userCount});
        }
    }

    componentDidUpdate() {
        localStorage.setItem('timer', this.state.count);
    }

    componentWillUnmount() {
        clearInterval(this.counterId);
    }

    timerStart = () => {
        this.setState({counting: true});

        this.counterId = setInterval(() => {
            this.setState({count: this.state.count + 1});
        } , 1000);
    };

    timerStop = () => {
        this.setState({counting: false});

        clearInterval(this.counterId);
    };

    timerReset = () => {
        this.setState({counting: false});

        clearInterval(this.counterId);

        this.setState({count: this.state.count * 0});
    }

    render() {
        return(
            <div className="App">
                <h1>React timer</h1>
                <span className="count">{this.state.count}</span>
                <div className="buttons">
                    {!this.state.counting ? (
                    <button onClick={this.timerStart}>Start</button>):(
                    <button onClick={this.timerStop}>Stop</button>
                    )}
                <button onClick={this.timerReset}>Reset</button>
                </div>
            </div>
        )
    }
}

export default App;