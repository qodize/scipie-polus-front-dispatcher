import React from 'react';

interface FilterBarProps {
    selectFilter: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const FilterBar = ({selectFilter}: FilterBarProps) => {
    return (
        <nav className="h-[50px] px-5 py-4 text-center font-bold text-2xl">
            <div>
                <button className="hover:text-amber-400 mx-4" onClick={selectFilter}>Текущие</button>
                <span>|</span>
                <button className="hover:text-amber-400 mx-4" onClick={selectFilter}>Конфликтные</button>
                <span>|</span>
                <button className="hover:text-amber-400 mx-4" onClick={selectFilter}>По дням</button>
            </div>
        </nav>
    );
}
export default FilterBar;