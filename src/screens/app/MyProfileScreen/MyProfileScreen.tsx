import React from 'react';
import {Screen, Text} from '@components';
import { AppTabScreenProps } from '@routes';

export function MyProfileScreen(props:AppTabScreenProps<'MyProfileScreen'>) {
  return (
    <Screen>
      <Text preset="headingSmall">My Profile Screen</Text>
    </Screen>
  );
}