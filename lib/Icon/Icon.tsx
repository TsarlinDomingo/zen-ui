import { useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import classes from './classnames';
import icons from './Icons';
import * as types from './types';

export interface IconProps {
  cy?: string;
  dataTestId?: string;
  name: types.IconNames;
  size?: types.IconSizes;
  variant?: types.IconVariants;
}

export const Icon = ({
  // cy = undefined,
  // dataTestId = 'icon',
  name,
  // size = 'regular',
  // variant = undefined,
}: IconProps): JSX.Element => {
  const getIcon = useCallback(() => {
    if (!name) return '';

    const icon = name && icons.find((i) => i.name === name);
    if (!icon) return '';

    return icon.icon;
  }, [name]);

  const icon = getIcon();
  if (!icon) return <div />;

  // return (
  //   <span data-cy={cy} data-testid={dataTestId} className={classes({ variant, size })}>
  //     <FontAwesomeIcon icon={icon} />
  //   </span>
  // );
  return <FontAwesomeIcon icon={icon} />;
};
