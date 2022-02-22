import * as express from 'express';

import {
  Branding,
  Address,
  Charity,
  Campaign,
} from '@givinga-philantech/interfaces';

const branding: Branding = {
  primaryColor: '#fffeee',
  secondaryColor: '#bad',
  name: "Ace's Vet Services",
  tagline: 'Just like the movie',
};

const address: Address = {
  city: 'Los Angeles',
  state: 'CA',
};

const campaigns: Campaign[] = [
  {
    category: 'Domestic animals',
    name: 'SavePuppies',
    tagline: 'One puppy at a time...',
  },
  {
    category: 'Domestic animals',
    name: 'SaveKittens',
    tagline: 'One kitty at a time...',
  },
];

const charity: Charity = {
  branding,
  address,
  campaigns,
};

const app = express();

app.get('/api', (req, res) => {
  res.send(charity);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});

server.on('error', console.error);
