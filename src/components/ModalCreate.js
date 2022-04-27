import React, { useEffect, useState } from 'react';
import './ModalCreate.css'
function ModalCreate(props) {

    const [X, setX] = useState(props.X);
    const [Y, setY] = useState(props.Y);
    const [height, setHeight] = useState(props.height ? props.height : 100);
    const [width, setWidth] = useState(props.height ? props.height : 100);

    useEffect(() => {
        // console.log(props);
        setX(props.X);
        setY(props.Y)
    }, [props]);

    function close (){
        props.setModalOpen(false);
    }

    return (
        <div className="ModalCreate" style={{left: Number(X), top: Number(Y), display: props.open ? 'flex' : 'none'}}>
            <span>Table {props.tableId} <button onClick={close} className='close'>close</button></span>
            
            <section>
                Seats          {props.seats}
            </section>
            <span className='ModalCreate__buttons'>
                <button className='button1'>Free Table</button>
                <button className='button1'>Reserve</button>
            </span>
            <span className='ModalCreate__buttons'>
                <button className='button1'>Accept Reserve</button>
                <button className='button1'>Reject Reserve</button>
            </span>
        </div>
    )
}

export default ModalCreate
