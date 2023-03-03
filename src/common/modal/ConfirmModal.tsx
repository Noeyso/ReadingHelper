import React from 'react';
import { useAppDispatch } from '../../hooks';
import { closeModal } from '../../slices/modal';

type Props = {
  text:string;
  confirmBtnText?: string;
  cancelBtnText?: string;
  onConfirm:()=>void;
  onCancel?:()=>void;
}
function ConfirmModal ({text,confirmBtnText,cancelBtnText,onConfirm,onCancel}:Props) {
  const dispatch = useAppDispatch();

  const confirmModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault();
    dispatch(closeModal());
    onConfirm();
  }
  const cancelModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault();
    dispatch(closeModal());
    if(onCancel) onCancel();
  }
  return(
    <div>
      <span>{text}</span>
      <button onClick={confirmModal}>{confirmBtnText?confirmBtnText:'확인'}</button>
      <button onClick={cancelModal}>{cancelBtnText?cancelBtnText:'취소'}</button>
    </div>
  )
}

export default ConfirmModal;