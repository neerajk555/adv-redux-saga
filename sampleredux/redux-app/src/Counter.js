import React from 'react';
import {connect} from 'react-redux';
import { increment, decrement } from './actions';


const Counter =({ count, increment, decrement}) =>{
    return(
        <div>
            <h2>Counter application</h2>

            <p>Count Value: {count}</p>

            <button onClick={increment}>INCREMENT</button>

            <button onClick={decrement}>DECREMENT</button>
        </div>
    );
};

const mapStateToProps = state =>({
    count:state.count,
});

const mapDispatchToProps ={
    increment,
    decrement,
};


export default connect(mapStateToProps, mapDispatchToProps) (Counter);
