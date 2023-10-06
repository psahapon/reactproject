import './App.css';
import OperationComponent from './components/OperationComponent';
import React, { useRef } from 'react';
import axios from 'axios'


// localhost:8080/api/calculate?operator=%2F&operand1=8.82&operand2=123.4
const CALC_REST_API_URL = 'http://localhost:8080/api/calculate?';


function App() {

    const opr1Ref = useRef();
    const opr2Ref = useRef();
    const operatorRef = useRef();

    function handleCalculate(e) {
        var operand1 = encodeURIComponent(opr1Ref.current.value);
        var operand2 = encodeURIComponent(opr2Ref.current.value);
        var operator = encodeURIComponent(operatorRef.current.value);

        var requestUri = CALC_REST_API_URL + 'operator=' + operator + '&operand1=' + operand1 + '&operand2=' + operand2;
        console.log('uri: ' + requestUri);
        var resp = axios.get(requestUri)
            .then((response) => {
                console.log('result:' + response.data.result);
            });
        console.log('resp:' + resp);
        console.log('resp.data:' + resp.data);
        console.log('resp.result:' + resp.result);

    }

  return (
      <div className="App">

          <table className="Table">
            <tr>
                <td className>
                    <label for="operand1">Calculator:</label>
                </td>
                <td>
                    <input type="text" ref={opr1Ref} name="operand1" size="10" /> 
                </td>
                <td>
                    <select name="operator" ref={operatorRef}>
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="*">*</option>
                        <option value="/">/</option>
                    </select>
                </td>
                <td>
                    <input type="text" ref={opr2Ref} name="operand2" size="10" /> 
                </td>
                <td>
                    <button type="button" onClick={handleCalculate}>Calculate</button>
                </td>
            </tr>
        </table>
              
              <OperationComponent />
              

          
    </div>
  );
}

export default App;
