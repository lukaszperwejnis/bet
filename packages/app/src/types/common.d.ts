export interface WithChildrenProps {
    children: RenderType;
}
export interface WithExcludedChildrenProps {
    children?: never;
}
export declare type RenderType = JSX.Element | Array<RenderType> | string | number | boolean | null;
