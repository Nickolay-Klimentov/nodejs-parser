import { Link } from '../../features/LinkForm/Types/types';

export const newLink = async ({ url }: Link): Promise<Link> => {
  const res = await fetch('/links', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      url,
    }),
  });

  const data = await res.json();
  return data;
};
