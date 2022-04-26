
import './Reservation.css';
import React, { useEffect, useRef, useState } from 'react';
import SquareTable from '../components/Tables/SquareTable';
import ModalCreate from '../components/ModalCreate';

function Reservation() {
const [X, setX] = useState('0');
const [Y, setY] = useState('0');
const [modalX, setModalX] = useState(0);
const [modalY, setModalY] = useState(0);
const [squareTables, setSquareTables] = useState([]);
const [modalOpen, setModalOpen] = useState(false);

const openModal = (e) => {
  // console.log('OPEN MODAL');
  e.preventDefault();
 
    if (!modalOpen) {
      setModalOpen(!modalOpen);
    }
    setModalX(e.pageX + e.target.scrollLeft);
    setModalY(e.pageY + e.target.scrollTop);
}
useEffect(() => {
    setSquareTables([...squareTables, {id: 1, seats: 4, X: 10, Y: 10},{id: 2, seats: 4, X: 229, Y: 310} ]);
    for (let i = 0; i < X; i++) {
      let squareTable = [];
      for (let j = 0; j < Y; j++) {
        squareTable.push(<SquareTable key={i + '-' + j} x={i} y={j} />);
      }
      setSquareTables(squareTables => [...squareTables, squareTable]);
    }
  }, [])


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
              />
           
          </div>
        </div>
        <div className="Tools">
            <div>
                Requests
            </div>
        
        </div>
        <span>{squareTables.length}</span>
      </div>
  </div>
);
}

export default Reservation;