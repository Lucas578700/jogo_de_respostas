import React from "react";
import styled from "styled-components/native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

export const TaskContainer = styled.View`
  background-color: #f0f0f0; /* Cor de fundo cinza claro */
  padding: 15px;
  margin: 10px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  elevation: 5;
`;

export const TaskInfoContainer = styled.View`
  flex: 1;
  margin-right: 10px;
`;

export const TaskTitle = styled.Text`
  font-size: 18px;
  color: #333; /* Cor do texto preto */
  font-weight: bold;
`;

export const TaskDate = styled.Text`
  font-size: 14px;
  color: #555; /* Cor do texto cinza escuro */
`;

export const EditButton = styled.TouchableOpacity`
  padding: 10px;
  background-color: #3498db; /* Cor azul */
  border-radius: 5px;
`;

export const EditButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const DeleteButton = styled.TouchableOpacity`
  padding: 10px;
  background-color: #ff4b4b; /* Cor vermelha */
  border-radius: 5px;
`;

export const DeleteButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

const CompleteButton = styled(DeleteButton)`
  background-color: ${(props) => (props.complete ? "#2ecc71" : "#ffcc00")};
`;

export const ViewButonsMain = styled.View`
  display: flex;
  gap: 15px;
`;
export const ViewButons = styled(ViewButonsMain)`
  display: flex;
  flex-direction: row;
`;
export const ViewCheck = styled(ViewButons)`
  gap: 5px;
  align-items: center;
  justify-content: center;
`;

const Task = ({ task, onDelete, onEdit, markComplete }) => {
  return (
    <TaskContainer>
      <TaskInfoContainer>
        <TaskTitle testID="task-title">{task.title}</TaskTitle>
        <TaskDate testID="task-deadline">
          Date:{" "}
          {task.deadline}
        </TaskDate>
      </TaskInfoContainer>

      <ViewButonsMain>
        <ViewButons>
          <EditButton onPress={onEdit} testID="edit-button">
            <Ionicons name="create" size={16} color="white" />
          </EditButton>
          <DeleteButton onPress={onDelete} testID="delete-button">
            <Ionicons name="trash-bin" size={16} color="white" />
          </DeleteButton>
        </ViewButons>
        <CompleteButton
          onPress={markComplete}
          complete={task.finished}
          testID="complete-button"
        >
          {task.finished ? (
            <ViewCheck>
              <FontAwesome name="check" size={20} color="#fff" />
              <DeleteButtonText>Feito</DeleteButtonText>
            </ViewCheck>
          ) : (
            <ViewCheck>
              <FontAwesome name="exclamation" size={20} color="#fff" />
              <DeleteButtonText>Falta</DeleteButtonText>
            </ViewCheck>
          )}
        </CompleteButton>
      </ViewButonsMain>
    </TaskContainer>
  );
};

export default Task;
