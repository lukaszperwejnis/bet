// eslint-disable-next-line import/no-extraneous-dependencies
import {
  Dashboard as dashboard,
  LeftArrowAlt as leftArrow,
  DownArrow as downArrow,
  InfoCircle as infoCircle,
  PhoneIncoming as phoneIncoming,
} from "@styled-icons/boxicons-solid";
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  PlusCircle as plusCircle,
  LogOut as logout,
  Search as search,
  Menu as menu,
  TrashAlt as trash,
} from "@styled-icons/boxicons-regular";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Organization as organization } from "@styled-icons/octicons";
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  Users as users,
  CircleWithCross as circleWithCross,
  Warning as warning,
  Image as image,
} from "@styled-icons/entypo";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Tick as tick } from "@styled-icons/typicons";
// eslint-disable-next-line import/no-extraneous-dependencies
import { EditOutline as edit } from "@styled-icons/evaicons-outline";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ArrowsAltH as arrows } from "@styled-icons/fa-solid";
import { WithExcludedChildrenProps } from "../../types";
import { InvalidIconError } from "../../errors";
import "./styles.css";

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
type IconSize = "small" | "normal" | "large" | "huge";
export type IconType = "default" | "primary" | "secondary" | "error";

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
}: IconProps): JSX.Element => {
  const IconComponent = Icons[icon];
  if (!IconComponent) {
    throw new InvalidIconError(icon);
  }

  const classNames = ["icon", `icon--${type}`, `icon--${size}`, className].join(
    " "
  );
  return <IconComponent className={classNames} {...otherProps} />;
};

Icon.defaultProps = {
  type: "default",
  size: "normal",
};
