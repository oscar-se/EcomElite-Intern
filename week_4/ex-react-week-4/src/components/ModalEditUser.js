import { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";

function ModalEditUser(props) {
  const { show, handleClose, dataUserEdit, updateUser, handleEditUserFromTable } = props;
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  const handleEditUser = async () => {
    try {
        await updateUser(dataUserEdit.id, name, job);
        handleEditUserFromTable({ 
          id: dataUserEdit.id, 
          first_name: name,
        });
        handleClose();
        toast.success("User updated successfully!");
    } catch (error) {
      toast.error("Failed to update user.");
    }
  };

  useEffect(() => {
    if (dataUserEdit && show) {
      setName(dataUserEdit.first_name || "");
      setJob(dataUserEdit.job || "");
    }
  }, [dataUserEdit, show]);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <Form.Label htmlFor="inputName">Name</Form.Label>
          <Form.Control
            type="text"
            id="inputName"
            aria-describedby="nameHelpBlock"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Label htmlFor="inputJob">Job</Form.Label>
          <Form.Control
            type="text"
            id="inputJob"
            value={job}
            onChange={(e) => setJob(e.target.value)}
            aria-describedby="jobHelpBlock"
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Close
        </Button>
        <Button variant="info" onClick={handleEditUser}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default ModalEditUser;
