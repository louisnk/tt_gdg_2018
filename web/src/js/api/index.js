/* eslint no-console: 0 */

import apisauce from 'apisauce';
import {
  DEV_URL,
} from 'react-native-dotenv';
// import C from '../../../config/Constants';

const getAuthorizationHeader = () => {
  // const tokenCache = Cache.get(C.CACHE.AUTH_TOKEN);
  // if (tokenCache) {
  //   const { bearerToken } = tokenCache;
  //   return `Bearer ${bearerToken}`;
  // }
  return null;
};

const Create = (apiBaseURL = DEV_URL) => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL: apiBaseURL,
    // here are some default headers
    headers: {
      // 'Cache-Control': 'no-cache'
    },
    // 10 second timeout...
    timeout: 10000,
  });

  api.addRequestTransform((request) => {
    console.log('[Api] - request: ', request);
    const authorizationHeader = getAuthorizationHeader();
    if (authorizationHeader) {
      request.headers.Authorization = authorizationHeader;
    }
  });


  // ------
  // STEP 2
  // ------
  //
  // Define some functions that call the api.  The goal is to provide
  // a thin wrapper of the api layer providing nicer feeling functions
  // rather than "get", "post" and friends.
  //
  // I generally don't like wrapping the output at this level because
  // sometimes specific actions need to be take on `403` or `401`, etc.
  //
  // Since we can't hide from that, we embrace it by getting out of the
  // way at this level.
  //

  // Test
  const testConnection = () => api.get('/health');

  // Properties
  const createProperty = data => api.post('/property', { data });
  const getProperties = params => api.get('/property', { params });
  const getProperty = id => api.get(`/property/${id}`);
  const savePropertyList = data => api.put('/users/${uuid}/properties', { data })
  const updateProperty = data => api.put('/property', { data });


  // ------
  // STEP 3
  // ------
  //
  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  // methods in step 2.
  //
  // Notice we're not returning back the `api` created in step 1?  That's
  // because it is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.
  //
  return {
    // a list of the API functions from step 2
    testConnection,
    createProperty,
    getProperties,
    getProperty,
    savePropertyList,
    updateProperty,
  };
};

// let's return back our create method as the default.
export default {
  Create,
};