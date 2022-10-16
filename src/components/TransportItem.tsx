import React, {FC, useState} from 'react';
import {Transport} from "../types/types";

interface TransportItemProps{
    transport: Transport;
}

const TransportItem: FC<TransportItemProps> = ({transport}) => {
    return (
        <div className="font-bold w-[20vw] h-[10vw] pt-12 border-4 border-2 rounded-2xl text-center">
            <p>{transport.type}</p>
            <p>Количество:{transport.amount}</p>
        </div>
    );
};

export default TransportItem