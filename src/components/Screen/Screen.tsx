import React from "react";
import { Box, TouchableOpacityBox, Icon, Text, BoxProps } from "@components";
import { KeyboardAvoidingView, Platform } from "react-native";
import { ScrollViewContainer, ViewContainer } from "./components/ScreenContainer";
import { useAppTheme, useAppSafeArea } from "@hooks";
import { useNavigation } from "@react-navigation/native";

interface ScreenProps extends BoxProps {
    children: React.ReactNode;
    canGoBack?: boolean;
    scrollable?: boolean;
}

export function Screen({
    children, 
    canGoBack = false,
    scrollable = false,
    style,
    ...boxProps
} : ScreenProps){

const Container = scrollable ? ScrollViewContainer : ViewContainer;

const {top, bottom} = useAppSafeArea();
const {colors} = useAppTheme();

const navigation = useNavigation();

return( 
    <KeyboardAvoidingView
    style={{flex:1}}
    behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Container backgroundColor={colors.background}>
            <Box 
                paddingHorizontal="s24" 
                style={[{paddingTop: top, paddingBottom: bottom}, style]} 
                {...boxProps}>
                { canGoBack && (
                <TouchableOpacityBox 
                onPress={navigation.goBack}
                mb="s24" 
                flexDirection="row">
                    <Icon name="arrowLeft" color="primary"/>
                    <Text preset="paragraphMedium" semiBold ml="s8">
                        Voltar
                    </Text>
                </TouchableOpacityBox>)}
                {children} 
            </Box>
        </Container>
    </KeyboardAvoidingView>
    );
}