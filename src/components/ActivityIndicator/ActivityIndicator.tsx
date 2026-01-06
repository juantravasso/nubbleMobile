import React from 'react';
import {
    ActivityIndicator as RNActivityIndicator,
    ActivityIndicatorProps,
} from 'react-native';
import { ThemeColors} from '@theme';
import { useAppTheme } from '@hooks';

interface Props extends Omit<ActivityIndicatorProps, 'color'> {
    color?: ThemeColors;
}

export function ActivityIndicator({color = 'primary', ...rest}: Props) {
    const {colors} = useAppTheme();
    return <RNActivityIndicator 
    testID="activity-indicator"  
    color={colors[color]} 
    {...rest}/>;
}