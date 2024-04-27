import classes from './classnames';
import * as types from './types';
import { Icon } from '../Icon/Icon';
import { IconNames } from '../Icon/types';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  cy?: string | undefined;
  size?: types.ButtonSizes;
  width?: types.ButtonWidths;
  disabled?: boolean;
  ref?: React.Ref<HTMLButtonElement>;
  text?: string;
  type?: types.ButtonTypes;
  variant?: types.ButtonVariants;
  icon?: IconNames;
  padding?: boolean;
}

export const Button = ({
  cy = undefined,
  disabled = false,
  onClick = undefined,
  size = 'regular',
  width = 'regular',
  text = '',
  type = 'button',
  variant = 'primary',
  ref = undefined,
  icon = undefined,
  tabIndex = undefined,
  padding = true,
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={classes({ size, disabled, padding, variant, width })}
      data-cy={cy}
      disabled={disabled}
      onClick={onClick}
      type={type}
      ref={ref}
      tabIndex={tabIndex}
    >
      {icon && <Icon name={icon} />}
      {text && <span className={icon && 'ml-2'}>{text}</span>}
    </button>
  );
};
