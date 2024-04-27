import { classnames } from '../../tailwindcss-classnames';
import * as types from './types';

export const base = classnames('rounded', 'overflow-hidden', 'whitespace-nowrap', 'truncate');

// BOX WIDTHS
export const regularWidth = classnames('w-auto', 'medium:w-full', 'small:w-full');
export const fullWidth = classnames('w-full');
export const autoWidth = classnames('w-auto');

// BOX SIZES
export const regular = classnames('h-10', 'px-s', 'py-xs');
export const large = classnames('h-14', 'px-m', 'py-s');

// VARIANTS
export const primary = classnames(
  'text-white',
  'text-text',
  'font-medium',
  'bg-blue-3',
  'hover:bg-blue-2',
  'focus:bg-blue-1',
  'focus:outline-none'
);
export const secondary = classnames(
  'text-blue-3',
  'text-text',
  'bg-transparent',
  'border',
  'rounded',
  'border-blue-3',
  'hover:bg-blue-5',
  'focus:bg-blue-3',
  'focus:text-white',
  'focus:outline-none'
);
export const tertiary = classnames(
  'text-blue-3',
  'text-subtext',
  'bg-transparent',
  'border-none',
  'hover:underline',
  'focus-within:underline',
  'focus:outline-none'
);
export const destructive = classnames(
  'text-red-3',
  'text-subtext',
  'bg-transparent',
  'border-none',
  'hover:underline',
  'focus-within:underline',
  'focus:outline-none'
);
export const danger = classnames(
  'text-white',
  'text-text',
  'font-medium',
  'bg-red-3',
  'hover:bg-red-2',
  'focus:bg-red-1',
  'focus:outline-none'
);

// DISABLED
export const disabledPrimary = classnames('bg-grey-5', 'text-grey-3', 'hover:bg-grey-5', 'focus:outline-none');
export const disabledSecondary = classnames('bg-transparent', 'text-grey-3', 'rounded', 'border-grey-4');
export const disabledTertiaryDestructive = classnames('bg-transparent', 'text-grey-3');
interface ClassesProps {
  disabled: boolean;
  padding: boolean;
  size: types.ButtonSizes;
  width: types.ButtonWidths;
  variant: types.ButtonVariants;
}

const classes = ({ disabled, padding, size, variant, width }: ClassesProps): string =>
  classnames(base, {
    [primary]: variant === 'primary',
    [secondary]: variant === 'secondary',
    [tertiary]: variant === 'tertiary',
    [destructive]: variant === 'destructive',
    [danger]: variant === 'danger',
    [disabledPrimary]: !!disabled && variant === 'primary',
    [disabledSecondary]: !!disabled && variant === 'secondary',
    [disabledTertiaryDestructive]: !!disabled && (variant === 'tertiary' || variant === 'destructive'),
    [regular]: size === 'regular' && padding,
    [large]: size === 'large' && padding,
    [regularWidth]: width === 'regular',
    [fullWidth]: width === 'full',
    [autoWidth]: width === 'auto',
  });

export default classes;
