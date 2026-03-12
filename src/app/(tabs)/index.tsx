import MovieCard from "@/components/MovieCard";
import { colors } from "@/theme/colors";
import { fontFamily } from "@/theme/fontFamily";
import { FilmSlateIcon } from "phosphor-react-native";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
    return (
        <View style={styles.container}>
            <FilmSlateIcon color={colors.purple.light} size={40} />
            
            <Text style={styles.title}>
                Populares
            </Text>

            <Text style={styles.description}>
                Explore os filmes populares hoje e encontre coisas novas para assistir!
            </Text>

            <MovieCard />

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
        fontSize: 26,
    },
    description: {
        color: colors.gray[700],
        fontFamily: fontFamily.NunitoSansRegular,
        fontSize: 16,
        marginBottom: 20
    }
})