/**
 * IMPORTANT: To use Icon component make sure to follow this guide:
 * https://akveo.github.io/react-native-ui-kitten/docs/guides/icon-packages
 */

import React from 'react';
import {
  Icon,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';

const BackIcon = (style) => (
  <Icon {...style} name='arrow-back' />
);

const BackAction = () => (
  <TopNavigationAction icon={BackIcon}/>
);

export const TopNavigationSimpleUsageShowcase = () => (
  <TopNavigation
    leftControl={BackAction()}
    title='Application Title'
  />
);
