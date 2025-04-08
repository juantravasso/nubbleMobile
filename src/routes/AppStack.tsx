import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { SettingsScreen, PostCommentScreen, ProfileScreen} from '@screens';
import { AppTabBottomTabParamList, AppTabNavigator } from './AppTabNavigator';
import { NavigatorScreenParams } from '@react-navigation/native';

export type AppStackParamList = {
  //HomeScreen: undefined;
  AppTabNavigator: NavigatorScreenParams<AppTabBottomTabParamList>;
  SettingsScreen: undefined;
  PostCommentScreen: {
    postId: number;
    postAuthorId: number;
  };
  ProfileScreen: {
    userId: number;
  };
};
const Stack = createNativeStackNavigator<AppStackParamList>();
export function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
      initialRouteName="AppTabNavigator">
      <Stack.Screen name="AppTabNavigator" component={AppTabNavigator} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="PostCommentScreen" component={PostCommentScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
}