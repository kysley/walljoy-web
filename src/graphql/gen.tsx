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
  register: Credentials;
  signin?: Maybe<Account>;
  authenticateDevice?: Maybe<Scalars['Boolean']>;
};

export type MutationRefreshCredentialsArgs = {
  refreshToken: Scalars['String'];
};

export type MutationRegisterArgs = {
  input: LoginInput;
};

export type MutationAuthenticateDeviceArgs = {
  pin?: Maybe<Scalars['String']>;
  deviceId?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  wallpapers?: Maybe<Array<Maybe<Wallpaper>>>;
};

export type Wallpaper = {
  __typename?: 'Wallpaper';
  id: Scalars['String'];
  u_url: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type RegisterMutationVariables = Exact<{
  input: LoginInput;
}>;

export type RegisterMutation = {__typename?: 'Mutation'} & {
  register: {__typename?: 'Credentials'} & Pick<
    Credentials,
    'token' | 'refreshToken'
  >;
};

export type WallpapersQueryVariables = Exact<{[key: string]: never}>;

export type WallpapersQuery = {__typename?: 'Query'} & {
  wallpapers?: Maybe<
    Array<
      Maybe<
        {__typename?: 'Wallpaper'} & Pick<
          Wallpaper,
          'u_url' | 'id' | 'createdAt'
        >
      >
    >
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
export const WallpapersDocument = gql`
  query wallpapers {
    wallpapers {
      u_url
      id
      createdAt
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
