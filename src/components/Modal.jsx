import { useEffect, useState } from "react";
import ReactDOM from 'react-dom';

const Portal = ({ onClose }) => {

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="fixed inset-40 p-10 bg-white">
        <div className="flex flex-col justify-between h-full">
          Here is an important agreement for you to accept
          <button
            className="border-blue-500 bg-blue-500"
            onClick={onClose}
          >
            I Accept
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true)
  }
  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <div>
      <button
        className="border-blue-100 border bg-white text-black p-3 rounded shadow hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out "
        onClick={handleClick}
      >
        Open Modal
      </button>
      {isOpen && <Portal onClose={handleClose} />}
    </div>
  )
}

export default Modal