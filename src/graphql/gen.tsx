import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends {[key: string]: unknown}> = {[K in keyof T]: T[K]};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  {[SubKey in K]?: Maybe<T[SubKey]>};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  {[SubKey in K]: Maybe<T[SubKey]>};
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Account = {
  __typename?: 'Account';
  id: Scalars['String'];
  devices: Array<Device>;
  email: Scalars['String'];
};

export type AccountDevicesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<DeviceWhereUniqueInput>;
  after?: Maybe<DeviceWhereUniqueInput>;
};

export type Collection = {
  __typename?: 'Collection';
  name: Scalars['String'];
  id: Scalars['Int'];
  official: Scalars['Boolean'];
  wallpapers: Array<Wallpaper>;
  updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
};

export type CollectionWallpapersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<WallpaperWhereUniqueInput>;
  after?: Maybe<WallpaperWhereUniqueInput>;
};

export type CollectionWhere = {
  name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

export type CollectionWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Credentials = {
  __typename?: 'Credentials';
  token: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type Device = {
  __typename?: 'Device';
  id: Scalars['String'];
  authorized: Scalars['Boolean'];
  code: Scalars['String'];
  account: Account;
  name: Scalars['String'];
};

export type DeviceWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type LoginInput = {
  email: Scalars['String'];
  sessionId: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  refreshCredentials: Credentials;
  register?: Maybe<Credentials>;
  authenticateSession?: Maybe<Scalars['Boolean']>;
};

export type MutationRefreshCredentialsArgs = {
  refreshToken: Scalars['String'];
};

export type MutationRegisterArgs = {
  input: LoginInput;
};

export type MutationAuthenticateSessionArgs = {
  sId: Scalars['String'];
};

export type PaginationArgs = {
  take?: Scalars['Int'];
  cursor?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  signin?: Maybe<Account>;
  feed?: Maybe<Array<Maybe<Wallpaper>>>;
  wallpapers?: Maybe<Array<Maybe<Wallpaper>>>;
  collection?: Maybe<Collection>;
  wallpaper?: Maybe<Wallpaper>;
};

export type QueryFeedArgs = {
  where?: Maybe<PaginationArgs>;
};

export type QueryWallpapersArgs = {
  where?: Maybe<PaginationArgs>;
};

export type QueryCollectionArgs = {
  where: CollectionWhere;
};

export type QueryWallpaperArgs = {
  where: WallpaperWhereUniqueInput;
};

export type Wallpaper = {
  __typename?: 'Wallpaper';
  collection: Array<Collection>;
  id: Scalars['Int'];
  u_url: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type WallpaperCollectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<CollectionWhereUniqueInput>;
  after?: Maybe<CollectionWhereUniqueInput>;
};

export type WallpaperWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  u_url?: Maybe<Scalars['String']>;
};

export type RegisterMutationVariables = Exact<{
  input: LoginInput;
}>;

export type RegisterMutation = {__typename?: 'Mutation'} & {
  register?: Maybe<
    {__typename?: 'Credentials'} & Pick<Credentials, 'token' | 'refreshToken'>
  >;
};

export type AuthenticateSessionMutationVariables = Exact<{
  sId: Scalars['String'];
}>;

export type AuthenticateSessionMutation = {__typename?: 'Mutation'} & Pick<
  Mutation,
  'authenticateSession'
>;

export type RefreshCredentialsMutationVariables = Exact<{
  refreshToken: Scalars['String'];
}>;

export type RefreshCredentialsMutation = {__typename?: 'Mutation'} & {
  refreshCredentials: {__typename?: 'Credentials'} & Pick<
    Credentials,
    'token' | 'refreshToken'
  >;
};

export type WallpapersQueryVariables = Exact<{
  where?: Maybe<PaginationArgs>;
}>;

export type WallpapersQuery = {__typename?: 'Query'} & {
  wallpapers?: Maybe<
    Array<
      Maybe<
        {__typename?: 'Wallpaper'} & Pick<
          Wallpaper,
          'u_url' | 'id' | 'createdAt'
        > & {
            collection: Array<
              {__typename?: 'Collection'} & Pick<Collection, 'id' | 'name'>
            >;
          }
      >
    >
  >;
};

export type CollectionQueryVariables = Exact<{
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
}>;

export type CollectionQuery = {__typename?: 'Query'} & {
  collection?: Maybe<
    {__typename?: 'Collection'} & Pick<Collection, 'id' | 'name'> & {
        wallpapers: Array<
          {__typename?: 'Wallpaper'} & Pick<
            Wallpaper,
            'u_url' | 'id' | 'createdAt'
          >
        >;
      }
  >;
};

export type WallpaperQueryVariables = Exact<{
  id?: Maybe<Scalars['Int']>;
}>;

export type WallpaperQuery = {__typename?: 'Query'} & {
  wallpaper?: Maybe<
    {__typename?: 'Wallpaper'} & Pick<Wallpaper, 'id' | 'u_url' | 'createdAt'>
  >;
};

export type FeedQueryVariables = Exact<{
  where?: Maybe<PaginationArgs>;
}>;

export type FeedQuery = {__typename?: 'Query'} & {
  feed?: Maybe<
    Array<
      Maybe<
        {__typename?: 'Wallpaper'} & Pick<
          Wallpaper,
          'u_url' | 'id' | 'createdAt'
        > & {
            collection: Array<
              {__typename?: 'Collection'} & Pick<Collection, 'id' | 'name'>
            >;
          }
      >
    >
  >;
};

export type SigninQueryVariables = Exact<{[key: string]: never}>;

export type SigninQuery = {__typename?: 'Query'} & {
  signin?: Maybe<
    {__typename?: 'Account'} & Pick<Account, 'email' | 'id'> & {
        devices: Array<
          {__typename?: 'Device'} & Pick<Device, 'name' | 'id' | 'authorized'>
        >;
      }
  >;
};

export const RegisterDocument = gql`
  mutation register($input: LoginInput!) {
    register(input: $input) {
      token
      refreshToken
    }
  }
`;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(
    RegisterDocument,
  );
}
export const AuthenticateSessionDocument = gql`
  mutation AuthenticateSession($sId: String!) {
    authenticateSession(sId: $sId)
  }
`;

