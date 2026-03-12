import { colors } from "@/theme/colors";
import { Tabs } from "expo-router";
import { BookmarksIcon, FilmSlateIcon, MagnifyingGlassIcon } from "phosphor-react-native";

export default function Layout() {


    return (
        <Tabs 
            screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: colors.purple.light,
                    tabBarStyle: {
                        backgroundColor: colors.gray[200]
                    }
                }}
            > 

            <Tabs.Screen  
                name="index" 
                options={{
                    title: "Populares",
                    tabBarIcon: ({ focused }) => (
                        <FilmSlateIcon color={focused ? colors.purple.light : colors.gray[500]} />
                    )
                }}
            />

            <Tabs.Screen  
                name="search" 
                options={{
                    title: "Buscar",
                    tabBarIcon: ({ focused }) => (
                        <MagnifyingGlassIcon color={focused ? colors.purple.light : colors.gray[500]} />
                    )
                }}
            />

            <Tabs.Screen  
                name="favorites" 
                options={{
                    title: "Favoritos",
                    tabBarIcon: ({ focused }) => (
                        <BookmarksIcon color={focused ? colors.purple.light : colors.gray[500]} />
                    )
                }}
            />
        </Tabs>
    )
}