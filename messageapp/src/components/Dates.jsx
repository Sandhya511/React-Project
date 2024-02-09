import React from 'react';

export const nowTimeStamp = () => {
  return (
    <React.Fragment>
      {new Date()
        .toISOString()
        .replace('T', ' ')
        .replace('Z', `${Math.floor(Math.random() * 1000)}+00:00`)}
    </React.Fragment>
  );
};
