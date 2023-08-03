import React, { FC } from "react";
import "./modal.scss";

export interface IModal {
  address: string;
  company: string;
  onCancel?: () => void;
}

const Modal: FC<IModal> = ({ address, company, onCancel }) => {
  return (
    <>
      <div className="modal-fade"></div>
      <div className="modal">
        {onCancel && (
          <div className="modal-close" onClick={onCancel}>
            X
          </div>
        )}
        <div>{`Address: ${address}`}</div>
        <div>{`Company: ${company}`}</div>
      </div>
    </>
  );
};

export default Modal;
