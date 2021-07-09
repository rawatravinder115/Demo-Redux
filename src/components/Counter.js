// import { Component } from 'react';
import {useSelector , useDispatch , connect} from 'react-redux';
import { counterActions } from '../store/counter';
import classes from './Counter.module.css';

// connect function is used to help class based component to redux.
const Counter = () => {

  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);  //to extract data , run by react redux for us  
  // && we dont need to subscribe like previous scenerio redux do it auto matically
  
  const show = useSelector((state) => state.counter.showCounter);          
  // const incrementHandler = () =>{
  //   dispatch({type:'increment'});
  // };
  // const decrementHandler= () =>{
  //   dispatch({type:'decrement'});
  // };

  // const increaseHandler = () =>{
  //   dispatch({type:'increase',amount: 10})
  // };

  // const toggleCounterHandler = () => {
  //   dispatch({type:'toggle'})
  // };

  const incrementHandler = () =>{
    dispatch(counterActions.increment());
  };
  const decrementHandler= () =>{
    dispatch(counterActions.decrement());
  };

  const increaseHandler = () =>{
    dispatch(counterActions.increase(10)); // {type: SOME_UNIQUE_IDENTIFIER , payload: 10}
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component{

// incrementHandler(){
//   this.props.increment();
// }

// decrementHandler(){
//   this.props.decrement();
// }

// toggleCounterHandler(){}

// render(){
//   return (
//     <main className={classes.counter}>
//     <h1>Redux Counter</h1>
//     <div className={classes.value}>{this.props.counter}</div>
//     <div>
//       <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//       <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//     </div>
//     <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//   </main>
//   );
// }
// }

// const mapStateToProps = state =>{
//   return {
//     counter: state.counter
//   };
// };

// const mapDispatchToProps= dispatch =>{
//   return {
//     increment: () =>dispatch({type: 'increment'}),
//     decrement: () => dispatch({type: 'decrement'}),
//   }
// };

// export default connect(mapStateToProps,mapDispatchToProps)(Counter); // connect need to 2 func to be passed in it.


// hooks are useable in class based Component;