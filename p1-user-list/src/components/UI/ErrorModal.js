import './ErrorModal.css';
import Button from "./Button";
import Card from './Card';

const ErrorModal = (props) =>{
    return(
        <div className="modal">
            <Card className='error-modal'>
                <div className="modal_head">
                    {props.type}
                </div>
                <div className="modal_content">
                    {props.children}
                </div>
                <div className="modal_actions">
                    <Button type='button' onClick={props.onCloseModal}>Okay</Button>
                </div>
            </Card>
        </div>
    )
}

export default ErrorModal;