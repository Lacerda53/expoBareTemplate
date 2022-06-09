import styled, { css } from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Platform, TouchableOpacity } from 'react-native';
import { toAlpha } from '../../utils/toAlpha';

type ContainerProps = {
    isFooter: boolean;
    isOutline: boolean;
    color: string
};

export const Container = styled(TouchableOpacity) <ContainerProps>`
    width: 100%;
    height: 60px;
    background: ${({ theme, color }) => theme.colors[color]};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    z-index: 50;
    ${({ isOutline, theme }) => isOutline && css`
        background: transparent;
        border: 1px solid ${theme.colors.primary};
    `}
    ${({ disabled, theme, color }) => disabled && css`
        background: ${toAlpha(theme.colors[color], 30)};
    `}
    ${({ isFooter }) => isFooter && css`
        position: absolute;
        bottom: 0;
        height: ${(Platform.OS === 'ios' ? 50 : 56) + getBottomSpace()}px;
        padding-bottom: ${Platform.OS === 'ios' ? 15 : 0}px;
        border-radius: 0;
    `}
`;