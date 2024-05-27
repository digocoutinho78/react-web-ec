import { Toast } from "react-bootstrap"

function ToastNotification(props: any) {
    return (
        <Toast {...props}>
            <Toast.Body>Produto Adicionado ao Carrinho!</Toast.Body>
        </Toast>
    );
};

export default ToastNotification;