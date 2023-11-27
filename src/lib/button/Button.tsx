import './button.css';
import classNames from 'classnames';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const textSizes = (size: string) => 
  classNames({
    'text-xs': size === 'xs',
    'text-sm': size === 'sm',
    'text-base': size === 'base',
    'text-lg': size === 'lg',
    'text-xl': size === 'xl',
    'text-2xl': size === '2xl',
    'text-3xl': size === '3xl',
    'text-4xl': size === '4xl',
    'text-5xl': size === '5xl',
  });

const mode = (primary: boolean) =>
  classNames({
    'bg-slate-500 text-white hover:bg-slate-700': primary,
    'bg-white-500 text-black-500 hover:bg-slate-500 border-solid border-slate-500 border-2': !primary,
  });

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'base',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={classNames('py-3 px-6 rounded-lg drop-shadow-lg transition-all ease-in', textSizes(size), mode(primary))}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
