import React from 'react';

class ComponentA extends React.Component {
    render() {
        return (
            <>
                <h3>Component - A</h3>
                <button id='increment' onClick={this.props.increaseCount}>increment</button>
                <button id='decrement' onClick={this.props.decreaseCount}>decrement</button>
            </>
        )
    }
}

export default ComponentA;