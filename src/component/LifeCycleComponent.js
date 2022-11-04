import React from "react"

export default class LifeCycleComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            msg: ''
        }
        this.componentWillUnmount=this.componentWillUnmount.bind(this);
    }
    timer() {
        this.setState({
            date: new Date(),
            msg: ''
        })
    }
    displayTime;
    // timer should start when the component mounted
    componentDidMount() {
        // this will call the timer function every second
        this.displayTime = setInterval(() => this.timer(), 1000)
        this.setState({
            msg: 'component mounted'
        })
        alert('component mounted');
    }

    componentWillUnmount() {
        // clear Interval will stop the timer when component will unmount
        clearInterval(this.displayTime);
        this.setState({
            msg: 'component unmounted | cleaned up'
        })
    }

    render() {
        return (
            <>
                <div className="container mt-3">
                    <button onClick={this.componentWillUnmount}>UnmountComponnet</button>
                    <p>{this.state.date.toLocaleTimeString()}</p>
                    <p>{this.state.msg}</p>
                </div>
            </>
        )
    }
}