import {
  // faBars,
  // faCheck,
  // faChevronUp,
  // faChevronDown,
  // faChevronRight,
  // faChevronLeft,
  // faDownload,
  // faEllipsisH,
  // faEllipsisV,
  // faMinusCircle,
  // faPlusCircle,
  // faPrint,
  faQuestionCircle,
  // faSearch,
  faTimesCircle,
  faImage,
  faThumbsUp,
  faCalendar,
  faStar,
  faClock,
  faTrashCan,
} from '@fortawesome/free-regular-svg-icons';

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle';
import { faTimesCircle as faTimesCircleSolid } from '@fortawesome/free-solid-svg-icons/faTimesCircle';

// import { faGear, faTrash } from '@fortawesome/free-light-svg-icons';

import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons/faStar';

const icons = [
  // { name: 'bars', icon: faBars },
  { name: 'calendar', icon: faCalendar },
  // { name: 'check', icon: faCheck },
  // { name: 'chevron-down', icon: faChevronDown },
  // { name: 'chevron-left', icon: faChevronLeft },
  // { name: 'chevron-right', icon: faChevronRight },
  // { name: 'chevron-up', icon: faChevronUp },
  { name: 'circle-check', icon: faCheckCircle },
  // { name: 'circle-minus', icon: faMinusCircle },
  // { name: 'circle-plus', icon: faPlusCircle },
  { name: 'circle-question', icon: faQuestionCircle },
  { name: 'circle-xmark', icon: faTimesCircleSolid },
  { name: 'close', icon: faTimesCircle },
  // { name: 'download', icon: faDownload },
  // { name: 'ellipsis-h', icon: faEllipsisH },
  // { name: 'ellipsis-v', icon: faEllipsisV },
  { name: 'image', icon: faImage },
  // { name: 'print', icon: faPrint },
  // { name: 'search', icon: faSearch },
  { name: 'thumbs-up', icon: faThumbsUp },
  // { name: 'gear', icon: faGear },
  // { name: 'trash', icon: faTrash},
  { name: 'star', icon: faStar },
  { name: 'solid-star', icon: faSolidStar },
  { name: 'clock', icon: faClock },
  { name: 'trash-can', icon: faTrashCan },
];

export default icons;
