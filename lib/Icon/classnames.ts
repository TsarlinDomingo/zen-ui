import { classnames } from '../tailwindcss-classnames';
import * as types from './types';

export const regular = classnames('text-icon-regular');
export const large = classnames('text-icon-large');
export const xlarge = classnames('text-icon-xlarge');

export const secondary = classnames('text-grey-3');
export const action = classnames('text-blue-3');
export const success = classnames('text-green-3');
export const error = classnames('text-red-3');
export const accent = classnames('text-orange-3');
export const accentDark = classnames('text-orange-2');

interface ClassesProps {
  size: types.IconSizes;
  variant?: types.IconVariants;
}

const classes = ({ variant, size }: ClassesProps): string =>
  classnames({
    [regular]: size === 'regular',
    [large]: size === 'large',
    [xlarge]: size === 'xlarge',
    [secondary]: variant === 'secondary',
    [action]: variant === 'action' || variant === 'primary',
    [success]: variant === 'success',
    [error]: variant === 'error' || variant === 'destructive',
    [accent]: variant === 'accent' || variant === 'tertiary',
    [accentDark]: variant === 'accent-dark',
  });

export default classes;
