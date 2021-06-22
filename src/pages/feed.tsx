import {styled} from '@stitches/react';
import React from 'react';

import {WallpaperCard} from '../components/WallpaperCard';
import {useWallpapersQuery} from '../graphql/gen';

export const Feed = () => {
  const [res] = useWallpapersQuery();

  if (res.error) {
    return <span>something went wrong!</span>;
  }
  return (
    <Container>
      {res.data?.wallpapers!.map((wp) => (
        <WallpaperCard key={wp.id} wallpaper={wp} />
      ))}
    </Container>
  );
};

const Container = styled('div', {
  display: 'grid',
  // marginLeft: '20vw',
  gridRowGap: '50px',
});
