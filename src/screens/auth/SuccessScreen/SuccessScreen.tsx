import React from "react";
import { Screen, Icon, Text, Button } from "@components";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@routes";

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>

export function SuccessScreen({route, navigation}:ScreenProps){
    function goBackToBegin(){
        navigation.goBack();
    }
    return(
        <Screen>
            <Icon {...route.params.icon}/>
            <Text preset="headingLarge" mt="s24">
                {route.params.title}
            </Text>
            <Text preset="paragraphLarge" mt="s16">
                {route.params.description}

            </Text>
            <Button onPress={goBackToBegin} title="Voltar ao início" mt="s40"/>
        </Screen>
    );
}