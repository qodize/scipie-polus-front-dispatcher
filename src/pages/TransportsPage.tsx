import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Order, Transport} from "../types/types"
import OrderList from "../components/OrderList";
import TransportList from "../components/TransportList";



export function TransportsPage() {
    const [transports, setTransports] = useState<Transport[]>([]);

    async function fetchTransports() {
        try {
            const query: string = ('https://scipie.ru/api/polus/transports/available/')
            const response = await axios.get<Transport[]>(query);
            setTransports(response.data)
        } catch (e) {
            alert(e)
        }
    }

    useEffect(() => {fetchTransports()}, []);

    return (
        <div>
            <TransportList transports={transports}/>
        </div>
    )
}
