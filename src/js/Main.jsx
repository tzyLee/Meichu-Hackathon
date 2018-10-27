import React from 'react';
import Gauges from './Gauges.jsx';

class Main extends React.Component {
    constructor(props) {
        super(props);   
    }

    render() {
        return (
        <div>
            <p>Test</p>
            <Gauges></Gauges>
        </div>);
    }
}

export default Main;