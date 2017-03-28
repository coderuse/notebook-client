/// <reference path="../../typings/index.d.ts" />

import { createHistory } from 'history';
import { useQueries } from 'react-router';

const browserHistory = useQueries(createHistory)({
  basename: '/memoirable'
});

export default browserHistory;