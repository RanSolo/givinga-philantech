import { useQuery } from 'react-query';
import axios from 'axios';
import { Charity } from '@givinga-philantech/interfaces';

const getCharity = async () => {
  return await axios
    .get('/api')
    .then((r) => r.data as Charity)
    .catch((e) => console.log('error', e));
};

export function useCharity() {
  return useQuery('charity', () => getCharity());
}

export default useCharity;
