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

export const TextInput = ({
    variant = 'plain',
    size = 'med',
    ...props
}: TextInputProps) => {
    return (
        <input 
            type="text" 
            {...props}
        />
    )
}