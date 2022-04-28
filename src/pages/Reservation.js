import React, { useEffect, useState } from 'react';
import ModalCreate from '../components/ModalCreate';
import SquareTable from '../components/Tables/SquareTable';
import './Reservation.css';
import RequestTable from '../components/RequestTable';
import axios from 'axios';
function Reservation() {
const [X, setX] = useState('0');
const [Y, setY] = useState('0');
const [modalX, setModalX] = useState(0);
const [modalY, setModalY] = useState(0);
const [squareTables, setSquareTables] = useState([]);
const [modalOpen, setModalOpen] = useState(false);
const [tables, setTables] = useState([])
const [reservations, setReservations] = useState([])

useEffect(() => {
    axios.post('http://192.168.0.145:3000/api/restaurant/findExtended', {id : 2}, {
        headers: {
          'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiQWxpYmVrIiwiaWF0IjoxNjUxMDc2MTU1fQ.gkbM_tP8alBPjuRYqYVCYVm1ppoZm7c-4dGSC8VvFZc'
        }})
        .then(json => setSquareTables(json.data.tables))

  }, [])

  useEffect(() => {

    axios.get('http://192.168.0.145:3000/api/reservation/list',  {
        headers: {
          'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiQWxpYmVrIiwiaWF0IjoxNjUxMDc2MTU1fQ.gkbM_tP8alBPjuRYqYVCYVm1ppoZm7c-4dGSC8VvFZc'
        }}).then(json => setReservations(json.data))
    
  }, [])

const openModal = (e) => {
  // console.log('OPEN MODAL');
  e.preventDefault();
 
    if (!modalOpen) {
      setModalOpen(!modalOpen);
    }
    setModalX(e.pageX + e.target.scrollLeft);
    setModalY(e.pageY + e.target.scrollTop);
}

const logTable = (e) => {
    e.preventDefault();
    console.log(e.target.value);
}


return (
  <div className="App">
      <div className="Editor">
        <div className="Canvas">
          <div id="elements" className="ElementsContainer">
            {
              squareTables.map((table, index) => <SquareTable
              setModalX={setModalX}
              setModalY={setModalY}
              openModal={openModal}
              key={index}
              index={index}
              table={table}
              onClick={logTable}
              />)
            }
            <ModalCreate
              X={modalX}
              Y={modalY}
              open={modalOpen}
              setModalOpen={setModalOpen}
              onContextMenu={openModal}
              />
           
          </div>
        </div>
        <div className="Tools">
            <div>
                Requests
            </div>
            {
                reservations.filter((res) => res.status === 'pending').map((reservation, index) => <RequestTable
                key={index}
                index={index}
                reservation={reservation}
                />)
            }
        
        </div>
        <span>{squareTables.length}</span>
      </div>
  </div>
);
}

export default Reservation;