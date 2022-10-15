import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Order} from "../types/types"
import OrderList from "../components/OrderList";
import FilterBar from "../components/FilterBar";


export function OrdersPage() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [filter, setFilter] = useState<string>("Текущие");

    const selectFilter = (event: React.MouseEvent<HTMLButtonElement>) => {
        const value = event.currentTarget.textContent;
        setFilter(value?? "Текущие");
    };

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
    useEffect(() => {fetchOrders()}, []);
    var filteredOrders: Order[] = [];
    if (filter == 'Текущие') {
        var now = new Date(Date.now());
        for (let i = 0; i < orders.length; i++) {
            var d1: Date = new Date(orders[i].start)
            var d2: Date = new Date(orders[i].end)

            if (d1 < now && now < d2) {
                filteredOrders.push(orders[i]);
            }
        }
    } else if (filter == 'Конфликтные') {
        for (let i = 0; i < orders.length; i++) {
            if (orders[i].status === 'Отменён') {
                filteredOrders.push(orders[i]);
            }
        }
    } else {
        for (let i = 0; i < orders.length; i++) {
            filteredOrders.push(orders[i]);
        }
        filteredOrders.sort((a: Order, b: Order) => {
            var d1: Date = new Date(a.start)
            var d2: Date = new Date(b.start)
            if (d1 < d2) {
                return -1;
            } else {
                return 1;
            }
        })
    }
    return (
            <div>
                <FilterBar selectFilter={selectFilter}/>
                <OrderList orders={filteredOrders}/>
            </div>
        )
};
