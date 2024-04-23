import { Stack } from 'expo-router';


export default function RootLayout() {
  return (
    <Stack screenOptions={{
      navigationBarHidden: true,
      headerShown:false
    }} />
  );
}
