
import React, { useState } from 'react';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';

//functional component implementation
// function App() {
//   const [count, setCount] = useState(10);
//   return(
//     <><h1>counter value = {count}</h1>
//     <ComponentA setCount={setCount} count={count} />
//     <ComponentB setCount={setCount} count={count} />
//     </>
//   )
// }


//class component implementation
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 10
    }
    this.handleCount = this.handleCount.bind(this);
  }

  handleCount(event){
    const id = event.target.id;
    switch(id) {
      case 'increment':
        this.setState({ count: this.state.count + 1 });
        break;
      case 'decrement':
        this.setState({ count: this.state.count - 1 });
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <><h1>counter value = {this.state.count}</h1>
      <ComponentA handleCount={this.handleCount} />
      <ComponentB handleCount={this.handleCount} />
      </>
    )
  }
}

export default App;