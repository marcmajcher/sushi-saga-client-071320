import React, { Fragment } from 'react';
import MoreButton from '../components/MoreButton';
import Sushi from '../components/Sushi';

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushi.map((s) => (
          <Sushi key={s.id} sushi={s} handleClick={props.eatSushi} />
        ))}
        <MoreButton handleClick={props.showMore} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
