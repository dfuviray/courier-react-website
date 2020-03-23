import React from 'react';

import { TrackWrapper } from './trackWrapper';

const Track = () => {
  return (
    <TrackWrapper>
      <h1 className="track-package__title">
        Track your package. simple and fast
      </h1>
      <div className="track-package__search">
        <input className="track-package__input" type="text" />
        <button className="btn track-package__btn">Track now</button>
      </div>
    </TrackWrapper>
  );
};

export default Track;
