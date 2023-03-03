import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { resetModal } from "../../slices/modal";
import { ModalComponents } from "./Modal";
import styles from './Modal.module.scss';

export default function ModalWrapper() {
  const { modalList } = useAppSelector((state)=>state.modalReducer);
  const dispatch = useAppDispatch();

  // 모달 오버레이에서 스크롤 방지
  React.useEffect(() => {
    if (modalList.length > 0) {
      document.body.style.cssText = `
        overflow:hidden;
      `;
    }
    return () => {
      document.body.style.cssText = 'overflow:auto;';
    };
  }, [modalList.length]);

  const renderModal = modalList.map(({ type, props, overlayOptions })=>{
    const ModalComponent = ModalComponents[type];
    let modalWrapperStyles;
    let modalStyles:React.CSSProperties;

    if (overlayOptions?.dim === undefined) {
      modalWrapperStyles = `${styles.modal_wrapper} ${styles.dimmed}`;
    } else {
      if (overlayOptions.dim) modalWrapperStyles = `${styles.modal_wrapper} ${styles.dimmed}`;
      else modalWrapperStyles = styles.modal_wrapper;
    }

    modalStyles = {
      top:overlayOptions?.modalPos ? overlayOptions.modalPos.y ? overlayOptions.modalPos.y : '50%' : '50%',
      left:overlayOptions?.modalPos ? overlayOptions.modalPos.x ? overlayOptions.modalPos.x : '50%' : '50%',
    };


    if (overlayOptions?.translate) {
      const { x, y } = overlayOptions.translate;
      const tx = x ? x : '-50';
      const ty = y ? y : '-50';
      modalStyles.transform = `translate(${tx}%,${ty}%)`;
    }

    return (
      <div className={modalWrapperStyles}>
        <div className={styles.modal_component} style={modalStyles}  onClick = {(e)=> {e.stopPropagation();}}>
          <ModalComponent key={type} {...props}/>
        </div>
      </div>
    );
  });

  return (
    modalList.length > 0 ? (
      <div onClick={()=>{dispatch(resetModal());}}>
        {renderModal}
      </div>
    ) : <></>
  );
}
