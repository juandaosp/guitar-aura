import type { NavGroup } from '@/components/nav/types'

export const navGroups: NavGroup[] = [
  {
    groupLabel: 'General',
    elements: [
      {
        label: 'Dashboard',
        url: '/dashboard',
        isActive: false,
        icon: 'LayoutDashboard',
      },
    ],
  },
  {
    groupLabel: 'Technical Drills',
    elements: [
      {
        label: 'Left Hand Focus',
        url: '/left-hand-focus',
        isActive: false,
        icon: 'Zap',
      },
      {
        label: 'Right Hand Rhytm',
        url: '/right-hand-rhytm',
        isActive: false,
        icon: 'Disc',
      },
    ],
  },
  {
    groupLabel: 'Repertory',
    elements: [
      {
        label: 'Chord Bank',
        url: '/chord-bank',
        isActive: false,
        icon: 'BookOpen',
      },
      {
        label: 'Music Store',
        url: '/music-store',
        isActive: false,
        icon: 'Music',
      },
    ],
  },
  {
    groupLabel: 'Analytics',
    elements: [
      {
        label: 'History and Progress',
        url: '/analytics',
        isActive: false,
        icon: 'History',
      },
    ],
  },
]
