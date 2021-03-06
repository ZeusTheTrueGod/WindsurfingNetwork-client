// @flow
import React from 'react';

import SurfaceCheckboxFilterContainer from '../containers/SurfaceCheckboxFilterContainer';
import BeachCheckboxFilterContainer from '../containers/BeachCheckboxFilterContainer';
import WindCheckboxFilterContainer from '../containers/WindCheckboxFilterContainer';
import ConvenienceCheckboxFilterContainer from '../containers/ConvenienceCheckboxFilterContainer';
import EntranceCheckboxFilterContainer from '../containers/EntranceCheckboxFilterContainer';
import BenthalCheckboxFilterContainer from '../containers/BenthalCheckboxFilterContainer';
import DangerCheckboxFilterContainer from '../containers/DangerCheckboxFilterContainer';

import CountrySelectorContainer from '../containers/CountrySelectorContainer';
import MapContainer from '../containers/MapContainer';
import RightPart from '../components/RightPart';

import { type Filters } from '../modules/dashboard';

export type StateProps = {|
  filters: Filters,
  isReady: boolean,
|};
export type DispatchProps = {||};
type A = { x: 5 };
({ x: 5 }: { ...A });
type Props = {| ...StateProps, ...DispatchProps |};

const Dashboard = ({ filters, isReady }: Props) => {
  if (!isReady) {
    return <div>Loading...</div>;
  }
  return (
    <div className='layout-main'>
      <div className='layout-left'>
        <SurfaceCheckboxFilterContainer />
        <BeachCheckboxFilterContainer />
        <WindCheckboxFilterContainer />
        <ConvenienceCheckboxFilterContainer />
        <EntranceCheckboxFilterContainer />
        <BenthalCheckboxFilterContainer />
        <DangerCheckboxFilterContainer />
        <CountrySelectorContainer />

      </div>
      <div className='layout-middle'>
        <MapContainer
          containerElement={<div style={{ height: `calc(100% - 4px)` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
      <RightPart />
    </div>
  );
};

export default Dashboard;

