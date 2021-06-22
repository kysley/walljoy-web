import {styled} from '@stitches/react';
import React from 'react';
import {Link} from 'react-router-dom';
import {CgArrowLongRight} from 'react-icons/cg';

import type {Wallpaper} from '../graphql/gen';
import {PanZoom} from './ZoomPan';
import {Stack} from './Stack';

export const WallpaperCard = ({
  wallpaper,
  collectionView,
}: {
  wallpaper: Wallpaper;
  collectionView: boolean;
}) => {
  const {id, createdAt, u_url, collection} = wallpaper;

  return (
    <Container>
      <LinkContainer direction="row">
        <Link to={`w/${id}`}>
          <span style={{color: 'green'}}>
            {daysBetween(new Date(createdAt), new Date())} day(s) ago
          </span>
        </Link>
        {!collectionView && (
          <>
            <CgArrowLongRight size="35px" />
            <Link to={`c/${collection?.id}`}>{collection?.name}</Link>
          </>
        )}
      </LinkContainer>
      <PanZoom src={u_url} element={<Image src={u_url} alt="" />} />
    </Container>
  );
};

function daysBetween(date1: Date, date2: Date) {
  // The number of milliseconds in one day
  const ONE_DAY = 1000 * 60 * 60 * 24;

  // Calculate the difference in milliseconds
  const differenceMs = Math.abs(date1.getTime() - date2.getTime());

  // Convert back to days and return
  return Math.round(differenceMs / ONE_DAY);
}

const Container = styled('div', {
  display: 'grid',
  gridTemplateRows: '25px 500px',
  width: '60vw',
  paddingLeft: '10vw',
  // height: 'auto',
  position: 'relative',
});

const LinkContainer = styled(Stack, {
  alignItems: 'center',
});

const Image = styled('img', {
  width: '100%',
  maxWidth: '100%',
  height: 'auto',
  // display: 'block',
  cursor: 'zoom-in',
  touchAction: 'none',
  position: 'relative',
  willChange: 'transform',

  '&:hover': {
    border: '1px solid blue',
  },
});
