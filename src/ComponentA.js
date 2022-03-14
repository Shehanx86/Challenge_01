import React, { useState } from 'react';

//functional component implementation
// function ComponentA(props) {
//   return(
//       <>
//         <h3>Component - A</h3>
//         <button onClick={() => props.setCount(props.count + 1)}>increment</button>
//         <button onClick={() => props.setCount(props.count - 1)}>drecrement</button>
//       </>

//   )
// }

//class component implementation
class ComponentA extends React.Component {
    render() {
        return (
            <>
                <h3>Component - A</h3>
                <button id='increment' onClick={(e) => this.props.handleCount(e)}>increment</button>
                <button id='decrement' onClick={(e) => this.props.handleCount(e)}>decrement</button>
            </>
        )
    }
}

export default ComponentA;