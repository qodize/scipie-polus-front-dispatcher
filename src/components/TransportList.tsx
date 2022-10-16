import React, {FC} from 'react';
import {Transport} from "../types/types";
import TransportItem from "./TransportItem";

interface OrderListProps {
    transports: Transport[];
}

const TransportList: FC<OrderListProps> = ({transports}) => {
    return (
        <div className="mx-72 mb-10">
            <div className="grid grid-cols-3 gap-4 place-content-center">
                {transports.map(transport =>
                    <TransportItem transport={transport}/>
                )}
            </div>
        </div>
    );
}

export default TransportList;