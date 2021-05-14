import React, { ReactElement } from 'react';
import {
  Dashboard as dashboard,
  LeftArrowAlt as leftArrow,
  DownArrow as downArrow,
  InfoCircle as infoCircle,
  PhoneIncoming as phoneIncoming,
} from '@styled-icons/boxicons-solid';
import {
  PlusCircle as plusCircle,
  LogOut as logout,
  Search as search,
  Menu as menu,
  TrashAlt as trash,
} from '@styled-icons/boxicons-regular';
import { Organization as organization } from '@styled-icons/octicons';
import {
  Users as users,
  CircleWithCross as circleWithCross,
  Warning as warning,
  Image as image,
} from '@styled-icons/entypo';
import { Tick as tick } from '@styled-icons/typicons';
import { EditOutline as edit } from '@styled-icons/evaicons-outline';
import { ArrowsAltH as arrows } from '@styled-icons/fa-solid';
import './styles.css';
import { WithExcludedChildrenProps } from '../../../../types';
import { InvalidIconError } from '../../../../errors';

const Icons = {
  dashboard,
  leftArrow,
  plusCircle,
  organization,
  menu,
  users,
  trash,
  downArrow,
  logout,
  infoCircle,
  circleWithCross,
  warning,
  tick,
  search,
  edit,
  arrows,
  image,
  phoneIncoming,
};

export type IconComponentType = keyof typeof Icons;
type IconSize = 'small' | 'normal' | 'large' | 'huge';
export type IconType = 'default' | 'primary' | 'secondary' | 'error';

interface IconProps extends WithExcludedChildrenProps {
  className?: string;
  icon: IconComponentType;
  type?: IconType;
  size?: IconSize;
  title?: string;
}

export const Icon = ({
  className,
  icon,
  type,
  size,
  ...otherProps
}: IconProps): ReactElement => {
  const IconComponent = Icons[icon];
  if (!IconComponent) {
    throw new InvalidIconError(icon);
  }

  const classNames = ['icon', `icon--${type}`, `icon--${size}`, className].join(
    ' ',
  );
  return <IconComponent className={classNames} {...otherProps} />;
};

Icon.defaultProps = {
  type: 'default',
  size: 'normal',
};
