import { useDispatch, useSelector } from 'react-redux';

import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';

import { clearFilter, removeFilter, selectFilters } from './filter-slice';

const FilterPanel = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFilters);

  const handleRemoveFilter = (filter) => {
    dispatch(removeFilter(filter));
  };

  const handleClearFilters = () => {
    dispatch(clearFilter());
  };

  if (currentFilters.length === 0) return null;

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {currentFilters.map((filter) => (
            <Badge
              key={filter}
              variant="clearable"
              onClear={() => handleRemoveFilter(filter)}
            >
              {filter}
            </Badge>
          ))}
        </Stack>

        <button className="link" onClick={() => handleClearFilters()}>
          Clear
        </button>
      </div>
    </Card>
  );
};

export { FilterPanel };
