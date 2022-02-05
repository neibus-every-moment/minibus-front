interface postsParams {
    start: number,
    size: number,
    sorting: string,
    regionState: string[],
    transportationState: string[]
}

export function posts({
  start,
  size,
  sorting,
  regionState,
  transportationState }:postsParams) {
  return 'http://3.37.182.59:8080/api/posts?' +
  `start=${start}` +
  `&size=${size}` +
  `&sorting=${sorting}` +
  `${regionState
    .filter(region => region)
    .map(region => `&region=${region}`)
    .join('')}` +
  `${transportationState
    .filter(transportation => transportation)
    .map(transportation => `&transpotation=${transportation}`)
    .join('')}`;
}
