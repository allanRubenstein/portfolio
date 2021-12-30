import React from 'react';
// import classNames from 'classnames';
import LinkButton from '../link-button/LinkButton';

export interface PrimaryNavProps {
  classNames?: string;
}

const PrimaryNav = ({ classNames }: PrimaryNavProps) => {
  return (
    <div className={'primary-nav'}>
      <p>primary nav</p>
      <LinkButton variant="secondary" $color={undefined}>
        test
      </LinkButton>
    </div>
  );
};

export default PrimaryNav;
