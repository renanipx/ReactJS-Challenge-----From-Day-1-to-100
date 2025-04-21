import React from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// Definir o esquema de validação com Yup
const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'O nome deve ter pelo menos 2 caracteres')
    .required('Nome é obrigatório'),
  email: Yup.string()
    .email('Formato de email inválido')
    .required('Email é obrigatório'),
  age: Yup.number()
    .min(18, 'Idade mínima é 18')
    .required('Idade é obrigatória')
});

const MyForm = () => {
  // Usando o hook useForm do React Hook Form com o Yup resolver
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema)  // Integração com o Yup
  });

  // Função que será chamada no envio do formulário
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nome:</label>
        <input {...register('name')} />
        {errors.name && <p>{errors.name.message}</p>}  {/* Exibindo erro de validação */}
      </div>

      <div>
        <label>Email:</label>
        <input {...register('email')} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label>Idade:</label>
        <input type="number" {...register('age')} />
        {errors.age && <p>{errors.age.message}</p>}
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default MyForm;
