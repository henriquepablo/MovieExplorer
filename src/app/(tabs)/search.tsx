import { ListFilmsType } from "@/@types/ListFilmsType";
import MovieCard from "@/components/MovieCard";
import api from "@/service/api";
import { colors } from "@/theme/colors";
import { fontFamily } from "@/theme/fontFamily";
import { ListBulletsIcon, MagnifyingGlassIcon } from "phosphor-react-native";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";

export default function Search() {

    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [search, setSearch] = useState<string>('');
    const [films, setFilms] = useState<ListFilmsType[]>([]);


    const searchFilm = async () => {
        const films = await api.get(`search/movie?query=${search}&language=pt-BR`)
        setFilms(films.data.results);
    }


    useEffect(() => {

        if (search.trim().length === 0) {
            setFilms([]);
            return;
        }

        const debounce = setTimeout(() => searchFilm(), 500);
        return () => clearInterval(debounce);

    }, [search]);

    return (
        <View style={styles.container}>
            <MagnifyingGlassIcon color={colors.purple.light} size={40} />

            <Text style={styles.title}>
                Buscar
            </Text>

            <Text style={styles.description}>
                Encontre filmes buscando pelo título
            </Text>


            <View style={[
                styles.containerInput,
                isFocused && styles.containerInputFocused
            ]}
            >
                <MagnifyingGlassIcon color={isFocused ? colors.purple.light : colors.gray[500]} />
                <TextInput
                    placeholder="Pesquisar filme"
                    placeholderTextColor={colors.gray[500]}
                    style={styles.input}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onChangeText={setSearch}
                />
            </View>

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
                ListEmptyComponent={() => (
                    <View style={styles.containerEmpty}>
                        <ListBulletsIcon color={colors.gray[400]} size={44} />

                        <Text style={styles.containerEmptyText}>
                            Nenhuma pesquisa realizada
                        </Text>
                    </View>
                )}
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
    },
    containerInput: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 0.2,
        borderColor: colors.gray[500],
        height: 48,
        borderRadius: 6,
        paddingHorizontal: 10,
        gap: 6,
        marginTop: 20
    },
    containerInputFocused: {
        borderColor: colors.purple.base,
        borderWidth: 2,
    },
    input: {
        flex: 1,
        color: colors.white,
        fontSize: 16
    },
    containerEmpty: {
        marginTop: 40,
        alignItems: 'center'
    },
    containerEmptyText: {
        color: colors.gray[500],
        fontFamily: fontFamily.NunitoSansRegular,
        fontSize: 16
    }
})