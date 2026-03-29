import React from "react";
import { View, Text, Button, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import produ1 from "../../assets/produ1.jpg";
import produ2 from "../../assets/produ3.jpg";

const products = [
    { id: "1", name: "kz zsn pro", price: "500", image: produ1, description: "Monitor intrauditivo (IEM) híbrido de entrada. Cuenta con una arquitectura de 1 driver dinámico (DD) de 10mm y 1 balanced armature (BA) 30095. Presenta una firma de sonido en 'V' pronunciada con excelente extensión en agudos." },
    { id: "2", name: "Truthear Zero Red", price: "1200", image: produ2, description: "IEM de doble driver dinámico (10mm para graves + 7.8mm para medios/agudos) con red de crossover pasivo implementada mediante tubos acústicos de resina DLP impresos en 3D." }
];

export default function HomeScreen({ navigation }) {
    return(
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <Image
                source={require('../../assets/logo.png')}
                style={styles.logo}
            />
            <Image
                source={require('../../assets/banner3.jpeg')}
                style={styles.banner}
            />
            
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>⭐ Destacados</Text>
                <View style={styles.productsPreview}>
                    {products.map((product) => (
                        <TouchableOpacity 
                            key={product.id}
                            style={styles.productCard}
                            onPress={() => navigation.navigate("ProductDetail", {
                                name: product.name,
                                price: product.price,
                                image: product.image,
                                description: product.description
                            })}
                        >
                            <Image source={product.image} style={styles.productImage} />
                            <Text style={styles.productName}>{product.name}</Text>
                            <Text style={styles.productPrice}>${product.price}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
            
            <Image
                source={require("../../assets/banner2.webp")}
                style={styles.banner}
            />
            
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.buttonPrimary} onPress={() => navigation.navigate("ProductList")}>
                    <Ionicons name="list" size={20} color="#fff" />
                    <Text style={styles.buttonText}>  Ver Catálogo</Text>
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
    logo:{
        width:80,
        height:80,
        resizeMode:"contain",
        marginTop: 10,
        marginBottom: 10,
        alignSelf: 'center',
    },
    banner:{
        width:"90%",
        height:150,
        alignSelf:"center",
        borderRadius:16,
        marginTop:20,
        marginBottom: 10,
    },
    sectionContainer: {
        marginHorizontal: 16,
        marginVertical: 16,
    },
    sectionTitle:{
        fontSize:20,
        fontWeight:"700",
        color:"#1565c0",
        marginBottom:16,
    },
    productsPreview:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom: 16,
    },
    productCard:{
        width:"48%",
        backgroundColor:"#fff",
        borderRadius:12,
        overflow:"hidden",
        elevation: 4,
        shadowColor: '#1565c0',
        shadowOpacity: 0.12,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
    },
    productImage:{
        width:"100%",
        height:120,
        backgroundColor:"#bbdefb"
    },
    productName:{
        fontSize:14,
        fontWeight:"600",
        color:"#1565c0",
        padding: 10,
        textAlign: "center",
    },
    productPrice:{
        fontSize:16,
        fontWeight:"700",
        color:"#1976d2",
        paddingHorizontal: 10,
        paddingBottom: 10,
        textAlign: "center",
    },
    buttonsContainer:{
        marginHorizontal: 16,
        marginVertical: 16,
        gap: 12,
    },
    buttonPrimary:{
        backgroundColor:"#1976d2",
        paddingVertical:14,
        paddingHorizontal:24,
        borderRadius:12,
        alignItems:"center",
        flexDirection: "row",
        justifyContent: "center",
        elevation: 3,
        shadowColor: '#1565c0',
        shadowOpacity: 0.15,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
    },
    buttonText:{
        color:"#fff",
        fontSize:16,
        fontWeight:"600"
    },
});
