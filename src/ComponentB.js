import React, { useState } from 'react';

//functional component implementation
// function ComponentB(props) {
//   return(
//       <>
//         <h3>Component - B</h3>
//         <button onClick={() => props.setCount(props.count + 1)}>increment</button>
//         <button onClick={() => props.setCount(props.count - 1)}>drecrement</button>
//       </>

//   )
// }

//class component implementation
class ComponentB extends React.Component {
    render() {
        return (
            <>
                <h3>Component - B</h3>
                <button id='increment' onClick={(e) => this.props.handleCount(e)}>increment</button>
                <button id='decrement' onClick={(e) => this.props.handleCount(e)}>decrement</button>
            </>
        )
    }
}

export default ComponentB;