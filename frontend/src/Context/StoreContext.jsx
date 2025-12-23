
import { createContext, useEffect, useState } from "react";
// import { food_list } from "../assets/Assets";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});

    const url = "https://food-delivery-backend-ea4q.onrender.com";
    const [token, setToken] = useState('');
    const [food_list, setFoodList] = useState([]);

    const addToCart = async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }

        if (token) {
            await axios.post(
                url + "/api/cart/add",
                { itemId },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

        }

    }

    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        if (token) {
            await axios.post(
                url + "/api/cart/remove",
                { itemId },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

        }
    }

    const getTotalCartAmnt = () => {
        let totalAmount = 0;
        for (let item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                if (itemInfo && itemInfo.price) {
                    totalAmount += Number(itemInfo.price * cartItems[item]);
                }
            }
        }
        return totalAmount;

    }

    const fetchFoodList = async () => {
        const response = await axios.get(url + "/api/food/list");
        setFoodList(response.data.data);
    }

    const loadCardData = async (token) => {
        const response = await axios.post(
            url + "/api/cart/get",
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        setCartItems(response.data.cartData || {});
    }




    useEffect(() => {
        if (localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"));
        }

        async function loadData() {
            await fetchFoodList();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"));
                await loadCardData(localStorage.getItem("token"))
            }
        }
        loadData();
    }, []);

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmnt,
        url,
        token,
        setToken
    }

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>

    )
}

export default StoreContextProvider;
