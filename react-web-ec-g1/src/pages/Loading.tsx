import Spinner from 'react-bootstrap/Spinner';
import { Col, Modal, Row } from 'react-bootstrap';


function Loading(props: any) {
    return (
        <Modal {...props} 
        dialogClassName="modal-loading"
        centered >
            <Modal.Body>

                <Row cente className="justify-content-center">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>

                </Row>
            </Modal.Body>
        </Modal>
    );
}

export default Loading;