import axios from 'axios';

import {API_URL} from '@Root/private/constants';
import {
  IActionAddBenefitsRequested,
  IActionEditBenefitsRequested,
  IActionFilterBenefitsRequested
} from './types';

const benefitsUrl = `${API_URL}/benefit`;

export default class BenefitsAPI {
  public static fetchAll(payload: IActionFilterBenefitsRequested['payload']) {
    return axios.get(`${benefitsUrl}`, 
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

  public static add(payload: IActionAddBenefitsRequested['payload']) {
    return axios({
      method: 'post',
      url: benefitsUrl,
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

  public static edit(payload: IActionEditBenefitsRequested['payload']) {
    return axios({
      method: 'put',
      url: benefitsUrl,
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