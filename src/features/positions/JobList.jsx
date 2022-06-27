import { useDispatch } from 'react-redux';

import { JobPosition } from './JobPosition';

import { addFilter } from '../filter/filter-slice';

import { useFetchPositions } from './use-fetch-positions';
import { usePositions } from './use-positions';

const JobList = () => {
  useFetchPositions();

  const dispatch = useDispatch();
  const positions = usePositions();

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  };

  return (
    <div className="job-list">
      {positions.map((item) => (
        <JobPosition
          key={item.id}
          handleAddFilter={handleAddFilter}
          {...item}
        />
      ))}
    </div>
  );
};

export { JobList };
