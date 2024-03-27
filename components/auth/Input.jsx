import * as React from "react"

const Input = (
    ({ type, ...props }, ref) => {
        return (
            <input
                type={type}
                ref={ref}
                {...props}
            />
        )
    }
)
Input.displayName = "Input"

export { Input }