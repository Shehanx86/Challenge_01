import React from 'react';

class ComponentB extends React.Component {
    render() {
        return (
            <>
                <h3>Component - B</h3>
                <button onClick={this.props.increaseCount}>increment</button>
                <button onClick={this.props.decreaseCount}>decrement</button>
            </>
        )
    }
}

export default ComponentB;