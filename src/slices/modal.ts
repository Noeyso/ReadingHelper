import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ModalListType = {
  type: number;
  props?: any;
  overlayOptions?: {
    modalPos?: { x?: number; y?: number };
    translate?: { x?: number; y?: number };
    dim?: boolean;
  };
  onClose?: () => void;
};

export type ModalState={
  modalList: ModalListType[];
}

const initialState:ModalState={
  modalList: [],
}


export const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<ModalListType>) => {
      state.modalList.push(action.payload); 
      return state
    },
    closeModal: (state) => {
      state.modalList.pop();
      return state
    },
    resetModal: (state) => {
      return{modalList:[]}
    },

  },
});

export const {openModal,closeModal,resetModal} = modal.actions;


export default modal.reducer;
