import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { Overlay, Content } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleOverlayClick}>
      {/* <Content>{this.props.children}</Content> */}
      <Content></Content>
    </Overlay>,
    modalRoot
  );
};
