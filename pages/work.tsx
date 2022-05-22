import CardLinkGrid from '../components/CardLinkGrid';
import AboutLink from '../components/AboutLink';
import ContactLink from '../components/ContactLink';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import fetchRepositories, { RepositoryData } from '../api/fetchRepositories';
import BuildIcon from '@mui/icons-material/Build';
import ForkLeftIcon from '@mui/icons-material/ForkLeft';
import Head from 'next/head';

export default function Work({
  myGithubRepos,
}: {
  myGithubRepos: RepositoryData[];
}) {
  return (
    <>
      <Head>
        <title>Work</title>
        <meta
          name='description'
          content='Some of my projects and contributions.'
        />
      </Head>
      <Typography variant='h2' sx={{ my: [2, 4] }}>
        Recent Work
      </Typography>
      <List>
        {myGithubRepos.map((repo) => (
          <a href={repo.htmlUrl}>
            <ListItem button>
              <ListItemAvatar>
                <Avatar>{repo.fork ? <ForkLeftIcon /> : <BuildIcon />}</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={repo.name}
                secondary={
                  <>
                    <span>{repo.updatedAt}</span>
                    <br />
                    <span>{repo.description}</span>
                  </>
                }
              />
            </ListItem>
          </a>
        ))}
      </List>
      <CardLinkGrid BoxProps={{ my: [2, 4] }}>
        <ContactLink />
        <AboutLink />
      </CardLinkGrid>
    </>
  );
}

export async function getStaticProps() {
  const myGithubRepos = await fetchRepositories({
    sort: 'updated',
    page: 1,
    perPage: 5,
    type: 'all',
  });
  return {
    props: { pageTitle: 'Work', myGithubRepos },
    revalidate: 60 * 60,
  };
}
