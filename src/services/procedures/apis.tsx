import axios from 'axios';

import {API_URL} from '@Root/private/constants';

const proceduresUrl = `${API_URL}/procedure`;

export default class ProceduresAPI {
  public static fetchAll() {
    return axios.get(`${proceduresUrl}`, {
      headers: {
        Accept: 'application/json',
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