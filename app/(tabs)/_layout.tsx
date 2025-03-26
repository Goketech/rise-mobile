import { Stack } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
    screenOptions={{
      headerShown: false,
      animation: "slide_from_right",
    }}>
      <Stack.Screen name='index'/>
      <Stack.Screen name='get-started'/>
      <Stack.Screen name='signup'/>
      <Stack.Screen name='login'/>
      <Stack.Screen name='otp'/>
      <Stack.Screen name='location'/>
      <Stack.Screen name='phone'/>
    </Stack>
  );
}
