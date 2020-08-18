import axios from 'axios';

import {API_URL} from '@Root/private/constants';
import {
  IActionAddProceduresRequested,
  IActionEditProceduresRequested,
  IActionFilterProceduresRequested
} from './types';

const proceduresUrl = `${API_URL}/procedure`;

export default class ProceduresAPI {
  public static fetchAll(payload: IActionFilterProceduresRequested['payload']) {
    console.log('payload=====', payload);
    return axios.get(`${proceduresUrl}`, 
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

  public static add(payload: IActionAddProceduresRequested['payload']) {
    return axios({
      method: 'post',
      url: proceduresUrl,
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

  public static edit(payload: IActionEditProceduresRequested['payload']) {
    console.log('payload?.payload====', payload?.payload);
    return axios({
      method: 'put',
      url: proceduresUrl,
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