import {styled} from '@stitches/react';
import React, {useState} from 'react';

import {WallpaperCard} from '../components/WallpaperCard';
import {useFeedQuery, PaginationArgs} from '../graphql/gen';

type PageProps = {
  variables: PaginationArgs;
  isLastPage: boolean;
  onLoadMore: (cursor: number) => void;
};
const Page = ({variables, isLastPage, onLoadMore}: PageProps) => {
  const [{data, fetching}] = useFeedQuery({
    variables: {
      where: variables,
    },
  });
  console.log({isLastPage});
  return (
    <>
      {data?.feed?.map((wp) => (
        <WallpaperCard key={wp.id} wallpaper={wp} />
      ))}

      {isLastPage && (
        <button
          onClick={() => {
            if (data?.feed) {
              onLoadMore(data.feed[data.feed.length - 1]?.id!);
            }
          }}
        >
          load more
        </button>
      )}
    </>
  );
};

export const Feed = () => {
  const [pageVariables, setPageVariables] = useState([
    {
      take: 15,
      cursor: null as null | number,
    },
  ]);

  return (
    <Container>
      {pageVariables.map((variables, i) => (
        <Page
          key={variables.cursor}
          variables={variables}
          isLastPage={i === pageVariables.length - 1}
          onLoadMore={(cursor) =>
            setPageVariables([...pageVariables, {cursor, take: 15}])
          }
        />
      ))}
    </Container>
  );
};

const Container = styled('div', {
  display: 'grid',
  marginLeft: '10vw',
  gridRowGap: '50px',
  gridTemplateColumns: '60vw',
  gridTemplateRows: '650px',
});
