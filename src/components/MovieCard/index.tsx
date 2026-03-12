import { colors } from "@/theme/colors";
import { fontFamily } from "@/theme/fontFamily";
import { Star, StarIcon } from "phosphor-react-native";
import { Image, StyleSheet, Text, View } from "react-native";

export default function MovieCard() {
    return (
        <View style={styles.container}>

            <Image style={styles.backgroundImage}
                source={{uri: 'https://design.google/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fgd-prod%2Fimages%2Fa910d418-7123-4bc4-aa3b-ef7e25e74ae6.799a99c1196c2fd4.webp&w=3840&q=75'}}
            />

            <View style={styles.containerText}>
                <Text style={styles.name}>
                    Missão: Impossível - O Acerto Final
                </Text>
                
                <View style={{flexDirection: 'row'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <StarIcon size={10} color={colors.gray[600]} weight="fill" />
                        <Text style={styles.text}>
                            7,5
                        </Text>
                    </View>

                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={styles.point} />
                        <Text style={styles.text}>
                            2025
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 169,
        height: 222,
        position: 'relative'
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
        backgroundColor: colors.gray[600]
    },
    text: {
        color: colors.gray[600],
        marginRight: 5,
        marginLeft: 3
    }
})