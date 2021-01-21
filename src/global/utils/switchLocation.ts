import type { LocationName, VisibleLocationsSet, HiddenLocationsSet } from '@/models';

type FunctionReturns = {
  hiddenLocationsSet: HiddenLocationsSet;
  visibleLocationsSet: VisibleLocationsSet;
};

export default function switchLocation(
  locationName: LocationName,
  hiddenLocationsSet: HiddenLocationsSet,
  visibleLocationsSet: VisibleLocationsSet
): FunctionReturns {
  const isVisible = visibleLocationsSet.has(locationName);

  (isVisible ? hiddenLocationsSet : visibleLocationsSet).add(locationName);
  (isVisible ? visibleLocationsSet : hiddenLocationsSet).delete(locationName);

  return { hiddenLocationsSet, visibleLocationsSet };
}
