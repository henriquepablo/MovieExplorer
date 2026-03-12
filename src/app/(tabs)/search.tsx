import { colors } from "@/theme/colors";
import { fontFamily } from "@/theme/fontFamily";
import { MagnifyingGlassIcon } from "phosphor-react-native";
import { StyleSheet, Text, View } from "react-native";

export default function Search() {
    return (
        <View style={styles.container}>
            <MagnifyingGlassIcon color={colors.purple.light} size={40} />
            
            <Text style={styles.title}>
                Buscar
            </Text>

            <Text style={styles.description}>
                Encontre filmes buscando pelo título
            </Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    title: {
        color: colors.white,
        fontFamily: fontFamily.RammettoOneRegular,
        fontSize: 26
    },
    description: {
        color: colors.gray[700],
        fontFamily: fontFamily.NunitoSansRegular,
        fontSize: 16
    }
})