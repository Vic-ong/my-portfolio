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
    img: 'https://firebasestorage.googleapis.com/v0/b/my-portfolio-45469.appspot.com/o/public%2Flyght%2Fthumbnail.jpg?alt=media&token=ef803449-91f1-45df-9bdc-e6587a387909',
    tags: ['fintech', 'solar energy', 'large-scale'],
  },
  {
    id: 'my-spotify-features',
    name: 'My Spotify Features',
    link: 'https://my-spotify-features.web.app/',
    source: 'https://github.com/Vic-ong/my-spotify-features',
    img: 'https://firebasestorage.googleapis.com/v0/b/my-portfolio-45469.appspot.com/o/public%2Fspotify%2Fthumbnail.jpg?alt=media&token=e7ff0e1c-5d1e-49c0-8ca3-a6a2f801184e',
    tags: ['lifestyle', 'music features', 'small-scale'],
  },
  {
    id: 'paul-the-octopus',
    name: 'Paul the Octopus',
    link: 'https://paul-the-octopus-v2.web.app/',
    source: 'https://github.com/Vic-ong/paul-the-octopus-v2',
    img: 'https://firebasestorage.googleapis.com/v0/b/my-portfolio-45469.appspot.com/o/public%2Fpaul-the-octopus%2Fthumbnail.png?alt=media&token=718da3f5-f467-4f91-9658-f7b0ff006865',
    tags: ['gaming', 'compatibility', 'small-scale'],
  },
  {
    id: 'kingpin',
    name: 'Kingpin.gg',
    link: 'https://kingpin.gg/',
    source: 'https://github.com/Vic-ong/kingping-gg',
    img: 'https://firebasestorage.googleapis.com/v0/b/my-portfolio-45469.appspot.com/o/public%2Fkingpin%2Fthumbnail.jpg?alt=media&token=35c02052-e348-46bb-b4bb-3667aa7d29c0',
    tags: ['personalized challenge', 'medium-scale'],
  },
  {
    id: 'shelve-my-subs',
    name: 'Shelve My Subs!',
    link: 'https://shelve-my-subs.web.app/',
    source: 'https://github.com/Vic-ong/shelve-my-subs',
    img: 'https://firebasestorage.googleapis.com/v0/b/my-portfolio-45469.appspot.com/o/public%2Fshelve-my-subs%2Fthumbnail.jpg?alt=media&token=95f72fee-ae55-4dad-9c76-8d5c3f6693d0',
    tags: ['lifestyle', 'organization', 'small-scale'],
  },
];
