import React, { useRef } from "react";
import { Pressable, TextInput as RNTextInput, TextInputProps as RNTextInputProps, TextStyle } from "react-native";
import { $fontFamily, $fontSizes, Text} from "../Text/Text";
import { Box, BoxProps } from "@components";
import { useAppTheme } from "@hooks";

export interface TextInputProps extends RNTextInputProps{
    label: string;
    errorMessage?: string;
    RightComponent?: React.ReactElement;
    boxProps?: BoxProps;
}

export function TextInput({
    RightComponent,
    label,
    errorMessage,
    boxProps,
    ...rnTextInputProps
    }: TextInputProps){
    const {colors} = useAppTheme();
    const inputRef = useRef<RNTextInput>(null);

    const $textInputContainer: BoxProps = {
        borderWidth: errorMessage ? 2 : 1,
        padding: 's16',
        borderColor: errorMessage ? 'error' : 'gray4',
        borderRadius: 's12',
        flexDirection: 'row',
    };

    function focusInput(){
        inputRef.current?.focus();
    }

    return (
        <Box {...boxProps}>
            <Pressable onPress={focusInput}>
            <Text preset="paragraphMedium" mb="s4">
                {label}
            </Text>
            <Box {...$textInputContainer}>
                <RNTextInput 
                autoCapitalize='none'
                ref={inputRef}
                placeholderTextColor={colors.gray2} 
                style={$textInputStyle} 
                {...rnTextInputProps}
                />
                {RightComponent && (
                    <Box ml="s16" justifyContent="center">
                        {RightComponent}
                    </Box>)}
            </Box>
            {errorMessage && (
            <Text color="error" preset="paragraphSmall" bold>
                {errorMessage}
            </Text>
            )}
            </Pressable>
        </Box>
    );
}

export const $textInputStyle: TextStyle = {
    padding: 0, 
    fontFamily: $fontFamily.regular,
    ...$fontSizes.paragraphMedium,
    flexGrow:1,
    flexShrink:1,

};

