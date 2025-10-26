import { Expedition } from './types';

export const EXPEDITIONS_DATA: Expedition[] = [
    {
    id: 'collaborative',
    tag: 'Private Commission',
    title: "The Collaborative",
    description: "A Himalayan trek designed to forge your team into a true crew. Plan your route, manage supplies, and summit together. Leadership isn't a title—it's a truth you discover when the path gets steep.",
    imageUrl: 'https://images.unsplash.com/photo-1594488540021-53a97d8dab06?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2073',
    link: '#collaborative-program',
    linkText: 'Explore This Program',
    status: 'Applications Open',
    location: 'Himalayas, India',
    duration: '6 Days',
    groupSize: 'Your Team',
    difficulty: 'Challenging',
    experience: [
      'Collaborative route planning',
      'High-altitude trekking',
      'Real-time leadership challenges',
      'Complete digital detox'
    ]
  },
  {
    id: 'nav-void',
    tag: '2026 Collective',
    title: "The Navigator's Void",
    description: "Cross a vast, empty landscape with only a map, a compass, and the stars. Seven days where you'll discover that a good decision made now is better than a perfect one made too late.",
    imageUrl: 'https://images.unsplash.com/photo-1726828769677-0eb9759149a6?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2070',
    link: '#apply',
    linkText: 'Apply for Waitlist',
    status: 'In Development',
    location: 'Spiti Cold Desert, India',
    duration: '7 Days',
    groupSize: '8 People',
    difficulty: 'Advanced',
    experience: [
      'Celestial & map-based navigation',
      'Self-sufficient wilderness skills',
      'Decision-making under ambiguity',
      'Radical self-reliance'
    ]
  },
  {
    id: 'barter-burden',
    tag: '2027 Collective',
    title: "The Barterer's Burden",
    description: "Travel a 250-year-old trade route on horseback through high-altitude valleys. Manage your resources, negotiate for what you need, and lead your crew through the mountains.",
    imageUrl: 'https://images.unsplash.com/photo-1734760341714-7e0460e812d2?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=3131',
    link: '#apply',
    linkText: 'Apply for Waitlist',
    status: 'In Development',
    location: 'High Altitude Valley, Uttarakhand',
    duration: '10 Days',
    groupSize: '6 People',
    difficulty: 'Expert',
    experience: [
      'Equestrian & pack animal skills',
      'Resource management & negotiation',
      'Leading a crew in remote terrain',
      'Cultural immersion with local traders'
    ]
  },
];
