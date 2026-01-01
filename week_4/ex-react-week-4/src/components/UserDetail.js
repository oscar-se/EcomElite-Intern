import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function UserDetail({ show, handleClose, user }) {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className="text-center w-100">User Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="user-detail text-center">
          {user ? (
            <>
              <img 
                src={user.avatar} 
                alt={`${user.first_name} ${user.last_name}`} 
                className="rounded-circle mb-3"
                style={{ width: '120px', height: '120px', objectFit: 'cover' }}
              />
              <h4>{user.first_name} {user.last_name}</h4>
              <p>{user.email}</p>
            </>
          ) : (
            <p>No user selected</p>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UserDetail;