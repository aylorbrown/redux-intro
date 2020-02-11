// console.log('it is working!');

// The bank - state

// {
//     amount: 100
// }

// {
//     amount: 101
// }

// A transaction slip - action 

// {
//     type: 'INCREMENT'
// }

// {
//     type: 'DECREMENT'
// }

// {
//     type: '😎'
// }

import {
    createStore
} from 'redux';

// The teller  - reducer function
function counter(state={ amount: 100 }, action) {
    // make a copy of state 
    const newState = { ...state };
    // modify that copy 
    if (action.type === 'INCREMENT') {
        newState.amount = state.amount + 1;
    } else if (action.type === 'DECREMENT') {
        newState.amount = state.amount -1;
    } else {
        // ... no need to do anything 
        // we already made a copy of state to return, 
        // just not changing it 
    }
    // return new version of state 
    return newState;
}

// You give it a reducer, it gives you a "store"
// The store is an object that manages your state using you reducer 
const store = createStore(counter); 

// Push notifications - subscribe to changes in the store
store.subscribe(() => {
    console.log(`The state is now:`);
    console.table(store.getState());
}); 


// Let's give the store some actions to process 
store.dispatch({
    type: '😜'
});




// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
