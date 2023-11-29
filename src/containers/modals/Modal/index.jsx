import RNModal from "react-native-modal";
import React, { useEffect, useState } from "react";
import {
  CenteredView,
  ModalView,
  ModalText,
  EditInput,
  SaveButton,
  SaveButtonText,
  CloseButton,
  CloseButtonText,
  ViewButtons,
} from "./styles";
import { Ionicons } from "@expo/vector-icons";

export const Modal = ({ open, onEditFinish, close, item }) => {
  const [editedTitle, setEditedTitle] = useState();
  const [editedDate, setEditedDate] = useState();

  useEffect(() => {
    setEditedTitle(item?.task?.title);
    setEditedDate(item?.task?.deadline);
  }, [item]);

  return (
    <RNModal
      isVisible={open}
      onBackButtonPress={close}
      onBackdropPress={close}
      backdropOpacity={0.2}
      hideModalContentWhileAnimating
      useNativeDriverForBackdrop
      useNativeDriver
      coverScreen
    >
      <CenteredView>
        <ModalView>
          <ModalText>Título:</ModalText>
          <EditInput
            placeholder="Enter new title"
            value={editedTitle}
            onChangeText={(text) => setEditedTitle(text)}
          />

          <ModalText>Data:</ModalText>
          <EditInput
            placeholder="Enter new date"
            value={editedDate}
            onChangeText={(date) => setEditedDate(date)}
          />

          <ViewButtons>
            <SaveButton
              onPress={() =>
                onEditFinish(
                  {
                    deadline: editedDate,
                    title: editedTitle,
                  },
                  item?.index
                )
              }
            >
              <Ionicons name="save" size={20} color="#fff" />

              <SaveButtonText>Salvar</SaveButtonText>
            </SaveButton>

            <CloseButton onPress={close}>
              <Ionicons name="close" size={20} color="#fff" />
              <CloseButtonText>Fechar</CloseButtonText>
            </CloseButton>
          </ViewButtons>
        </ModalView>
      </CenteredView>
    </RNModal>
  );
};
