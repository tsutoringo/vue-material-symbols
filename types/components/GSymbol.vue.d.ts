import { Icon, IconType, IconWeight, IconGrade, IconSize } from '../Icon';
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    icon: Icon;
    type?: IconType | undefined;
    fill: boolean;
    weight: IconWeight;
    grade: IconGrade;
    size: IconSize;
}>, {
    type: string;
    fill: boolean;
    weight: number;
    grade: number;
    size: number;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    icon: Icon;
    type?: IconType | undefined;
    fill: boolean;
    weight: IconWeight;
    grade: IconGrade;
    size: IconSize;
}>, {
    type: string;
    fill: boolean;
    weight: number;
    grade: number;
    size: number;
}>>>, {
    grade: IconGrade;
    type: IconType;
    fill: boolean;
    weight: IconWeight;
    size: IconSize;
}>;
export default _default;
declare type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
declare type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
declare type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};
//# sourceMappingURL=GSymbol.vue.d.ts.map