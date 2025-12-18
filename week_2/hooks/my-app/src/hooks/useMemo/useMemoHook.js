import { useState, useMemo, useRef } from "react";

function UseMemoHook() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [products, setProducts] = useState([]);

    const nameRef = useRef();

    const handleAddProduct = () => {
        setProducts((prevProducts) => [
            ...prevProducts,
            { name, price: parseInt(price) }
        ]);
        setName('');
        setPrice('');
        nameRef.current.focus();
    }

    const total = useMemo(() => {
        console.log('Tính toán lại total');
        return products.reduce((acc, product) => acc + product.price, 0);
    }, [products]);

    return (
        <div>
            input Name: <input  type="text" 
                                ref={nameRef}
                                value={name} 
                                onChange={(e) => setName(e.target.value)} /> <br />
            input Price: <input type="number"
                                value={price} 
                                onChange={(e) => setPrice(Number(e.target.value))} /> <br />
            <hr />
            <button onClick={handleAddProduct}>Add</button>
            <p>Total: {total}</p>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>{product.name} - {product.price}</li>
                ))}
            </ul>
        </div>
    )
    
}

export default UseMemoHook;