export default function TabTechBtn({children, onSelect, isSelected}) {
    return (
        <>
            <div className={isSelected ? `tabTech bg-white` : `tabTech text-white`} onClick={onSelect}>
                {children}
            </div>
        </>
    )
}