import React from 'react';
import {Link} from "react-router-dom";

export function Navigation() {
    return (
        <nav className="h-[50px] flex justify-between px-5 py-4 bg-gray-500 text-white">
            <span className="font-bold">Полюс</span>
            <span>
                <Link to="/orders">Заказы</Link>
            </span>
        </nav>
    );
}
