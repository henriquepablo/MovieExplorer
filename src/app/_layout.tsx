import { NunitoSans_400Regular, NunitoSans_700Bold, useFonts } from "@expo-google-fonts/nunito-sans";
import { Rajdhani_700Bold } from "@expo-google-fonts/rajdhani";
import { RammettoOne_400Regular } from "@expo-google-fonts/rammetto-one";
import { Stack } from "expo-router";

export default function Layout() {

    const [fontsLoaded]  = useFonts({
        NunitoSans_400Regular,
        NunitoSans_700Bold,
        Rajdhani_700Bold,
        RammettoOne_400Regular
    });

    if (!fontsLoaded) {
        return null;
    }

    return <Stack />
}