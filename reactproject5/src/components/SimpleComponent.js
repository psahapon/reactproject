import React from 'react';

class SimpleComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1 className="text-center">A Simple Component is here!!</h1>
            </div>
        )
    }
}


export default SimpleComponent;