import axios from 'axios';

import {API_URL} from '@Root/private/constants';
import {
  IActionAddRisksRequested,
  IActionEditRisksRequested,
  IActionFilterRisksRequested
} from './types';

const risksUrl = `${API_URL}/risk`;

export default class RisksAPI {
  public static fetchAll(payload: IActionFilterRisksRequested['payload']) {
    console.log('payload=====', payload);
    return axios.get(`${risksUrl}`, 
    { 
      params: {...payload?.payload},
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    }).then((res) => {
      return res.data;
    }).catch((err) => {
      if (err.response != null) {
        throw Error(err.response.data.error.message);
      }
      throw Error(err);
    });
  }

  public static add(payload: IActionAddRisksRequested['payload']) {
    return axios({
      method: 'post',
      url: risksUrl,
      data: payload?.payload, 
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    }).then((res) => {
      return res.data;
    }).catch((err) => {
      if (err.response != null) {
        throw Error(err.response.data.error.message);
      }
      throw Error(err);
    });
  }

  public static edit(payload: IActionEditRisksRequested['payload']) {
    console.log('payload?.payload====', payload?.payload);
    return axios({
      method: 'put',
      url: risksUrl,
      data: payload?.payload, 
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    }).then((res) => {
      return res.data;
    }).catch((err) => {
      if (err.response != null) {
        throw Error(err.response.data.error.message);
      }
      throw Error(err);
    });
  }
}