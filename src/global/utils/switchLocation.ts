import type { LocationName, LocationSet } from '@/models';

type FunctionReturns = {
  hiddenLocationsSet: LocationSet;
  visibleLocationsSet: LocationSet;
};

export default function switchLocation(
  locationName: LocationName,
  hiddenLocationsSet: LocationSet,
  visibleLocationsSet: LocationSet
): FunctionReturns {
  const isVisible = visibleLocationsSet.has(locationName);

  (isVisible ? hiddenLocationsSet : visibleLocationsSet).add(locationName);
  (isVisible ? visibleLocationsSet : hiddenLocationsSet).delete(locationName);

  return { hiddenLocationsSet, visibleLocationsSet };
}
