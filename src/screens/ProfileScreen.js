import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ProfileScreen() {

    return(
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
                <Image 
                    source={require("../../assets/logo.png")}
                    style={styles.image}
                />
                <Text style={styles.name}>Usuario Demo</Text>
                <Text style={styles.email}>usuario@correo.com</Text>
            </View>

            <View style={styles.menuContainer}>
                <TouchableOpacity style={styles.menuItem}>
                    <Ionicons name="settings" size={24} color="#1565c0" />
                    <Text style={styles.menuText}>Configuración</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <Ionicons name="document-text" size={24} color="#1565c0" />
                    <Text style={styles.menuText}>Mis Pedidos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <Ionicons name="location" size={24} color="#1565c0" />
                    <Text style={styles.menuText}>Direcciones</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <Ionicons name="help-circle" size={24} color="#1565c0" />
                    <Text style={styles.menuText}>Ayuda</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.logoutButton}>
                <Ionicons name="log-out" size={20} color="#fff" />
                <Text style={styles.logoutText}>Cerrar Sesión</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#e3f2fd",
    },
    header: {
        backgroundColor: "#fff",
        paddingVertical: 30,
        paddingHorizontal: 16,
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#bbdefb",
    },
    image:{
        width:80,
        height:80,
        borderRadius:40,
        marginBottom:12,
        resizeMode:"center",
        backgroundColor: "#bbdefb",
    },
    name:{
        fontSize:22,
        fontWeight:"700",
        color:"#1565c0",
        marginBottom: 4,
    },
    email:{
        fontSize:14,
        color:"#64748b",
    },
    menuContainer: {
        marginHorizontal: 16,
        marginVertical: 16,
        backgroundColor: "#fff",
        borderRadius: 12,
        overflow: "hidden",
        elevation: 2,
        shadowColor: '#1565c0',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
    },
    menuItem: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#f0f0f0",
    },
    menuText: {
        flex: 1,
        fontSize: 16,
        fontWeight: "600",
        color: "#1565c0",
        marginLeft: 14,
    },
    logoutButton: {
        backgroundColor: "#1976d2",
        marginHorizontal: 16,
        marginVertical: 20,
        paddingVertical: 12,
        borderRadius: 12,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        elevation: 3,
        shadowColor: '#1565c0',
        shadowOpacity: 0.2,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
    },
    logoutText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "700",
        marginLeft: 8,
    }
});