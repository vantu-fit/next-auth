"use client"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,

} from "@/components/ui/card"
import { Header } from "./header"
import Social from "./social"
import { BackButton } from "./back-button"
import { Button } from "../ui/button"
interface CardWrapperProps {
    children: React.ReactNode
    headerLabel: string,
    backButtonLabel: string,
    backButtonHref: string,
    showSocial?: boolean
    resetPassword?: boolean

}

export const CardWrapper = ({ children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial = false,
    resetPassword = false
}: CardWrapperProps) => {
    return (
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                <Header label={headerLabel} />
            </CardHeader>

            <CardContent>
                {children}
            </CardContent>

            {showSocial &&
                <CardFooter>
                    <Social />
                </CardFooter>
            }
            <CardFooter className="flex flex-col items-start">
                {resetPassword && <BackButton href={"/auth/reset"} label={"Reset your password ?" } />}
                <BackButton href={backButtonHref} label={backButtonLabel} />
            </CardFooter>
        </Card>
    )

}