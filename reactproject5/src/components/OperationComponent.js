import React from 'react';
import OperationService from '../services/OperationService';


class OperationComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            operations:[]
        }
    }

    componentDidMount() {
        console.log('calling componentDidMount');
        
        var oprService = new OperationService();
        
        oprService.getOperations().then((response) => {
            this.setState({ operations: response.data })
        }) 
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Operation List</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Expression</td>
                            <td>Timestamp</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.operations.map(
                                oper =>
                                    <tr key={oper.id}>
                                        <td>{oper.id}</td>
                                        <td>{oper.expression}</td>
                                        <td>{oper.timestamp}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}


export default OperationComponent;

