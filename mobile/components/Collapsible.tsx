import Ionicons from '@expo/vector-icons/Ionicons';
import { PropsWithChildren, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';
import { styled } from 'nativewind';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';

const StyledTouchableOpacity = styled(TouchableOpacity)
const StyledView = styled(View)


export function Collapsible({ children, title, className }: PropsWithChildren & { title: string } & { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useColorScheme() ?? 'light';

  return (
    <StyledView className={isOpen?
      'flex flex-col w-full mt-[32px] p-[24px] bg-emerald-400 border-b-4 border-r-4 border-emerald-600/80 rounded-2xl shadow-xl shadow-green-950' 
      :
      'flex flex-col w-full mt-[32px] p-[24px] bg-emerald-400 border-b-4 border-r-4 border-emerald-700/80 rounded-2xl shadow-xl shadow-green-950'
    }>
      <TouchableOpacity
        style={styles.heading}
        
        onPress={() => setIsOpen((value) => !value)}
        activeOpacity={0.8}>
        <Ionicons
          name={isOpen ? 'chevron-down' : 'chevron-forward-outline'}
          size={18}
          color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
        />
        <ThemedText type="subtitle">{title}</ThemedText>
      </TouchableOpacity>
      {isOpen && <StyledView style={styles.content}>{children}</StyledView>}
    </StyledView>
  );
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  content: {
    marginTop: 6,
    marginLeft: 24,
  },
});
