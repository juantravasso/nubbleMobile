import React from "react";
import {useAuthRequestNewPassword} from '@domain';
import { Screen, Text, Button, FormTextInput } from "@components";
import { useResetNavigationSuccess } from "@hooks";
import { ForgotPasswordSchema, forgotPasswordSchema } from "./forgotPasswordSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {useToastService} from '@services';
import {AuthScreenProps, AuthStackParamList} from '@routes';


const resetParam: AuthStackParamList['SuccessScreen'] = {
    title: `Enviamos as instruções ${'\n'}para seu e-mail`,
    description: 'Clique no link enviado no seu e-mail para recuperar sua senha',
    icon: {
      name: 'messageRound',
      color: 'primary',
    },
  };
  
  export function ForgotPasswordScreen({}: AuthScreenProps<'ForgotPasswordScreen'>) {
    const {reset} = useResetNavigationSuccess();
    const {showToast} = useToastService();
    const {requestNewPassword, isLoading} = useAuthRequestNewPassword({
      onSuccess: () => reset(resetParam),
      onError: message => showToast({message, type: 'error'}),
    });

    const {control, formState, handleSubmit} = useForm<ForgotPasswordSchema>({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues:{
            email: '',
        },
        mode: 'onChange'
    })
    
    function submitForm(values:ForgotPasswordSchema){
        requestNewPassword(values.email);
    }

    return (
        <Screen canGoBack>
            <Text preset="headingLarge" mb="s16">Esqueci minha senha</Text>
            <Text preset="paragraphLarge" mb="s32">
                Digite seu e-mail e enviaremos as instruções para a redefinição de senha
            </Text>
            <FormTextInput
                control={control}
                name="email"
                label="E-mail" 
                placeholder="Digite seu e-mail" 
                boxProps={{mb: 's20'}} 
                />
            <Button 
            loading={isLoading}
            disabled={!formState.isValid}
            onPress={handleSubmit(submitForm)} 
            title="Recuperar senha"/>
        </Screen>
    )
}