export const ADD_FEATURE = 'ADD_FEATURE';

export const addFeature = featureName => {
  console.log(featureName);
  return {
    type: ADD_FEATURE,
    payload: featureName
  }
}
