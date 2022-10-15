import React, {FC, useState} from 'react';
import {Transport} from "../types/types";

interface TransportItemProps{
    transport: Transport;
}

const TransportItem: FC<TransportItemProps> = ({transport}) => {
    const transport_string = transport.type +' '+ transport.amount
    return (
        <div className="bg-amber-500 w-[25vw] h-[25vw] hover:bg-amber-600 pt-4  border-2 rounded-2xl m-auto text-center pb-3">
            {transport_string}
            {/*/!*<button onClick={buttonHandler} className="w-full h-full"></button>*!/*/}
        </div>
    );
};

export default TransportItem