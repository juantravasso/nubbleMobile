import { CompositeScreenProps } from '@react-navigation/native';
import { AppStackParamList } from './AppStack';
import { AppTabBottomTabParamList } from './AppTabNavigator';
import { AuthStackParamList } from './AuthStack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackParamList, AppStackParamList {}
  }
}

export type AppScreenProps<RouteName extends keyof AppStackParamList> = 
NativeStackScreenProps<
AppStackParamList, 
RouteName
>;

export type AuthScreenProps<RouteName extends keyof AuthStackParamList> = 
NativeStackScreenProps<
AuthStackParamList, 
RouteName
>;

export type AppTabScreenProps<
  RouteName extends keyof AppTabBottomTabParamList,
> = CompositeScreenProps<
  BottomTabScreenProps<AppTabBottomTabParamList, RouteName>,
  NativeStackScreenProps<AppStackParamList, 'AppTabNavigator'>
>;