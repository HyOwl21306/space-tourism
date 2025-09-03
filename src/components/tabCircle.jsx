function TabCircle({isSelected, onSelect}) {
    return (
        <>
            <button className={isSelected ? "tabCir bg-gray-50" : "tabCir bg-gray-500"}
                    onClick={onSelect}>
            </button>
        </>
    )
}

export default TabCircle