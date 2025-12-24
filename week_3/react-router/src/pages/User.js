import { useParams } from 'react-router-dom';

//Dynamic Route Component
//Su dung useParams de lay tham so dong id tu URL
//Hien thi thong tin nguoi dung dua tren id
function User() {
    const { id } = useParams();
  return (
    <div>
      <h1>User Page</h1>
      <p>This is the user page.</p>
      <h1>User ID: {id}</h1>
    </div>
  );
}
export default User;