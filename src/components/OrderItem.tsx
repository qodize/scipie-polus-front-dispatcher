import React, {FC, useState} from 'react';
import {Order} from "../types/types";

interface OrderItemProps{
    order: Order;
}

const UserItem: FC<OrderItemProps> = ({order}) => {
    const order_string = order.start +' '+ order.end +' '+ order.transpport_type +' '+ order.status
    return (
            <div className="bg-amber-500 w-[25vw] h-[25vw] hover:bg-amber-600 pt-4  border-2 rounded-2xl m-auto text-center pb-3">
                {order_string}
                {/*/!*<button onClick={buttonHandler} className="w-full h-full"></button>*!/*/}
            </div>
    );
};

export default UserItem