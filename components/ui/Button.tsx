import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
// import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Note: I'm not using cva here to keep it simple as I didn't install it, 
// but I'll write it with standard props for now or install cva if I want to be fancy.
// Actually, I didn't install cva. I'll just use simple props.

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";

        const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-serif tracking-wide";

        const variants = {
            primary: "bg-gold text-brown-dark hover:bg-gold/90 shadow-md",
            secondary: "bg-mahogany text-cream hover:bg-mahogany/90 shadow-md",
            outline: "border border-gold text-gold hover:bg-gold hover:text-brown-dark",
            ghost: "hover:bg-gold/10 text-brown-dark",
        };

        const sizes = {
            sm: "h-9 px-3",
            md: "h-10 px-4 py-2",
            lg: "h-12 px-8 text-base",
        };

        return (
            <Comp
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
