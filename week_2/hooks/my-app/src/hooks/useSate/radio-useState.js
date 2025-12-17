import { useState} from 'react';

const cars = [
    {
        id: 1,
        name: 'Toyota'
    },
    {
        id: 2,
        name: 'BMW'
    },
    {
        id: 3,
        name: 'Mercedes'
    }
]

function RadioUseState() {
    const [selectedCar, setSelectedCar] = useState(1);

    const handleCarChange = () => {
       console.log('Selected car:', selectedCar);
    }

    return (
        <div className="App" style={{padding: 20}}>
        {cars.map((car) => (
            <div key={car.id}>
                <input 
                    type="radio" 
                    id={car.id} 
                    name="car"
                    value={car.id}
                    checked={selectedCar === car.id}
                    onChange={(e) => setSelectedCar(Number(e.target.value))}
                />
                <label htmlFor={car.id}>{car.name}</label>
            </div>
        ))}
        <button onClick={handleCarChange}>Chọn xe</button> 
        </div>
    );
    
}
export default RadioUseState;