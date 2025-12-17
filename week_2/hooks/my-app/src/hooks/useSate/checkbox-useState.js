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

function CheckboxUseState() {
    const [selectedCar, setSelectedCar] = useState([]);

    const handleCarChecked = (id) => {
       setSelectedCar((prevSelectedCar) => {
        if (prevSelectedCar.includes(id)) {
            // Nếu đã chọn rồi, bỏ chọn
            return prevSelectedCar.filter((item) => item !== id);
        } else {
            // Nếu chưa chọn, thêm vào
            return [...prevSelectedCar, id];
        }   
    });
    }

    const handleCarChange = () => {
       console.log('Selected car:', selectedCar);
    }

    return (
        <div className="App" style={{padding: 20}}>
        {cars.map((car) => (
            <div key={car.id}>
                <input 
                    type="checkbox" 
                    id={car.id} 
                    name="car"
                    value={car.id}
                    checked={selectedCar.includes(car.id)}
                    onChange={() => handleCarChecked(car.id)}
                />
                <label htmlFor={car.id}>{car.name}</label>
            </div>
        ))}
        <button onClick={handleCarChange}>Chọn xe</button> 
        </div>
    );
}
export default CheckboxUseState;