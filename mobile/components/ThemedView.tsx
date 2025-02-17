import { View, type ViewProps } from 'react-native';
import { styled } from 'nativewind';

import { useThemeColor } from '@/hooks/useThemeColor';

const StyledView = styled(View);

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  className?: string;
};

export function ThemedView({ style, lightColor, darkColor, className, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <StyledView style={[{ backgroundColor }, style]} className={className} {...otherProps} />;
}
