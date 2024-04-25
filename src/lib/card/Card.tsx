import classNames from "classnames";

export interface CardProps {
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * Determines how much padding to use for the edges of the card
     */
    size: 'sm' | 'md' | 'lg';
    width: 'sm' | 'md' | 'lg';
    /**
     * Determines if the card should have padding or not
     */
    noPadding?: boolean;
    children: React.ReactNode;
    onClick?: () => void;
}

const paddingSizes = (size: string) =>
    classNames({
        'p-4': size === 'sm',
        'p-6': size === 'md',
        'p-8': size === 'lg',
    });

const widthSizes = (size: string) =>
    classNames({
        'max-w-sm': size === 'sm',
        'max-w-md': size === 'md',
        'max-w-lg': size === 'lg',
    })

export const Card = ({
    size = 'sm',
    width = 'sm',
    backgroundColor,
    noPadding,
    ...props
}: CardProps) => {
    return (
        <div 
            className={
                classNames('rounded-lg drop-shadow-2xl border-slate-400 border-2 transition-all ease-in max-w-', 
                    {'p-0': noPadding }, 
                    paddingSizes(size), 
                    widthSizes(width)
                )} 
            style={{ backgroundColor }}
            {...props}>
                {}
        </div>
    )
} 