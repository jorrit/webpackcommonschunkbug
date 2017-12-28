import Promise from 'bluebird';

const a = import(/* webpackChunkName: 'chunkA' */ './chunkA');
const b = import(/* webpackChunkName: 'chunkB' */ './chunkB');

Promise.all([a, b]);
