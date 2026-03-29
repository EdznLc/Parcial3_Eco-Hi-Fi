import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ProductDetailScreen({ route, navigation, cart, setCart}) {
    const { name, price, image, description } = route.params;

    const handleAddToCart = () => {
        const newProduct = {name, price, image};
        setCart([...cart, newProduct]);
        Alert.alert("✅ Éxito", "Producto agregado al carrito", [
            { text: "OK", onPress: () => navigation.goBack() }
        ]);
    };

    return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
            <Image
                source={image}
                style={styles.image}
            />
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="chevron-back" size={28} color="#fff" />
            </TouchableOpacity>
        </View>

        <View style={styles.infoContainer}>
            <Text style={styles.name}>{name}</Text>
            
            <View style={styles.priceContainer}>
                <Text style={styles.priceLabel}>Precio:</Text>
                <Text style={styles.price}>${price}</Text>
            </View>
            
            <Text style={styles.descriptionLabel}>Descripción</Text>
            <Text style={styles.description}>{description}</Text>

            <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
                <Ionicons name="cart" size={22} color="#fff" />
                <Text style={styles.buttonText}>   Agregar al carrito</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#e3f2fd"
    },
    imageContainer: {
        position: "relative",
        width: "100%",
        height: 320,
        backgroundColor: "#f0f0f0",
    },
    image:{
        width:"100%",
        height: "100%",
        backgroundColor: '#f0f0f0',
    },
    backButton: {
        position: "absolute",
        top: 40,
        left: 16,
        backgroundColor: "rgba(0,0,0,0.5)",
        borderRadius: 25,
        padding: 8,
    },
    infoContainer:{
        padding:20,
        backgroundColor: '#fff',
        margin: 16,
        marginTop: -20,
        borderRadius: 20,
        elevation: 8,
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 6 },
    },
    name:{
        fontSize:28,
        fontWeight:"700",
        color:"#1565c0",
        marginBottom: 12,
    },
    priceContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16,
        paddingBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#90caf9",
    },
    priceLabel: {
        fontSize:16,
        fontWeight:"600",
        color:"#1565c0",
        marginRight: 12,
    },
    price:{
        fontSize:32,
        color:"#1976d2",
        fontWeight:"700"
    },
    descriptionLabel: {
        fontSize:16,
        fontWeight:"700",
        color:"#1565c0",
        marginBottom: 10,
    },
    description:{
        marginBottom:20,
        fontSize:15,
        color:"#555",
        lineHeight:24
    },
    button:{
        backgroundColor:"#1976d2",
        padding:16,
        borderRadius:12,
        marginTop:10,
        alignItems:"center",
        elevation: 4,
        shadowColor: '#1565c0',
        shadowOpacity: 0.3,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
        flexDirection: "row",
        justifyContent: "center",
    },
    buttonText:{
        color:"#fff",
        fontSize:18,
        fontWeight:"700"
    }
});