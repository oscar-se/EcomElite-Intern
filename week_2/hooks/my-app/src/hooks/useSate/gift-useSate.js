import { useState } from "react";

// Đề bài quà tặng
// Tạo một mảng các phần tử đại diện cho các món quà khác nhau
// Viết một component React sử dụng hook useState để quản lý trạng thái món quà hiện tại
// Hiển thị tên món quà hiện tại trên giao diện
// Thêm một nút "Quay" để thay đổi món quà hiện tại thành một món quà ngẫu nhiên từ mảng
// Đảm bảo rằng món quà mới khác với món quà hiện tại

const gift = [
    'Laptop',
    'Smartphone',
    'Tablet',
    'Smartwatch',
    'Headphones'
]

function getRandomGift() {
    const randomIndex = Math.floor(Math.random() * gift.length);
    return gift[randomIndex];
}

function GiftUseSate() {
    const [giftName, setGiftName] = useState();

    const handleChangeGift = () => {
        let newGift;
        do {
            newGift = getRandomGift();
        } while (newGift === giftName); // Đảm bảo quà mới khác quà hiện tại    
        setGiftName(newGift);
    }

    return (
        <div className="App">
            <h1>{giftName || "Chưa có quà"}</h1>
            <button onClick={handleChangeGift}>Quay</button>
        </div>
    );
}

export default GiftUseSate;