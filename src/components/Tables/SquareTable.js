import React, { useEffect } from 'react';
import ModalCreate from '../ModalCreate';

function SquareTable(props) {
    const {reservationState, setReservationState, table, setModalX, setModalY} = props;
    const onDrop = (e) => {
        e.preventDefault();
        console.log(e);
    }

    const openModal = (e) => {
        props.openModal(e);   
    }

    return (
        <div className="SquareTable"
        draggable={true}
        onDrag={e => console.log(e)}
        onContextMenu={openModal}
        style={{
            left: props.table.X,
            top: props.table.Y,
            height: props.table.height,
            width: props.table.width
        }}>
            <ModalCreate />
        </div>
    )
}

export default SquareTable
