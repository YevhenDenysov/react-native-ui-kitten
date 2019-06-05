import React from 'react';
import { Image } from 'react-native';
import { StyleType } from '@kitten/theme';
import {
  ComponentShowcase,
  ComponentShowcaseItem,
  ComponentShowcaseSection,
  ComponentShowcaseSetting,
} from '../common/type';


const defaultInput: ComponentShowcaseItem = {
  title: 'Default',
  props: {},
};

const disabledInput: ComponentShowcaseItem = {
  title: 'Disabled',
  props: {
    disabled: true,
  },
};

const iconInput: ComponentShowcaseItem = {
  title: 'Icon',
  props: {
    icon: (style: StyleType) =>
      <Image
        source={{ uri: 'https://akveo.github.io/eva-icons/fill/png/128/star.png' }}
        style={style}
      />,
  },
};

const labelInput: ComponentShowcaseItem = {
  title: 'Label',
  props: {
    label: 'Place your text',
  },
};

const captionInput: ComponentShowcaseItem = {
  title: 'Caption',
  props: {
    caption: 'Place your text',
  },
};

const captionIconInput: ComponentShowcaseItem = {
  title: 'Caption Icon',
  props: {
    caption: 'Place your text',
    captionIcon: (style: StyleType) =>
      <Image
        source={{ uri: 'https://akveo.github.io/eva-icons/fill/png/128/star.png' }}
        style={style}
      />,
  },
};

const stateSection: ComponentShowcaseSection = {
  title: 'State',
  items: [
    defaultInput,
    disabledInput,
  ],
};

const accessoriesSection: ComponentShowcaseSection = {
  title: 'Accessories',
  items: [
    iconInput,
    labelInput,
    captionInput,
    captionIconInput,
  ],
};

export const inputShowcase: ComponentShowcase = {
  sections: [
    stateSection,
    accessoriesSection,
  ],
};

export const inputSettings: ComponentShowcaseSetting[] = [
  {
    propertyName: 'status',
    value: 'primary',
  },
  {
    propertyName: 'status',
    value: 'success',
  },
  {
    propertyName: 'status',
    value: 'info',
  },
  {
    propertyName: 'status',
    value: 'warning',
  },
  {
    propertyName: 'status',
    value: 'danger',
  },
  {
    propertyName: 'size',
    value: 'small',
  },
  {
    propertyName: 'size',
    value: 'medium',
  },
  {
    propertyName: 'size',
    value: 'large',
  },
];
