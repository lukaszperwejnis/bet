import { WithChildrenProps } from '@structures';
import { ColorType } from './Button';
interface ButtonProps extends WithChildrenProps {
    onClick?(event: React.MouseEvent): void;
    isHollow?: boolean;
    disabled?: boolean;
    isEmpty?: boolean;
    title?: string;
}
interface StyledButtonProps extends ButtonProps {
    colorType: ColorType;
}
export declare const StyledButton: import("styled-components").StyledComponent<"button", any, StyledButtonProps, never>;
export {};
