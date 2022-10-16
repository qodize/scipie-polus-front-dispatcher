import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Order, Transport} from "../types/types"
import OrderList from "../components/OrderList";
import TransportList from "../components/TransportList";
import TransportSort from "../components/TransportSort";



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

    var useUsers = transports

    const [selectedOption, setSelectedOption] = useState<String>();

    const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedOption(value);
    };

    if(selectedOption === "1"){
        let crans:Transport[] = []

        for(let i = 0;i<transports.length;i++) {
            if(transports[i].type.startsWith('Кран')){
                crans.push(transports[i])
            }
        }
        useUsers = crans

    } else if(selectedOption === "3"){
        let loaders:Transport[] = []

        for(let i = 0;i<transports.length;i++) {
            if(transports[i].type.startsWith('Погрузчик')){
                loaders.push(transports[i])
            }
        }
        useUsers = loaders
    } else if(selectedOption === "2"){
        let autoTowers:Transport[] = []

        for(let i = 0;i<transports.length;i++) {
            if(transports[i].type.startsWith('Автовышка')){
                autoTowers.push(transports[i])
            }
        }
        useUsers = autoTowers
    }

    return (
        <div className="mt-10">
            <TransportSort selectChange={selectChange}/>
            <TransportList transports={useUsers}/>
        </div>
    )
}
