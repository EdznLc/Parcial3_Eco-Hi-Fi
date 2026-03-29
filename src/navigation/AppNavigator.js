import React from "react";
import { useState } from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ProductListScreen from "../screens/ProductListScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import CartScreen from "../screens/CartScreen";
import ProfileScreen from "../screens/ProfileScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Ionicons} from "@expo/vector-icons"

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack({cart, setCart, favorites, setFavorites}){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    title:"Inicio",
                    headerStyle: {
                        backgroundColor: "#1565c0",
                    },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        fontWeight: "700",
                        fontSize: 18,
                    }
                }}
            />
            <Stack.Screen
                name="ProductList"
                options={{
                    title:"Productos",
                    headerStyle: {
                        backgroundColor: "#1565c0",
                    },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        fontWeight: "700",
                        fontSize: 18,
                    }
                }}
            >
                {(props) => (
                    <ProductListScreen
                    {...props}
                    favorites={favorites}
                    setFavorites={setFavorites}
                    />
                )}
            </Stack.Screen>
            <Stack.Screen
                name="ProductDetail"
                options={{
                    title:"Detalles del producto",
                    headerStyle: {
                        backgroundColor: "#1565c0",
                    },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        fontWeight: "700",
                        fontSize: 18,
                    }
                }}
            >
                {(props) => (
                    <ProductDetailScreen
                    {...props}
                    cart={cart}
                    setCart={setCart}
                    />
                )}
            </Stack.Screen>
        </Stack.Navigator>
    );  
}

function FavoritesStack({cart, setCart, favorites, setFavorites}){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
                name="FavoritesScreen"
                options={{title:"Mis Favoritos"}}
            >
                {(props) => (
                    <FavoritesScreen
                    {...props}
                    favorites={favorites}
                    setFavorites={setFavorites}
                    />
                )}
            </Stack.Screen>
            <Stack.Screen
                name="ProductDetail"
                options={{title:"Detalles del producto"}}
            >
                {(props) => (
                    <ProductDetailScreen
                    {...props}
                    cart={cart}
                    setCart={setCart}
                    />
                )}
            </Stack.Screen>
        </Stack.Navigator>
    );  
}

function CartStack({cart, setCart, favorites, setFavorites}){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
                name="CartScreen"
                options={{title:"Carrito"}}
            >
                {(props) => (
                    <CartScreen
                    {...props}
                    cart={cart}
                    setCart={setCart}
                    />
                )}
            </Stack.Screen>
            <Stack.Screen
                name="ProductDetail"
                options={{title:"Detalles del producto"}}
            >
                {(props) => (
                    <ProductDetailScreen
                    {...props}
                    cart={cart}
                    setCart={setCart}
                    />
                )}
            </Stack.Screen>
        </Stack.Navigator>
    );  
}

export default function AppNavigator({}){
    const [cart,setCart] = useState([]);
    const [favorites, setFavorites] = useState([]);
    
    return (
        <NavigationContainer>
            <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({color,size}) =>{
                    let iconName;
                    if (route.name === "Inicio"){
                        iconName = "home";
                    } else if(route.name === "Favoritos"){
                        iconName = "heart";
                    } else if(route.name === "Carrito"){
                        iconName = "cart";
                    } else if(route.name ==="Perfil"){
                        iconName = "person";
                    }
                    return <Ionicons name={iconName} size={size} color={color}/>;
                },
                tabBarActiveTintColor:"#1565c0",
                tabBarInactiveTintColor:"#90caf9",
                tabBarStyle: {
                    backgroundColor: "#fff",
                    borderTopWidth: 1,
                    borderTopColor: "#bbdefb",
                    paddingBottom: 5,
                    paddingTop: 5,
                },
                headerStyle: {
                    backgroundColor: "#1565c0",
                    height: 56,
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "700",
                    fontSize: 18,
                }
            })}
            >
                <Tab.Screen name="Inicio" options={{ 
                    headerShown: false,
                    title: "Inicio"
                }}>
                    {() => <HomeStack cart={cart} setCart={setCart} favorites={favorites} setFavorites={setFavorites}/>}
                </Tab.Screen>
                <Tab.Screen name="Favoritos" options={{ 
                    headerShown: true,
                    title: "Mis Favoritos",
                    headerStyle: {
                        backgroundColor: "#1565c0",
                        height: 90,
                    },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        fontWeight: "700",
                        fontSize: 22,
                    }
                }}>
                    {() => <FavoritesStack cart={cart} setCart={setCart} favorites={favorites} setFavorites={setFavorites}/>}
                </Tab.Screen>
                <Tab.Screen name="Carrito" options={{
                    title: "Carrito",
                    headerStyle: {
                        backgroundColor: "#1565c0",
                        height: 90,
                    },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        fontWeight: "700",
                        fontSize: 22,
                    }
                }}>
                    {() => <CartStack cart={cart} setCart={setCart} favorites={favorites} setFavorites={setFavorites}/>}
                </Tab.Screen>
                <Tab.Screen name="Perfil" component={ProfileScreen} options={{
                    title: "Mi Perfil",
                    headerStyle: {
                        backgroundColor: "#1565c0",
                        height: 90,
                    },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        fontWeight: "700",
                        fontSize: 22,
                    }
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}