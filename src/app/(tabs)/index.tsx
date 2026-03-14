import { ListFilmsType } from "@/@types/ListFilmsType";
import MovieCard from "@/components/MovieCard";
import api from "@/service/api";
import { colors } from "@/theme/colors";
import { fontFamily } from "@/theme/fontFamily";
import { FilmSlateIcon } from "phosphor-react-native";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function Index() {

    const [films, setFilms] = useState<ListFilmsType[]>([]);

    useEffect(() => {

        const loadFilms = async () => {
            const films = await api.get('movie/popular?language=pt-BR');
            setFilms(films.data.results);
        }

        loadFilms();
    }, []);

    return (
        <View style={styles.container}>
            <FilmSlateIcon color={colors.purple.light} size={40} />
            
            <Text style={styles.title}>
                Populares
            </Text>

            <Text style={styles.description}>
                Explore os filmes populares hoje e encontre coisas novas para assistir!
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
        fontSize: 26,
    },
    description: {
        color: colors.gray[700],
        fontFamily: fontFamily.NunitoSansRegular,
        fontSize: 16,
        marginBottom: 20
    }
})