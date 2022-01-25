import { useState } from 'react';
import './styles/App.css';
import Modal from './components/modal';
import Button from './components/button';
import Header from './components/modal/Header';
import Body from './components/modal/Body';
import Footer from './components/modal/Footer';

function App() {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const handlerModal = () => {
		setModalIsOpen(!modalIsOpen);
	};

	return (
		<div className='App'>
			<h1>React Modal</h1>
			<Button onClick={() => handlerModal()} className='btn-handler-modal'>
				Click Me
			</Button>

			<Modal
				modal={modalIsOpen}
				onClose={() => handlerModal()}
				header={<Header />}
				body={<Body />}
				footer={<Footer />}
			/>
		</div>
	);
}

export default App;
