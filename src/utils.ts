import {createClient} from 'urql';

const clientUrl =
  import.meta.env.mode === 'PRODUCTION'
    ? 'FILLME'
    : 'http://localhost:8081/graphql';

export const urqlClient = createClient({
  url: clientUrl,
  fetchOptions: () => {
    const token = localStorage.getItem('token');
    if (!token) {
      return {};
    }
    return {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
  },
});

export const saveTokens = (token: string, refreshToken: string) => {
  localStorage.setItem('token', token);
  localStorage.setItem('refreshToken', refreshToken);
};