export function useAuthenticateSessionMutation() {
  return Urql.useMutation<
    AuthenticateSessionMutation,
    AuthenticateSessionMutationVariables
  >(AuthenticateSessionDocument);
}
export const RefreshCredentialsDocument = gql`
  mutation RefreshCredentials($refreshToken: String!) {
    refreshCredentials(refreshToken: $refreshToken) {
      token
      refreshToken
    }
  }
`;

export function useRefreshCredentialsMutation() {
  return Urql.useMutation<
    RefreshCredentialsMutation,
    RefreshCredentialsMutationVariables
  >(RefreshCredentialsDocument);
}
export const WallpapersDocument = gql`
  query wallpapers($where: PaginationArgs) {
    wallpapers(where: $where) {
      u_url
      id
      createdAt
      collection {
        id
        name
      }
    }
  }
`;

export function useWallpapersQuery(
  options: Omit<Urql.UseQueryArgs<WallpapersQueryVariables>, 'query'> = {},
) {
  return Urql.useQuery<WallpapersQuery>({
    query: WallpapersDocument,
    ...options,
  });
}
export const CollectionDocument = gql`
  query collection($id: Int, $name: String) {
    collection(where: {id: $id, name: $name}) {
      id
      name
      wallpapers {
        u_url
        id
        createdAt
      }
    }
  }
`;

export function useCollectionQuery(
  options: Omit<Urql.UseQueryArgs<CollectionQueryVariables>, 'query'> = {},
) {
  return Urql.useQuery<CollectionQuery>({
    query: CollectionDocument,
    ...options,
  });
}
export const WallpaperDocument = gql`
  query wallpaper($id: Int) {
    wallpaper(where: {id: $id}) {
      id
      u_url
      createdAt
    }
  }
`;

export function useWallpaperQuery(
  options: Omit<Urql.UseQueryArgs<WallpaperQueryVariables>, 'query'> = {},
) {
  return Urql.useQuery<WallpaperQuery>({query: WallpaperDocument, ...options});
}
export const FeedDocument = gql`
  query Feed($where: PaginationArgs) {
    feed(where: $where) {
      u_url
      id
      createdAt
      collection {
        id
        name
      }
    }
  }
`;

export function useFeedQuery(
  options: Omit<Urql.UseQueryArgs<FeedQueryVariables>, 'query'> = {},
) {
  return Urql.useQuery<FeedQuery>({query: FeedDocument, ...options});
}
export const SigninDocument = gql`
  query signin {
    signin {
      email
      id
      devices {
        name
        id
        authorized
      }
    }
  }
`;

export function useSigninQuery(
  options: Omit<Urql.UseQueryArgs<SigninQueryVariables>, 'query'> = {},
) {
  return Urql.useQuery<SigninQuery>({query: SigninDocument, ...options});
}
