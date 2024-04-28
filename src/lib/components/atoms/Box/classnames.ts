import { classnames } from '../../../tailwind/tailwindcss-classnames'
// import { classnames } from 'tailwindcss-classnames';
import * as types from './types'

export const base = classnames('w-full', 'rounded-regular', 'p-4', 'small:rounded-none')

// ELEVATION TYPES
export const regular = classnames('shadow-elevation-regular')
export const large = classnames('shadow-elevation-large')

// TYPES
export const neutral = classnames('bg-white')
export const accent = classnames('bg-orange-5')
export const action = classnames('bg-blue-5')
export const transparent = classnames('bg-transparent')

interface ClassesProps {
  elevation: types.BoxElevations
  type: types.BoxTypes
}

const classes = ({ elevation, type }: ClassesProps): string =>
  classnames(base, {
    [regular]: elevation === 'regular' && type !== 'transparent',
    [large]: elevation === 'large' && type !== 'transparent',
    [neutral]: type === 'neutral',
    [accent]: type === 'accent',
    [action]: type === 'action',
    [transparent]: type === 'transparent',
  })

export default classes
