import React from 'react';

// Linear-style SVG Icons
export const BacklogIcon = ({ className = "w-4 h-4", ...props }) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <circle cx="8" cy="8" r="6.25" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
  </svg>
);

export const TodoIcon = ({ className = "w-4 h-4", ...props }) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <circle cx="8" cy="8" r="6.25" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const InProgressIcon = ({ className = "w-4 h-4", ...props }) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <circle cx="8" cy="8" r="6.25" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M8 1.75C11.4518 1.75 14.25 4.54822 14.25 8C14.25 11.4518 11.4518 14.25 8 14.25V1.75Z"
      fill="currentColor"
    />
  </svg>
);

export const DoneIcon = ({ className = "w-4 h-4", ...props }) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <circle cx="8" cy="8" r="7.25" fill="var(--done-fill, currentColor)" stroke="var(--done-stroke, currentColor)" strokeWidth="1.5" />
    <path
      d="M5.5 8L7 9.5L10.5 6"
      stroke="var(--done-check, white)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CancelledIcon = ({ className = "w-4 h-4", ...props }) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <circle cx="8" cy="8" r="6.25" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M5.5 10.5L10.5 5.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const PriorityNoneIcon = ({ className = "w-4 h-4", ...props }) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M3 8H5M7 8H9M11 8H13"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const PriorityLowIcon = ({ className = "w-4 h-4", ...props }) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <rect x="2.5" y="10.5" width="2.5" height="3" rx="0.5" fill="currentColor" stroke="currentColor" strokeWidth="0.5" />
    <rect x="6.75" y="7.5" width="2.5" height="6" rx="0.5" stroke="currentColor" strokeWidth="1" strokeDasharray="1.5" />
    <rect x="11" y="4.5" width="2.5" height="9" rx="0.5" stroke="currentColor" strokeWidth="1" strokeDasharray="1.5" />
  </svg>
);

export const PriorityMediumIcon = ({ className = "w-4 h-4", ...props }) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <rect x="2.5" y="10.5" width="2.5" height="3" rx="0.5" fill="currentColor" stroke="currentColor" strokeWidth="0.5" />
    <rect x="6.75" y="7.5" width="2.5" height="6" rx="0.5" fill="currentColor" stroke="currentColor" strokeWidth="0.5" />
    <rect x="11" y="4.5" width="2.5" height="9" rx="0.5" stroke="currentColor" strokeWidth="1" strokeDasharray="1.5" />
  </svg>
);

export const PriorityHighIcon = ({ className = "w-4 h-4", ...props }) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <rect x="2.5" y="10.5" width="2.5" height="3" rx="0.5" fill="currentColor" stroke="currentColor" strokeWidth="0.5" />
    <rect x="6.75" y="7.5" width="2.5" height="6" rx="0.5" fill="currentColor" stroke="currentColor" strokeWidth="0.5" />
    <rect x="11" y="4.5" width="2.5" height="9" rx="0.5" fill="currentColor" stroke="currentColor" strokeWidth="0.5" />
  </svg>
);

export const TrashIcon = ({ className = "w-4 h-4", ...props }) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M3.25 4.75H12.75M5.75 4.75V3C5.75 2.58579 6.08579 2.25 6.5 2.25H9.5C9.91421 2.25 10.25 2.58579 10.25 3V4.75M4.75 4.75V12.5C4.75 13.0523 5.19772 13.5 5.75 13.5H10.25C10.8023 13.5 11.25 13.0523 11.25 12.5V4.75"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const PlusIcon = ({ className = "w-4 h-4", ...props }) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M8 3.25V12.75M3.25 8H12.75"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const SearchIcon = ({ className = "w-4 h-4", ...props }) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <circle cx="7" cy="7" r="4.25" stroke="currentColor" strokeWidth="1.5" />
    <path d="M10 10L13.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const SunIcon = ({ className = "w-4 h-4", ...props }) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <circle cx="8" cy="8" r="3.25" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M8 1.5V3M8 13V14.5M1.5 8H3M13 8H14.5M3.40381 3.40381L4.46447 4.46447M11.5355 11.5355L12.5962 12.5962M3.40381 12.5962L4.46447 11.5355M11.5355 4.46447L12.5962 3.40381"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const MoonIcon = ({ className = "w-4 h-4", ...props }) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M13.2435 9.87325C13.0699 12.3995 10.9575 14.375 8.375 14.375C5.47551 14.375 3.125 12.0245 3.125 9.125C3.125 6.54252 4.98687 4.3986 7.42006 4.0202C7.03961 4.78957 6.825 5.65757 6.825 6.575C6.825 10.0268 9.62322 12.825 13.075 12.825C13.1315 12.825 13.1878 12.8242 13.2435 12.8227V9.87325Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.4144 4.58557C12.3331 4.045 11.125 4.125 11.125 4.125C11.125 4.125 11.205 2.91687 10.6644 1.83557C10.5186 1.54397 10.1558 1.45524 9.9405 1.6601L8.29177 3.22874C8.11871 3.39339 8.11871 3.6749 8.29177 3.83955L9.9405 5.4082C10.1558 5.61305 10.5186 5.52432 10.6644 5.23272C11.205 4.15143 11.125 4.125 11.125 4.125"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: 'none' }} /* Simple aesthetic adjust */
    />
  </svg>
);

export const KeyboardIcon = ({ className = "w-4 h-4", ...props }) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <rect x="2.25" y="3.25" width="11.5" height="9.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M4.5 5.5H5.5V6.5H4.5V5.5ZM7 5.5H8V6.5H7V5.5ZM9.5 5.5H11.5V6.5H9.5V5.5ZM4.5 7.5H5.5V8.5H4.5V7.5ZM7 7.5H8V8.5H7V7.5ZM9.5 7.5H10.5V8.5H9.5V7.5ZM4.5 9.5H11.5V10.5H4.5V9.5Z" fill="currentColor" />
  </svg>
);

export const CalendarIcon = ({ className = "w-4 h-4", ...props }) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <rect x="2.5" y="3.5" width="11" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M2.5 6.5H13.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5 2V3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M11 2V3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const CloseIcon = ({ className = "w-4 h-4", ...props }) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M4.5 4.5L11.5 11.5M11.5 4.5L4.5 11.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const CheckIcon = ({ className = "w-4 h-4", ...props }) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M3.5 8L6.5 11L12.5 4.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const InfoIcon = ({ className = "w-4 h-4", ...props }) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <circle cx="8" cy="8" r="6.25" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 7.5V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="8" cy="5" r="0.75" fill="currentColor" />
  </svg>
);

export const ShortcutIcon = ({ className = "w-4 h-4", ...props }) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M3.75 4.75V11.25C3.75 11.8023 4.19772 12.25 4.75 12.25H11.25"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M6.25 9.75L12.25 3.75M12.25 3.75H9.25M12.25 3.75V6.75"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
