import * as yup from "yup";

export const createUserSchema = yup.object().shape({
  name: yup
    .string()
    .required("O nome é obrigatório")
    .min(3, "O nome deve ter pelo menos 3 caracteres"),
  email: yup
    .string()
    .email("Deve estar no formato de e-mail")
    .required("O e-mail é obrigatório"),
  numberOfQuestions: yup
    .number()
    .required("A quantidade de questões é obrigatória")
    .oneOf([10, 20, 30], "A quantidade de questões deve ser 10, 20 ou 30"),
  difficulty: yup
    .string()
    .required("A dificuldade é obrigatória")
    .oneOf(["easy", "medium", "hard"], "A dificuldade deve ser easy, medium ou hard"),
});