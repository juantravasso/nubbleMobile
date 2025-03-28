import React from "react";
import { Box, BoxProps } from "@components";
import { KeyboardAvoidingView, Platform } from "react-native";
import { ScrollViewContainer, ViewContainer, ScreenHeader } from "./components";
import { useAppTheme, useAppSafeArea } from "@hooks";

export interface ScreenProps extends BoxProps {
    children: React.ReactNode;
    canGoBack?: boolean;
    scrollable?: boolean;
    title?: string;
}

export function Screen({
    children, 
    canGoBack = false,
    scrollable = false,
    style,
    title,
    ...boxProps
} : ScreenProps){

const Container = scrollable ? ScrollViewContainer : ViewContainer;

const {top, bottom} = useAppSafeArea();
const {colors} = useAppTheme();

return( 
    <KeyboardAvoidingView
    style={{flex:1}}
    behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Container backgroundColor={colors.background}>
            <Box 
                paddingHorizontal="s24" 
                style={[{paddingTop: top, paddingBottom: bottom}, style]} 
                {...boxProps}>
                    <ScreenHeader canGoBack={canGoBack} title={title} />
                {children} 
            </Box>
        </Container>
    </KeyboardAvoidingView>
    );
}