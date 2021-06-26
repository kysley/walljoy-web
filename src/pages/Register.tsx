import React, {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {Link, useLocation} from 'react-router-dom';

import {useRegisterMutation} from '../graphql/gen';
import {saveTokens} from '../utils';

export const Register = () => {
  const location = useLocation();
  const [dat, mut] = useRegisterMutation();
  const {register, handleSubmit} = useForm();

  useEffect(() => {
    const qs = new URLSearchParams(location.search);
    console.log({sId: qs.get('sId')});
  }, []);

  const handleFormSubmit = async (data: any) => {
    const qs = new URLSearchParams(location.search);
    const sessionId = qs.get('sId');
    if (!sessionId) {
      return;
    }

    const res = await mut({input: {email: data.email, sessionId}});
    if (!res.error) {
      const token = res.data?.register.token!;
      const refresh = res.data?.register.refreshToken!;
      saveTokens(token, refresh);
    }
  };

  return (
    <div>
      <h1>let's get you started!</h1>
      <span>
        all we need is an email, you will be authenticated with your current
        device
      </span>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <input {...register('email')} placeholder="Email" />
        <button type="submit">Register</button>
      </form>

      <div>
        <h2>already have an account?</h2>
        <Link to="/auth">Add this device to your account</Link>
      </div>
    </div>
  );
};
