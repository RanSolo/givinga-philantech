import {
  Address,
  Branding,
  Campaign,
  Charity,
} from '@givinga-philantech/interfaces';
import { rest, setupWorker } from 'msw';

const branding: Branding = {
  primaryColor: '#bbbeee',
  secondaryColor: '#g0d',
  name: 'Cool Charity',
  tagline: "Cool as a polar bear's toenails.",
};

const address: Address = {
  city: 'Atlanta',
  state: 'GA',
};

const campaigns: Campaign[] = [
  {
    category: 'Wild animals',
    name: 'SaveWolves',
    tagline: 'One wolf at a time...',
  },
  {
    category: 'Ocean animals',
    name: 'SaveWhales',
    tagline: 'One whale at a time...',
  },
];

const charity: Charity = {
  branding,
  address,
  campaigns,
};

export const handlers = [
  rest.get('/api', (req, res, ctx) => {
    return res(ctx.json(charity));
  }),
];

export const worker = setupWorker(...handlers);
// export const server = setupServer(...handlers);
worker.start();
