import lyghtThumbnail from '@/assets/projects/lyght/thumbnail.jpg';
import spotifyThumbnail from '@/assets/projects/spotify/thumbnail.jpg';
import paulThumbnail from '@/assets/projects/paul-the-octopus/thumbnail.jpg';
import kingpinThumbnail from '@/assets/projects/kingpin/thumbnail.jpg';
import shelveThumbnail from '@/assets/projects/shelve/thumbnail.jpg';

export interface Project {
  id: string;
  name: string;
  link: string;
  source?: string;
  img: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 'lyght',
    name: 'Lyght',
    link: 'https://lyght-dev.web.app/',
    img: lyghtThumbnail,
    tags: ['fintech', 'solar energy', 'large-scale'],
  },
  {
    id: 'my-spotify-features',
    name: 'My Spotify Features',
    link: 'https://my-spotify-features.web.app/',
    source: 'https://github.com/Vic-ong/my-spotify-features',
    img: spotifyThumbnail,
    tags: ['lifestyle', 'music features', 'small-scale'],
  },
  {
    id: 'paul-the-octopus',
    name: 'Paul the Octopus',
    link: 'https://paul-the-octopus-v2.web.app/',
    source: 'https://github.com/Vic-ong/paul-the-octopus-v2',
    img: paulThumbnail,
    tags: ['gaming', 'compatibility', 'small-scale'],
  },
  {
    id: 'shelve-my-subs',
    name: 'Shelve My Subs',
    link: 'https://my-spotify-features.web.app/',
    source: 'https://github.com/Vic-ong/shelve-my-subs',
    img: shelveThumbnail,
    tags: ['lifestyle', 'organization', 'small-scale'],
  },
  {
    id: 'kingpin',
    name: 'Kingpin',
    link: 'https://my-spotify-features.web.app/',
    source: '',
    img: kingpinThumbnail,
    tags: ['personalization', 'medium-scale'],
  },
];
