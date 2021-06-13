import { RenderType, WithChildrenProps } from '@structures';
interface PageTitleProps extends WithChildrenProps {
    header?: RenderType;
    isLoading?: boolean;
}
export declare const PageTile: ({ header, children, isLoading, }: PageTitleProps) => JSX.Element;
export {};
