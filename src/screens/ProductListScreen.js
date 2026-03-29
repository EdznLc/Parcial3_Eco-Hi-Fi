
import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ProductCard from "../components/ProductCard";
// Importa las imágenes de forma estática
import produ1 from "../../assets/produ1.jpg";
import produ2 from "../../assets/produ3.jpg";
import produ3 from "../../assets/produ2.jpg";
import produ4 from "../../assets/produ4.jpg";

export default function ProductListScreen({ navigation, favorites, setFavorites }) {
    const products = [
        {
            id: "1",
            name: "kz zsn pro",
            price: "500",
            image: produ1,
            description: "Monitor intrauditivo (IEM) híbrido de entrada. Cuenta con una arquitectura de 1 driver dinámico (DD) de 10mm y 1 balanced armature (BA) 30095. Presenta una firma de sonido en 'V' pronunciada con excelente extensión en agudos. Su alta sensibilidad (112 dB) y baja impedancia (24Ω) garantizan una fácil amplificación desde cualquier dispositivo fuente. Construcción duradera con placa frontal de aleación de zinc y cavidad de resina importada."
        },
        {
            id: "2",
            name: "Truthear Zero Red",
            price: "1200",
            image: produ2,
            description:"IEM de doble driver dinámico (10mm para graves + 7.8mm para medios/agudos) con red de crossover pasivo implementada mediante tubos acústicos de resina DLP impresos en 3D. Afinado meticulosamente según el target de Crinacle para una respuesta neutral con un subgrave excepcionalmente limpio. Incluye un adaptador de impedancia adicional de 10Ω para incrementar la respuesta en bajas frecuencias (+3dB) sin introducir distorsión."
        },
        {
            id: "3",
            name: "Truthear Hexa",
            price: "1800",
            image: produ3,
            description:"Configuración híbrida avanzada de 4 drivers (1DD con diafragma de LCP y suspensión de poliuretano + 3BA custom). Utiliza un diseño de crossover híbrido (físico y electrónico) para lograr una firma de sonido estrictamente neutral y de referencia. Destaca por su alta resolución, precisión analítica y excelente manejo de transitorios, minimizando el sangrado de graves hacia las frecuencias medias."
        },
        {
            id: "4",
            name: "Moondrop Blessing 3",
            price: "8500",
            image: produ4,
            description:"Monitor de grado audiófilo con arquitectura acústica de 6 drivers (2DD + 4BA). Implementa el innovador módulo HODDDUS: dos drivers dinámicos de 10mm con diafragma de papel dispuestos horizontalmente y en oposición magnética. Esto resulta en un rango dinámico masivo y una distorsión armónica total (THD) inferior al 0.5%. Filtrado de frecuencias mediante conductos acústicos de alta precisión impresos en 3D y placa frontal de acero inoxidable mecanizado por CNC."
        },
    ];

    const handleFavoriteToggle = (product) => {
        const isFavorite = favorites.some(fav => fav.id === product.id);
        if (isFavorite) {
            setFavorites(favorites.filter(fav => fav.id !== product.id));
        } else {
            setFavorites([...favorites, product]);
        }
    };

    return(
        <View style={styles.container}>
            <FlatList
            data={products}
            keyExtractor={(item)=>item.id}
            renderItem={({item}) => (
                <ProductCard 
                name={item.name} 
                price={item.price} 
                image={item.image} 
                description={item.description}
                navigation={navigation}
                isFavorite={favorites.some(fav => fav.id === item.id)}
                onFavoriteToggle={() => handleFavoriteToggle(item)}
                />
            )}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
            />
        </View>
    );
}


const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e3f2fd',
        paddingHorizontal: 16,
        paddingTop: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: '700',
        color: '#1565c0',
        marginBottom: 18,
        alignSelf: 'center',
    },
    listContainer: {
        paddingBottom: 20,
    }
});