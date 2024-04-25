import classNames from "classnames";

interface TextInputProps {
    /**
     * Determines the overall background styling and border of the input
     */
    variant?: 'plain' | 'outlined' | 'soft' | 'solid';

    /**
     * Determines text color and border color
     */
    color?: string

    /**
     * How large should the input be?
     */
    size?: 'sm' | 'med' | 'lg'

    /**
     * Text input label field. If exists a label will appear above
     */
    label?: string

    /**
     * Optional placeholder text for the input
     */
    placeholder?: string

    /**
     * Determines if the text input should be disabled
     */
    disabled?: boolean
}

const variantStyles = (variant: string) => 
    classNames({
        'border border-gray-300': variant === 'outlined',
        'border border-gray-300 bg-gray-100': variant === 'soft',
        'border border-gray-300 bg-white': variant === 'solid',
    });

export const TextInput = ({
    variant = 'plain',
    size = 'med',
    ...props
}: TextInputProps) => {
    return (
        <input 
            className={
                classNames('rounded-lg p-2 w-100', 
                variantStyles(variant),
                {
                    'text-sm': size === 'sm',
                    'text-base': size === 'med',
                    'text-lg': size === 'lg',
                }
                )
            }
            type="text" 
            {...props}
        />
    )
}