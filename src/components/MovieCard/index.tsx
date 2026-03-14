import { colors } from "@/theme/colors";
import { fontFamily } from "@/theme/fontFamily";
import { StarIcon, TrashSimpleIcon } from "phosphor-react-native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type MovieCardProps = {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
    release_date: string;
    screen_favorite?: boolean;
}

export default function MovieCard({ id, title, poster_path, vote_average, release_date, screen_favorite = false }: MovieCardProps) {
    return (
        <TouchableOpacity style={styles.container}>

            <Image style={styles.backgroundImage}
                source={{ uri: `https://image.tmdb.org/t/p/w500/${poster_path}` }}
            />

            {
                screen_favorite && 
                <TouchableOpacity style={styles.buttonTrash}>
                    <TrashSimpleIcon color={colors.purple.light} />
                </TouchableOpacity>
            }

            <View style={styles.containerText}>
                <Text style={styles.name}>
                    {title}
                </Text>

                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <StarIcon size={10} color={colors.gray[700]} weight="fill" />
                        <Text style={styles.text}>
                            {vote_average.toFixed(1)}
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={styles.point} />
                        <Text style={styles.text}>
                            {release_date.split('-')[0]}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 169,
        height: 222,
        position: 'relative',
        margin: 10
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
    },
    containerText: {
        position: 'absolute',
        padding: 12,
        bottom: 0,
    },
    name: {
        fontFamily: fontFamily.RajdhaniBold,
        fontSize: 16,
        color: colors.gray[700]
    },
    point: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: colors.gray[700]
    },
    text: {
        color: colors.gray[700],
        marginRight: 5,
        marginLeft: 3
    },
    buttonTrash: {
        backgroundColor: colors.gray[300],
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        width: 36,
        height: 36,
        position: 'absolute',
        right: 10,
        top: 10
    }
})