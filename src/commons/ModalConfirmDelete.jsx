import React from "react";
import "./sass/modalConfirmDelete.scss";
import { CloseIcon } from "./icons/CloseIcon";
const ModalConfirmDelete = ({
  question =  '¿Seguro que querés eliminar esto?',
  handleDelete,
  handleCancel,
  language,
}) => {
  return (
    <span className="modalConfirmDelete__container">
      
      <div className="modalConfirmDelete__box_back">
        <div className="modalConfirmDelete__box">

            <span 
            onClick={handleCancel} className="modalConfirmDelete__box_close-icon">
              <CloseIcon fill="#f2f2f2" />
            </span>
            <h4>{question}</h4>

            <span className="modalConfirmDelete__cont_btn">
              <button onClick={handleDelete} className="modalConfirmDelete__btn btn_confirm">
                {language === "en" ? "Yes" : "Sí"}
              </button>
              <button onClick={handleCancel} className="modalConfirmDelete__btn btn_cancel">No</button>
            </span>


        </div>
      </div>
    </span>
  );
};

export default ModalConfirmDelete;
