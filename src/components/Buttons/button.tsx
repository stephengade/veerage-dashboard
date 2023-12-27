interface iButton {
children: React.ReactNode
className?: string
onClick: () => void
}

export const Button = ({children, className, onClick}: iButton) => {
 return (
    <button onClick={onClick} className={`outline-none w-[300px] py-3 text-center text-white rounded-[5px] ${className}`}>{children}</button>
 )
}