import ConfirmModal from "./ConfirmModal";

export enum ModalTypes {
  Confirm,
}

type ModalComponentType = {
  [key: number]: (props: any) => JSX.Element;
};

export const ModalComponents: ModalComponentType = {
  [ModalTypes.Confirm]: ConfirmModal,
};
