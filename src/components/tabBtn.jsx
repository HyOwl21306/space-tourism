function TabBtn({children, onSelect, isSelected}) {
    return (
        <>
            <button className={isSelected ? "select tabBtn" : "tabBtn"} onClick={onSelect}>
                {children}
            </button>
        </>
    )
}

export default TabBtn;