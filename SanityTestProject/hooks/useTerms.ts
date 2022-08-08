import { useEffect, useState } from 'react';
import sanityClient from '@sanity/client';
import { Word } from '../data/sampleData';
import { LoadingStatus } from '../types';

const client = sanityClient({
  projectId: 'hl86o2tl',
  dataset: 'production',
  apiVersion: '2022-06-24',
  //TODO: Change this to true. While in development, set this to false to use the latest data
  useCdn: false, // `false` if you want to ensure fresh data
});

const query = '*[_type == "animal"]{_id, name}';

export const useTerms = (): { terms: Word[]; status: LoadingStatus } => {
  const [data, setData] = useState<Word[]>([]);
  const [loading, setLoading] = useState(false);
  const [errored, setErrored] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    (async () => {
      setSuccess(false);
      setErrored(false);
      setLoading(true);

      try {
        const terms = await client.fetch(query);
        setData(terms);
        setSuccess(true);
      } catch {
        setErrored(true);
      }

      setLoading(false);
    })();
  }, []);

  return { terms: data, status: { loading, success, errored } };
};
