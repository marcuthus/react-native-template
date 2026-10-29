import "./global.css"

import { Pressable, View } from "react-native"
import { PortalHost } from "@rn-primitives/portal"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { StatusBar } from "expo-status-bar"
import { FC } from "react"
import { useColorScheme } from "nativewind"

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Text } from "@/components/ui/text"

const App: FC = () => {
    const { colorScheme } = useColorScheme()

    return (
        <SafeAreaProvider>
            <View className="flex-1 items-center justify-center gap-4 bg-background">
                <Text className="text-lg font-semibold">
                    Aplicativo Template Feito por Marcuth (@marcuth)!
                </Text>
                <Popover>
                    <PopoverTrigger asChild>
                        <Pressable className="rounded-md bg-primary px-4 py-2 active:opacity-80">
                            <Text className="text-primary-foreground">Abrir popover</Text>
                        </Pressable>
                    </PopoverTrigger>
                    <PopoverContent>
                        <Text>Reusables funcionando!</Text>
                    </PopoverContent>
                </Popover>
            </View>
            <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
            <PortalHost />
        </SafeAreaProvider>
    )
}

export default App
