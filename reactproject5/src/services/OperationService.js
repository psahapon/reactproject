import axios from 'axios'

const OPERATION_REST_API_URL = 'http://localhost:8080/api/operations';

class OperationService {
    getOperations() {
        return axios.get(OPERATION_REST_API_URL);
    }
}

export default OperationService;