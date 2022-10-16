import React from 'react';
import {Link} from "react-router-dom";

export function Navigation() {
    return (
        <nav className="h-[150px] flex justify-between px-5 py-4 bg-white text-black">
            <img className="h-[150px] w-[600px]" src="https://media.discordapp.net/attachments/968081638963699752/1030931486343446669/1.png?width=1440&height=356"/>
            <span className="font-bold text-2xl mt-16 mr-56">
                <Link className="mr-16 hover:text-amber-400" to="/">ЗАКАЗЫ</Link>
                <span>|</span>
                <Link className="ml-16 hover:text-amber-400" to="/transports"> ТРАНСПОРТ</Link>
            </span>
        </nav>
    );
};

