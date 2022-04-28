import './RequestTable.css'
import axios from 'axios';

function RequestTable (props){
    const onAccept = (status) => {
        axios.post('http://192.168.0.145:3000/api/reservation/update', {id : props.reservation.id, change: {status: status}}, {
            headers: {
              'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiQWxpYmVrIiwiaWF0IjoxNjUxMDc2MTU1fQ.gkbM_tP8alBPjuRYqYVCYVm1ppoZm7c-4dGSC8VvFZc'
            }})
    }
    return (
        <div className="RequestTable">
            Table {props.reservation.table_id}
            <div className='buttons'>
                <button onClick={() => onAccept("active")}>Accept</button>
                <button onClick={() => onAccept("rejected")}>Reject</button>
            </div>
        </div>)
}

export default RequestTable;