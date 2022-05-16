import fetch from 'node-fetch';
import { GITHUB_API_URL, GITHUB_USER } from './constants';

export type RepositoryData = {
  name: string;
  description: string;
  htmlUrl: string;
  fork: boolean;
  updatedAt: string;
};

export default async function fetchRepositories({
  sort,
  type,
  page,
  perPage,
}: {
  type: 'owner' | 'member' | 'all';
  sort: 'created' | 'updated';
  page: number;
  perPage: number;
}): Promise<RepositoryData[]> {
  const response = await fetch(
    `${GITHUB_API_URL}/users/${GITHUB_USER}/repos?sort=${sort}&type=${type}&page=${page}&per_page=${perPage}`,
    {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    }
  );

  const data: any = await response.json();

  return data.map(({ name, description, html_url, fork, updated_at }) => {
    const updatedAt = new Date(updated_at).toLocaleDateString();
    return {
      name,
      description,
      htmlUrl: html_url,
      fork,
      updatedAt,
    };
  });
}
