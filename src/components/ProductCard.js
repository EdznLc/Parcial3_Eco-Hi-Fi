import React, { useState } from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";
import {Ionicons} from "@expo/vector-icons";

export default function ProductCard({name, price, image, description, navigation, isFavorite = false, onFavoriteToggle = () => {}}){
    const [liked, setLiked] = useState(isFavorite);

    const handleFavoriteToggle = () => {
        setLiked(!liked);
        onFavoriteToggle();
    };

    return(
        <View style={styles.cardContainer}>
            <TouchableOpacity
            style={styles.card}
            onPress={() => 
                navigation.navigate("ProductDetail",{
                    name:name,
                    price:price,
                    image:image,
                    description:description,
                })
            }
            >
                <Image
                    source={image}
                    style={styles.image}
                />

                <View style={styles.infoContainer}>
                    <Text style={styles.productName}>{name}</Text>
                    <Text style={styles.productPrice}>${price}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.favoriteButton}
                onPress={handleFavoriteToggle}
            >
                <Ionicons
                    name={liked ? "heart" : "heart-outline"}
                    size={24}
                    color={liked ? "#e74c3c" : "#bdc3c7"}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles=StyleSheet.create({
    cardContainer: {
        marginBottom: 16,
        position: 'relative',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 16,
        overflow: 'hidden',
        elevation: 5,
        shadowColor: '#1565c0',
        shadowOpacity: 0.12,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
    },
    image: {
        width: '100%',
        height: 180,
        backgroundColor: '#bbdefb',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    infoContainer: {
        padding: 14,
        backgroundColor: '#fff',
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
    },
    productName: {
        fontSize: 17,
        fontWeight: '700',
        color: '#1565c0',
        marginBottom: 2,
    },
    productPrice: {
        fontSize: 16,
        color: '#1976d2',
        marginTop: 6,
        fontWeight: '700',
    },
    favoriteButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'rgba(255,255,255,0.95)',
        borderRadius: 20,
        padding: 8,
        elevation: 6,
        shadowColor: '#1565c0',
        shadowOpacity: 0.2,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
    }
});