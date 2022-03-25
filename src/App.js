import React, { useState } from 'react';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';

function CounterState(value) {
  this.state = {
    value: value,
    increaseCount : function () {
      value++;
      console.log(value)
    },
    decreaseCount: function () {
      value--;
      console.log(value)
    },
    getValue: function () {
      return value;
    }
  }
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.counterState = new CounterState(10);
  }

  //Since im not changing anything in App's state. It wont re-render by itself when counter is changed.
  reRenderByForce = () => {
    this.forceUpdate();
  };

  render() {
    const { getValue, increaseCount, decreaseCount } = this.counterState.state;
    return (
      <><h1>counter value = {getValue()}</h1>
      <button onClick={this.reRenderByForce}>update value</button> 
      <ComponentA increaseCount={increaseCount} decreaseCount={decreaseCount} />
      <ComponentB  increaseCount={increaseCount} decreaseCount={decreaseCount} />
      </>
    )
  }
}

export default App;