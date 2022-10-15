import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Order} from "../types/types"
import OrderList from "../components/OrderList";


export function OrdersPage() {
    const [orders, setOrders] = useState<Order[]>([]);
    async function fetchOrders() {
        try {
            const query: string = ('https://scipie.ru/api/polus/orders/')
            const response = await axios.get<Order[]>(query);
            setOrders(response.data)
            console.log(orders)
        } catch (e) {
            alert(e)
        }
    }
    useEffect(() => {fetchOrders()});

    return (
        <div>
            <OrderList orders={orders}/>
        </div>
    )
};
