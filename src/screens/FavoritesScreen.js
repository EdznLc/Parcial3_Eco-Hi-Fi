import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function FavoritesScreen({ favorites, setFavorites, navigation }) {
    const handleRemoveFavorite = (id) => {
        setFavorites(favorites.filter(fav => fav.id !== id));
    };

    const handleClearAll = () => {
        Alert.alert(
            "Limpiar favoritos",
            "¿Estás seguro de que deseas eliminar todos los favoritos?",
            [
                { text: "Cancelar", onPress: () => {}, style: "cancel" },
                {
                    text: "Eliminar",
                    onPress: () => {
                        setFavorites([]);
                    },
                    style: "destructive",
                },
            ]
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={favorites}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.favoriteCard}
                        onPress={() => navigation.navigate("ProductDetail", {
                            name: item.name,
                            price: item.price,
                            image: item.image,
                            description: item.description
                        })}
                    >
                        <Image source={item.image} style={styles.image} />
                        <View style={styles.info}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.description} numberOfLines={2}>
                                {item.description}
                            </Text>
                            <Text style={styles.price}>${item.price}</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.deleteButton}
                            onPress={() => handleRemoveFavorite(item.id)}
                        >
                            <Ionicons name="close-circle" size={28} color="#1976d2" />
                        </TouchableOpacity>
                    </TouchableOpacity>
                )}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <Ionicons name="heart-outline" size={70} color="#90caf9" />
                        <Text style={styles.emptyText}>
                            No tienes favoritos aún
                        </Text>
                        <Text style={styles.emptySubtext}>
                            Explora nuestros productos y añade tus favoritos
                        </Text>
                    </View>
                }
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e3f2fd",
    },
    favoriteCard: {
        backgroundColor: "#fff",
        marginHorizontal: 12,
        marginVertical: 10,
        borderRadius: 12,
        paddingVertical: 12,
        paddingHorizontal: 12,
        flexDirection: "row",
        alignment: "center",
        elevation: 3,
        shadowColor: '#1565c0',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.12,
        shadowRadius: 4,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 8,
        backgroundColor: "#bbdefb",
    },
    info: {
        flex: 1,
        marginHorizontal: 12,
        justifyContent: "center",
    },
    name: {
        fontSize: 16,
        fontWeight: "700",
        color: "#1565c0",
    },
    description: {
        fontSize: 12,
        color: "#64748b",
        marginTop: 4,
        lineHeight: 16,
    },
    price: {
        fontSize: 16,
        fontWeight: "700",
        color: "#1976d2",
        marginTop: 6,
    },
    deleteButton: {
        justifyContent: "center",
        alignItems: "center",
    },
    emptyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 80,
    },
    emptyText: {
        fontSize: 18,
        fontWeight: "600",
        color: "#90caf9",
        marginTop: 16,
    },
    emptySubtext: {
        fontSize: 14,
        color: "#64b5f6",
        marginTop: 8,
        textAlign: "center",
        paddingHorizontal: 20,
    },
    listContainer: {
        paddingVertical: 12,
        paddingBottom: 20,
    },
});
