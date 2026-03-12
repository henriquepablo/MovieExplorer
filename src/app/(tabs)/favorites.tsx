import { colors } from "@/theme/colors";
import { fontFamily } from "@/theme/fontFamily";
import { BookmarksIcon } from "phosphor-react-native";
import { StyleSheet, Text, View } from "react-native";

export default function Favorites() {
    return (
        <View style={styles.container}>
            <BookmarksIcon color={colors.purple.light} size={40} />
            
            <Text style={styles.title}>
                Favoritos
            </Text>

            <Text style={styles.description}>
                Sua lista de filmes salvos
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