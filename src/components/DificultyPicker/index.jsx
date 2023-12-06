import React from "react";
import { Picker } from "@react-native-picker/picker";
import { Controller } from "react-hook-form";
import { PickerContainer, ErrorText } from "./styles";

export const DificultyPicker = ({
  control,
  value,
  onChange,
  errors,
}) => {
  const getDificultyText = {
    Open: "Aberto",
    InProgress: "Em processo",
    Done: "Pronto",
  };

  const dificultyOptions = Object.entries(getDificultyText).map(([value, label]) => (
    <Picker.Item label={label} value={value} key={value} />
  ));

  return (
    <>
      <PickerContainer style={{ marginTop: "10%", marginBottom: "10%" }}>
        <Controller
          control={control}
          render={({ field }) => (
            <Picker
              style={{
                backgroundColor: "#68B2F8",
                padding: "2%",
                color: "#fff",
              }}
              selectedValue={field.value}
              onValueChange={field.onChange}
            >
              <Picker.Item label="Dificuldade" value="Open" />
              {dificultyOptions}
            </Picker>
          )}
          name="dificulty"
        />
      </PickerContainer>
      {errors.dificulty && <ErrorText>{errors.dificulty.message}</ErrorText>}
    </>
  );
};
