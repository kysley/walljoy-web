import {styled} from '@stitches/react';
import React, {useState} from 'react';

import {WallpaperCard} from '../components/WallpaperCard';
import {useFeedQuery, QueryFeedArgs} from '../graphql/gen';

type PageProps = {
  variables: QueryFeedArgs;
  isLastPage: boolean;
  onLoadMore: (cursor: number) => void;
};
const Page = ({variables, isLastPage, onLoadMore}: PageProps) => {
  const [{data, fetching}] = useFeedQuery({
    variables,
  });

  return (
    <>
      {data?.feed?.map((wp) => (
        <WallpaperCard key={wp.id} wallpaper={wp} />
      ))}
      {(isLastPage && fetching) ||
        (isLastPage && (
          <button
            onClick={() => {
              if (data?.feed) {
                onLoadMore(data.feed[data.feed.length - 1]?.id!);
              }
            }}
          >
            load more
          </button>
        ))}
    </>
  );
};

export const Feed = () => {
  const [pageVariables, setPageVariables] = useState([
    {
      limit: 15,
      cursor: null as null | number,
    },
  ]);

  return (
    <Container>
      {console.log('hello')}
      {pageVariables.map((variables, i) => (
        <Page
          key={'' + variables.cursor}
          variables={variables}
          isLastPage={i === pageVariables.length}
          onLoadMore={(cursor) =>
            setPageVariables([...pageVariables, {cursor, limit: 15}])
          }
        />
      ))}
    </Container>
  );
};

const Container = styled('div', {
  display: 'grid',
  // marginLeft: '20vw',
  gridRowGap: '50px',
});
