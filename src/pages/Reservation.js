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

useEffect(() => {
    axios.post('http://localhost:3000/api/restaurant/findExtended', {id : 3}, {
        headers: {
          'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiTmF2YXQiLCJpYXQiOjE2NTA3MDg0OTl9.bLO8BK-1dBlQ7U2nSlnXKqhx8fCQ7dwgH8WQDe0-mWI'
        }})
        .then(json => setSquareTables(json.data.tables))
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
              />)
            }
            <ModalCreate
              X={modalX}
              Y={modalY}
              open={modalOpen}
              setModalOpen={setModalOpen}
              onContextMenu={openModal}
              onClick={logTable}
              />
           
          </div>
        </div>
        <div className="Tools">
            <div>
                Requests
            </div>
            <RequestTable/>
        
        </div>
        <span>{squareTables.length}</span>
      </div>
  </div>
);
}

export default Reservation;