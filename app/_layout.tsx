import "react-native-gesture-handler"
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Slot, Stack } from "expo-router";

import "../global.css"


export default function Layout(){
    return(
        <GestureHandlerRootView>
            <Stack>
                <Stack.Screen name="(tabs)" options = {{ headerShown: false}} />
            </Stack>
        </GestureHandlerRootView>
    )
}