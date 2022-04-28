import React, { useEffect } from 'react';
import ModalCreate from '../ModalCreate';

function SquareTable(props) {
    const {reservationState, setReservationState, table, setModalX, setModalY} = props;
    const onDrop = (e) => {
        e.preventDefault();
        console.log(e);
    }

    useEffect(() => {
        console.log(props.table);
    }, [])

    const openModal = (e) => {
        props.openModal(e);   
    }

    return (
        <div className="SquareTable"
        draggable={true}
        onDrag={e => console.log(e)}
        onContextMenu={openModal}
        style={{
            left: +props.table.coord_x,
            top: +props.table.coord_y,
            height: props.table.height,
            width: props.table.width,
            backgroundColor: props.table.status==="occupied" ? 'red' : 'green'
        }}>
            <ModalCreate />
        </div>
    )
}

export default SquareTable
