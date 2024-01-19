import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
    weight : ["600"] , 
    subsets : ["latin"]
})

interface HeaderProps {
    label : string 
}

export const Header = ({ label } : HeaderProps) => {
    return (
        <div className={cn("flex items-center justify-center w-full flex-col gap-y-4" , font)}>
            <h1 className={cn("text-3xl font-semibold" , font.className)}>
                🗝️Auth
            </h1>
            <p className="text-muted-foreground text-sm">
                {label}
            </p>
        </div>
    )
}

