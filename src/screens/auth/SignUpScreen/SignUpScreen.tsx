import React from 'react';
import {Button,Screen, Text, FormTextInput, FormPasswordInput} from '@components';
import { useResetNavigationSuccess } from '@hooks';
import { useForm } from 'react-hook-form';
import { SignUpSchema,signUpSchema } from './signUpSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthScreenProps } from '@routes';

export function SignUpScreen({navigation}: AuthScreenProps<'SignUpScreen'>) {
  const {reset} = useResetNavigationSuccess();
  const {control, formState, handleSubmit} = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues:{
      username: '',
      fullname:'',
      email:'',
      password:'',
    },
    mode: 'onChange',
  })
  function submitForm(formValues:SignUpSchema) {

    reset({
        title: 'Sua conta foi criada com sucesso!',
        description: 'Agora é só fazer login na nossa plataforma',
        icon: {
          name: 'checkRound',
          color: 'success',
        },
      });  
    
  }
  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>


    <FormTextInput
      control={control}
      name="username"
      label="Seu username" 
      placeholder="@" 
      boxProps={{mb: 's20'}} 
    />

    <FormTextInput
      control={control}
      name="fullname"
      label="Nome Completo" 
      placeholder="Digite seu nome completo" 
      boxProps={{mb: 's20'}} 
    />

    <FormTextInput
    control={control}
    name="email"
    label="E-mail" 
    placeholder="Digite seu e-mail" 
    boxProps={{mb: 's20'}} 
    />

    <FormPasswordInput
    control={control}
    name="password"
    label="Senha" 
    placeholder="Digite sua senha" 
    boxProps={{mb: 's48'}}
    />
    
      <Button 
      disabled={!formState.isValid} 
      onPress={handleSubmit(submitForm)} 
      title="Criar uma conta" 
      />
    </Screen>
  );
}