import Card from "./Card";
const Shimmer = () => {
    return (
        <div className="body">
            <div>
                <p className="shimmer-title"></p>
            </div>
            <div className="filters">
                <button className= 'shimmer-btn'></button>
                <button className='shimmer-btn'></button>
            </div>
            <div className="card-container">
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
            </div>
            <div style={{height: '60vh', margin: '30px 10px 10px 10px', backgroundColor: '#e0e0e0'}}>
            </div>
        </div>
    )
}

export default Shimmer;