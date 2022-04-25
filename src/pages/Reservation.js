
import './Reservation.css';
function Reservation() {
    let divs = [];
    for(let i = 0; i < 10; i++) {
        divs.push(i)
    }
    return (
        <div className="main">
            <div className="main__map">
                <div className="map">
                    {divs.map(i => <div className="map__table" key={i}>{i}</div>)}         
                </div>
            </div>
            <div className="main__panel">Booking panel</div>
        </div>
    );
}

export default Reservation;