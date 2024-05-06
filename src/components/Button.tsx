import React, { ReactNode, Ref, forwardRef } from "react"
import { Link, LinkProps } from "react-router-dom"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string
    children?: ReactNode
    classes: string
    to?: LinkProps["to"]
    iconPosition?: "left" | "right"
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>((
    {
        text,
        children,
        classes,
        to,
        onClick,
        iconPosition,
    },
    ref: Ref<unknown>
) => {
    const buttonClasses = [
        classes,
        "h-10 flex text-[12px] md:text-[14px] items-center gap-2 px-3 md:px-4 rounded-lg transition font-semibold shrink-0 text-nowrap select-none",
        iconPosition === "left" ? "" : "flex-row-reverse",
    ].join(" ")

    if (to) {
        return (
            <Link
                to={ to }
                className={ buttonClasses }
                ref={ ref as Ref<HTMLAnchorElement> }
                draggable={ false }
            >
                { children && (
                    <div>
                        {children}
                    </div>
                )}
                {text && (<div>{text}</div>)}
            </Link>
        )
    }

    return (
        <button
            className={ buttonClasses }
            onClick={ onClick }
            ref={ ref as React.Ref<HTMLButtonElement> }
        >
            { children && (
                <div>
                    {children}
                </div>
            )}
            {text && (<div>{text}</div>)}
        </button>
    )
}
)

Button.displayName = "Button"

export default Button
