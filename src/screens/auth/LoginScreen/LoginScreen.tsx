import React from 'react';
import { 
    Text, 
    Button, 
    Screen, 
    FormTextInput,
    FormPasswordInput 
} from '@components';
import {  useForm } from 'react-hook-form';
import { LoginSchema, loginSchema } from './loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthScreenProps } from '@routes';
import {useAuthSignIn} from '@domain';
import {useToastService} from '@services';

export function LoginScreen({navigation}: AuthScreenProps<'LoginScreen'>) {
    const {showToast} = useToastService();
    const {isLoading, signIn} = useAuthSignIn({
        onError: message => showToast({message, type: 'error'}),
    });

    const {control, formState, handleSubmit} = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
        defaultValues:{
            email:'',
            password: '',
        },
        mode:'onChange',
    });

    function submitForm({email, password}:LoginSchema){
        signIn({email, password});
    }

    function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
    }
    function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
    }
    return (
        <Screen scrollable>
        <Text marginBottom="s8" preset="headingLarge">
        Olá
        </Text>
        <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
        </Text>

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
            boxProps={{mb: 's20'}}
        />


        <Text
        onPress={navigateToForgotPasswordScreen}
        color="primary"
        preset="paragraphSmall"
        bold>
        Esqueci minha senha
        </Text>

        <Button 
        loading={isLoading}
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        marginTop="s48" 
        title="Entrar" 
        />

        <Button
        onPress={navigateToSignUpScreen}
        preset="outline"
        marginTop="s12"
        title="Criar uma conta"
        />
    </Screen>
    );
}