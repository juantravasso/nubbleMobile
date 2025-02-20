import React from "react";
import { Screen, Text, Button, FormTextInput } from "@components";
import { useResetNavigationSuccess } from "@hooks";
import { ForgotPasswordSchema, forgotPasswordSchema } from "./forgotPasswordSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthScreenProps } from "@routes";


export function ForgotPasswordScreen({navigation}:AuthScreenProps<'ForgotPasswordScreen'>){
    const {reset} = useResetNavigationSuccess();

    const {control, formState, handleSubmit} = useForm<ForgotPasswordSchema>({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues:{
            email: '',
        },
        mode: 'onChange'
    })
    
    function submitForm(formValues:ForgotPasswordSchema){
        reset({
            title: `Enviamos as instruções para seu e-mail`,
            description:
                'Clique no link enviado no seu e-mail para recuperar sua senha',
            icon: {
                name:'messageRound',
                color: 'primary',
            },
        });
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
            disabled={!formState.isValid}
            onPress={handleSubmit(submitForm)} 
            title="Recuperar senha"/>
        </Screen>
    )
}