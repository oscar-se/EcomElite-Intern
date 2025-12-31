
import { Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify";

function ModalComfirm(props) {
  const { show, handleClose, dataUserDelete, deleteUserById } = props;


  const handleDeleteUser = async () => {
    try {
        await deleteUserById(dataUserDelete.id);
        handleClose();
        toast.success("User deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete user.");
    }
  };
  return (
    <Modal 
    show={show} 
    onHide={handleClose}
    backdrop="static"
    keyboard={false}

    >
      <Modal.Header closeButton>
        <Modal.Title>Delete User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to delete this user?
        <br />
        <strong>{`email: ${dataUserDelete && dataUserDelete.email}`}</strong>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="danger" onClick={handleDeleteUser}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default ModalComfirm;
