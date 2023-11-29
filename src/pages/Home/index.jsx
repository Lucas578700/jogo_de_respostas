// App.js
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  Button,
  TouchableOpacity,
  View,
  Keyboard,
} from "react-native";
import { format } from 'date-fns';
import {
  Container,
  Title,
  InputContainer,
  Input,
  ViewAbsolute,
  ViewTop,
} from "./style";
import Task from "../../components/Task";
import { db } from "../../firebase/firebaseConnection";
import { ref, onValue } from "firebase/database";
import { Modal } from "../../containers/modals/Modal";
import { useAuthContext } from "../../contexts/authContext";
import { Ionicons } from "@expo/vector-icons";
import { addNewUTask, checkComplete, deleteTask, submitEditService } from "../../services/task";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");
  const [selectedDate, setSelectedDate] = useState(format(new Date(), 'dd/MM/yyyy'));
  const [editModal, setEditModal] = useState();
  const [componentHeight, setComponentHeight] = useState(0);
  const { logout } = useAuthContext();

  const handleLayout = (event) => {
    const { height } = event.nativeEvent.layout;
    setComponentHeight(height);
  };

  const fetchData = async () => {
    try {
      onValue(ref(db, "/tasks"), (querySnapShot) => {
        const TasData = querySnapShot.val() || {};
        setTasks(TasData); // Atualize o estado com os dados do Firebase
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addTask = () => {
    if (taskText) {
      const formattedDate = selectedDate;
      const newTask = {
        title: taskText,
        dateTime: formattedDate,
      };
      addNewUTask(newTask);
      setTaskText("");
      Keyboard.dismiss();
    }
  };

  const editModalFunc = (task) => {
    setEditModal({ task: tasks[task], index: task });
  };
  const submitEdit = (newData, index) => {
    submitEditService(newData, index)
    setEditModal();
  };

  return (
    <Container>
      <ViewAbsolute onLayout={handleLayout}>
        <ViewTop>
          <Title>ToDo List</Title>
          <TouchableOpacity onPress={() => logout()}>
            <Ionicons name="exit" size={32} color="#ff69b4" />
          </TouchableOpacity>
        </ViewTop>
        <InputContainer>
        <Input
            placeholder="Add a new task"
            value={taskText}
            onChangeText={(text) => setTaskText(text)}
          />

        </InputContainer>
        <InputContainer>
          <Input
            placeholder="Add a new date"
            value={selectedDate}
            onChangeText={(text) => setSelectedDate(text)}
          />
        </InputContainer>
        <Button title="Add" onPress={addTask} />
      </ViewAbsolute>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <View style={{ height: componentHeight / 1.3, width: 1 }} />
        {tasks &&
          Object.keys(tasks).map((task, index) => (
            <>
              <Task
                key={index}
                task={tasks[task]}
                onDelete={() => deleteTask(task)}
                onEdit={() => editModalFunc(task, index)}
                markComplete={() => checkComplete(task, tasks[task])}
              />
            </>
          ))}
        <View style={{ height: 50, width: 1 }} />
      </ScrollView>
      <Modal
        open={!!editModal}
        item={editModal}
        onEditFinish={submitEdit}
        close={() => setEditModal()}
      />
    </Container>
  );
};

export default TodoList;
