import api from "@/service/api";
import { colors } from "@/theme/colors";
import { fontFamily } from "@/theme/fontFamily";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router, useFocusEffect, useLocalSearchParams } from "expo-router";
import { ArrowLeftIcon, BookmarkSimpleIcon, StarIcon, YoutubeLogoIcon } from "phosphor-react-native";
import { useCallback, useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Details() {

    const { id } = useLocalSearchParams();
    const [name, setName] = useState<string>('');
    const [post, setPost] = useState<string>('');
    const [overview, setOverview] = useState<string>('');
    const [voteAverage, setVoteAverage] = useState<number>(0);
    const [releaseDate, setReleaseDate] = useState<string>('');
    const [runtime, setRuntime] = useState<string>("");


    function formatRuntime(minutes: number) {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;

        if (hours === 0) return `${mins}min`;

        return `${hours}h ${mins}min`;
    }

    const addFavorite = async () => {
        try {
            const storage = await AsyncStorage.getItem("@favorites");

            const favorites = storage ? JSON.parse(storage) : [];

            const alreadyExists = favorites.find((item: any) => item.id === id);

            if (alreadyExists) {
                console.log("Filme já favoritado");
                return;
            }

            favorites.push({
                id,
                title: name,
                release_date: releaseDate,
                vote_average: voteAverage,
                poster_path: post
            });

            await AsyncStorage.setItem("@favorites", JSON.stringify(favorites));

            console.log("Filme favoritado");
        } catch (error) {
            console.log("Erro ao salvar favorito", error);
        }
    }

    useFocusEffect(
        useCallback(() => {

            const loadDetailsFilm = async () => {

                const film = await api.get(`/movie/${id}?language=pt-BR`);
                setPost(film.data.backdrop_path);
                setName(film.data.title);
                setOverview(film.data.overview);
                setVoteAverage(film.data.vote_average);
                setReleaseDate(film.data.release_date);
                setRuntime(formatRuntime(film.data.runtime));
            }

            loadDetailsFilm();

        }, [id])
    );

    return (
        <View style={styles.container}>

            <View style={styles.containerImage}>
                <Image
                    style={styles.poster}
                    source={{ uri: `https://image.tmdb.org/t/p/original/${post}` }}
                />
                <TouchableOpacity style={styles.buttonBack} onPress={() => router.back()}>
                    <ArrowLeftIcon color={colors.gray[600]} />
                    <Text style={styles.buttonBackText}>
                        Voltar
                    </Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.title}>
                {name}
            </Text>

            <View style={styles.containerData}>
                <View>
                    <Text style={styles.data}>
                        Duração: {runtime}
                    </Text>
                    <Text style={styles.data}>
                        Lançamento: {releaseDate}
                    </Text>
                </View>
                <View>

                    <Text style={styles.data}>
                        <StarIcon color={colors.purple.light} weight="fill" size={16} />
                        {voteAverage.toFixed(1)} / 10
                    </Text>
                </View>
            </View>

            <Text style={styles.overview}>
                {overview}
            </Text>

            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.buttonFavorite} onPress={addFavorite}>
                    <BookmarkSimpleIcon color={colors.purple.light} />
                    <Text style={styles.buttonTrailerText}>
                        Favoritar
                    </Text>
                </TouchableOpacity>


            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.gray[200],
        padding: 20,
    },
    containerImage: {
        height: 200,
        width: '100%',
        position: 'relative'
    },
    buttonBack: {
        backgroundColor: colors.gray[300],
        justifyContent: "center",
        alignItems: "center",
        width: 92,
        height: 36,
        borderRadius: 6,
        flexDirection: 'row',
        position: 'absolute',
        top: 8,
        left: 8,
        gap: 5
    },
    buttonBackText: {
        color: colors.gray[600],
        fontFamily: fontFamily.NunitoSansBold,
        fontSize: 16
    },
    poster: {
        borderRadius: 10,
        height: '100%',
        width: "100%",
    },
    title: {
        fontFamily: fontFamily.RajdhaniBold,
        fontSize: 24,
        color: colors.gray[700],
        marginTop: 24
    },
    containerData: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    data: {
        fontFamily: fontFamily.NunitoSansRegular,
        fontSize: 15,
        color: colors.gray[700],
        marginTop: 5
    },
    overview: {
        fontFamily: fontFamily.NunitoSansRegular,
        fontSize: 16,
        color: colors.gray[600],
        textAlign: 'justify',
        marginTop: 16
    },
    containerButton: {
        flex: 1,
        flexDirection: 'row',
        gap: 8,
        alignItems: 'flex-end'
    },
    buttonFavorite: {
        height: 48,
        flex: 1,
        backgroundColor: colors.gray[300],
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: "center",
        flexDirection: 'row',
        gap: 5
    },
    buttonTrailerText: {
        color: colors.white,
        fontFamily: fontFamily.NunitoSansBold,
        fontSize: 16
    }
})