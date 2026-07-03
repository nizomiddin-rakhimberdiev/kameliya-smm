import type { ReactElement } from 'react'

type IconName =
  | 'target'
  | 'chart'
  | 'camera'
  | 'users'
  | 'sparkle'
  | 'audit'
  | 'brand'
  | 'instagram'
  | 'telegram'
  | 'send'
  | 'check'
  | 'arrow'

const paths: Record<IconName, ReactElement> = {
  target: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </>
  ),
  chart: (
    <>
      <path d="M4 19V5" />
      <path d="M4 19h16" />
      <path d="M8 15v-4" />
      <path d="M12.5 15V7" />
      <path d="M17 15v-6" />
    </>
  ),
  camera: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2.5" />
      <path d="M8 7l1.6-2.5h4.8L16 7" />
      <circle cx="12" cy="13.5" r="3.5" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8.5" r="3" />
      <path d="M3.5 19c0-3 2.5-5.2 5.5-5.2s5.5 2.2 5.5 5.2" />
      <circle cx="17" cy="9" r="2.3" />
      <path d="M15.5 13.6c2.4.3 4 2.2 4 5.1" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3l1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3z" />
    </>
  ),
  audit: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M15.2 15.2L20 20" />
      <path d="M8 10.5h5" />
    </>
  ),
  brand: (
    <>
      <path d="M12 3l7.5 4.3v9.4L12 21l-7.5-4.3V7.3L12 3z" />
      <path d="M12 3v18" />
      <path d="M4.5 7.3l7.5 4.3 7.5-4.3" />
    </>
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="16.7" cy="7.3" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  telegram: (
    <>
      <path d="M21 4L3 11.5l6 2M21 4L17.5 20l-8.5-6.5M21 4L9 13.5" />
    </>
  ),
  send: (
    <>
      <path d="M21 3L11 13" />
      <path d="M21 3l-7 18-4-8-8-4 19-6z" />
    </>
  ),
  check: (
    <>
      <path d="M4 12.5l5.5 5.5L20 6" />
    </>
  ),
  arrow: (
    <>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </>
  ),
}

export default function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  )
}
