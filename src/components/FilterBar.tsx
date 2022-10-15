import React from 'react';

interface FilterBarProps {
    selectFilter: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const FilterBar = ({selectFilter}: FilterBarProps) => {
    return (
        <nav className="h-[50px] flex justify-between px-5 py-4 bg-gray-500 text-white">
            <div>
                <button onClick={selectFilter}>Текущие</button>
                <button onClick={selectFilter}>Конфликтные</button>
                <button onClick={selectFilter}>По дням</button>
            </div>
        </nav>
    );
}
export default FilterBar;