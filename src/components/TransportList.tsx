import React, {FC} from 'react';
import {Transport} from "../types/types";
import TransportItem from "./TransportItem";

interface OrderListProps {
    transports: Transport[];
}

const TransportList: FC<OrderListProps> = ({transports}) => {
    return (
        <div className="grid grid-cols-1 gap-4">
            {transports.map(transport =>
                <TransportItem transport={transport}/>
            )}
        </div>
    );
}

export default TransportList;