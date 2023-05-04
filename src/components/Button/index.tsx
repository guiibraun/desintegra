import {  HTMLAttributes, ReactNode } from "react"

interface ButtonProps extends HTMLAttributes<HTMLAnchorElement> {
    href: string,
    children: ReactNode
}

export default function Button({children, href, ...props}: ButtonProps) {
    return <a href={href} target="blank" className="bg-white font-bold px-4 py-2 shadow-2xl">{children}</a>
}