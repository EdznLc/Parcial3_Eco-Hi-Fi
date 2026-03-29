import React, { useMemo } from "react";
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CartScreen({cart, setCart}) {
    // Agrupar productos con mismo ID para evitar duplicados
    const groupedCart = useMemo(() => {
        const grouped = {};
        cart.forEach((item) => {
            const key = item.name;
            if (grouped[key]) {
                grouped[key].quantity += 1;
            } else {
                grouped[key] = { ...item, quantity: 1 };
            }
        });
        return Object.values(grouped);
    }, [cart]);

    const total = groupedCart.reduce(
        (sum, item) => sum + parseFloat(item.price) * item.quantity,
        0
    );

    const handleRemoveProduct = (productName) => {
        const newCart = cart.filter((item) => item.name !== productName);
        setCart(newCart);
    };

    const handleRemoveOne = (productName) => {
        const index = cart.findIndex((item) => item.name === productName);
        if (index !== -1) {
            const newCart = [...cart];
            newCart.splice(index, 1);
            setCart(newCart);
        }
    };

    const handleClearCart = () => {
        Alert.alert(
            "Vaciar carrito",
            "¿Estás seguro de que deseas eliminar todos los productos?",
            [
                { text: "Cancelar", onPress: () => {}, style: "cancel" },
                {
                    text: "Eliminar",
                    onPress: () => setCart([]),
                    style: "destructive",
                },
            ]
        );
    };

    return(
        <View style={styles.container}>

            <FlatList 
            data={groupedCart}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({item}) => (
                <View style={styles.card}>
                    <Image source={item.image} style={styles.image}/>
                    <View style={styles.info}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.priceText}>${item.price}</Text>
                        <View style={styles.quantityContainer}>
                            <TouchableOpacity
                                style={styles.quantityButton}
                                onPress={() => handleRemoveOne(item.name)}
                            >
                                <Ionicons name="remove" size={18} color="#fff" />
                            </TouchableOpacity>
                            <Text style={styles.quantity}>{item.quantity}</Text>
                            <View style={styles.quantityButtonEmpty} />
                        </View>
                    </View>
                    <TouchableOpacity
                        style={styles.deleteBtn}
                        onPress={() => handleRemoveProduct(item.name)}
                    >
                        <Ionicons name="trash" size={20} color="#e74c3c" />
                    </TouchableOpacity>
                </View>
            )}
            ListEmptyComponent={
                <View style={styles.emptyContainer}>
                    <Ionicons name="cart" size={60} color="#bdc3c7" />
                    <Text style={styles.emptyText}>Tu carrito está vacío</Text>
                    <Text style={styles.emptySubtext}>Agrega productos para comenzar</Text>
                </View>
            }
            contentContainerStyle={styles.listContainer}
            />
            
            {cart.length > 0 && (
                <View style={styles.footer}>
                    <View style={styles.totalContainer}>
                        <Text style={styles.totalLabel}>Total:</Text>
                        <Text style={styles.totalAmount}>${total.toFixed(2)}</Text>
                    </View>
                    <TouchableOpacity style={styles.buttonClear} onPress={handleClearCart}>
                        <Ionicons name="trash-outline" size={18} color="#fff" />
                        <Text style={styles.buttonText}>  Vaciar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonPay}>
                        <Ionicons name="card" size={18} color="#fff" />
                        <Text style={styles.buttonText}>  Pagar</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#e3f2fd",
    },
    card:{
        flexDirection:"row",
        backgroundColor:"#fff",
        borderRadius:12,
        marginHorizontal: 12,
        marginVertical: 10,
        paddingVertical: 12,
        paddingHorizontal: 12,
        elevation:4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    image:{
        width:80,
        height:80,
        borderRadius: 8,
        backgroundColor: "#f0f0f0",
    },
    info:{
        flex:1,
        paddingHorizontal:12,
        justifyContent:"space-between",
    },
    name:{
        fontSize:15,
        fontWeight:"700",
        color:"#1565c0"
    },
    priceText:{
        fontSize:14,
        color:"#1976d2",
        marginTop:4,
        fontWeight:"600"
    },
    quantityContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 6,
    },
    quantityButton: {
        backgroundColor: "#1976d2",
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    quantityButtonEmpty: {
        width: 30,
    },
    quantity: {
        fontSize: 14,
        fontWeight: "700",
        color: "#2c3e50",
        marginHorizontal: 12,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 60,
    },
    emptyText:{
        fontSize:18,
        color:"#bdc3c7",
        textAlign:"center",
        marginTop:20,
        fontWeight: "600",
    },
    emptySubtext: {
        fontSize: 14,
        color: "#95a5a6",
        marginTop: 8,
    },
    listContainer:{
        paddingBottom:20,
    },
    footer: {
        backgroundColor: "#fff",
        paddingHorizontal: 12,
        paddingVertical: 14,
        borderTopWidth: 1,
        borderTopColor: "#ecf0f1",
    },
    totalContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 12,
    },
    totalLabel:{
        fontSize:16,
        fontWeight:"600",
        color:"#2c3e50"
    },
    totalAmount:{
        fontSize:24,
        fontWeight:"700",
        color:"#1976d2"
    },
    deleteBtn: {
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 8,
    },
    buttonClear:{
        backgroundColor:"#90caf9",
        paddingVertical:12,
        paddingHorizontal:16,
        borderRadius:8,
        alignItems:"center",
        flexDirection: "row",
        marginBottom: 10,
        justifyContent: "center",
    },
    buttonPay:{
        backgroundColor:"#0d47a1",
        paddingVertical:12,
        paddingHorizontal:16,
        borderRadius:8,
        alignItems:"center",
        flexDirection: "row",
        justifyContent: "center",
    },
    buttonText:{
        color:"#fff",
        fontSize:16,
        fontWeight:"600"
    }
});