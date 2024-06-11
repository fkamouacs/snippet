import React from 'react';
import { authConfig } from '@/lib/auth';
import { getServerSession } from 'next-auth';

const Landing = async () => {
  const session = await getServerSession(authConfig);

  return <div>Landing</div>;
};

export default Landing;
