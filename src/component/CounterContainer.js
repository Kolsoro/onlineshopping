// connect is used to connect to react-redux store & access the state meaintained for your application
import { Connect } from "react-redux";
import { increment, decrement, reset } from "../actions/Index";
import Counter from "./Counter";

const StateToProps = (state) => {
    return {
        counter: state
    }
}

const DispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
        reset: () => dispatch(reset()) 
    }
}

// connect is used to send these properties & actions to a component
// it will connect to redux store , it will store these properties , 
// and it will dispatch those properties on a specific action to this Counter component
export default connect(StateToProps,DispatchToProps)(Counter)
