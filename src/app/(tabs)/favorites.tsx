import { ListFilmsType } from "@/@types/ListFilmsType";
import MovieCard from "@/components/MovieCard";
import { colors } from "@/theme/colors";
import { fontFamily } from "@/theme/fontFamily";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "expo-router";
import { BookmarksIcon } from "phosphor-react-native";
import { useCallback, useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function Favorites() {

    const [films, setFilms] = useState<ListFilmsType[]>();


    const deleteFilmFavorited = async (id: number) => {
        const storage = await AsyncStorage.getItem("@favorites");

        let films: ListFilmsType[] = storage ? JSON.parse(storage) : [];

        const updatedFilms = films.filter((item) => item.id !== id);

        await AsyncStorage.setItem("@favorites", JSON.stringify(updatedFilms));

        setFilms(updatedFilms);
    };

    useFocusEffect(
        useCallback(() => {

            const loadFavorites = async () => {
                const storage = await AsyncStorage.getItem("@favorites");

                setFilms(storage ? JSON.parse(storage) : []);
            }

            loadFavorites();

        }, [])
    );

    return (
        <View style={styles.container}>
            <BookmarksIcon color={colors.purple.light} size={40} />

            <Text style={styles.title}>
                Favoritos
            </Text>

            <Text style={styles.description}>
                Sua lista de filmes salvos
            </Text>

            <FlatList
                data={films}
                renderItem={(film) => (
                    <MovieCard
                        key={film.item.id}
                        id={film.item.id}
                        title={film.item.title}
                        poster_path={film.item.poster_path}
                        release_date={film.item.release_date}
                        vote_average={film.item.vote_average}
                        screen_favorite
                        deleteFavorite={() => deleteFilmFavorited(film.item.id)}
                    />
                )}
                numColumns={2}
                contentContainerStyle={
                    {
                        justifyContent: 'center',
                        alignItems: 'center',
                    }
                }
                showsVerticalScrollIndicator={false}
            />
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