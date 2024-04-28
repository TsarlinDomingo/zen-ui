import React from 'react'
import classes from './classnames'
import * as types from './types'

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  cy?: string | undefined
  children?: React.ReactNode
  elevation?: types.BoxElevations
  type?: types.BoxTypes
}

export const Box = ({ cy = undefined, children = '', elevation = 'none', type = 'neutral' }: BoxProps): JSX.Element => {
  return (
    <div data-testid="box" className={classes({ elevation, type })} data-cy={cy}>
      {children}
    </div>
  )
}
