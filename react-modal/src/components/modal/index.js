import PropTypes from 'prop-types';

import '../../styles/modal.css';
import Button from '../button';

const Modal = ({ modal, onClose, header, body, footer }) => {
	return (
		<div className={`modal ${modal ? 'open' : ''}`}>
			<div className='modal-bg' onClick={onClose}></div>
			<div className='modal-container'>
				<div className='header'>
					<div>{header}</div>
					<Button onClick={onClose}>X</Button>
				</div>
				<div className='body'>{body}</div>
				<div className='footer'>{footer}</div>
			</div>
		</div>
	);
};

Modal.propTypes = {
	modal: PropTypes.bool,
	onClose: PropTypes.func,
	header: PropTypes.element,
	body: PropTypes.element,
	footer: PropTypes.element,
};

export default Modal;
