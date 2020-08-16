import axios from 'axios';

import {API_URL} from '@Root/private/constants';

const risksUrl = `${API_URL}/risk`;

export default class RisksAPI {
  public static fetchAll() {
    return axios.get(`${risksUrl}`, {
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

  // public static fetch(payload: IActionFetchAllRisksRequested['payload']) {
  //   return axios.get(`${notesUrl}/${payload.id}`, {
  //     headers: {
  //       Accept: 'application/json',
  //     },
  //   }).then((res) => {
  //     return res.data;
  //   }).catch((err) => {
  //     if (err.response != null) {
  //       throw Error(err.response.data.error.message);
  //     }
  //     throw Error(err);
  //   });
  // }

  // public static add(payload: IActionAddNoteRequested['payload']) {
  //   return axios.post(notesUrl, payload, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //     },
  //   }).then((res) => {
  //     return res.data;
  //   }).catch((err) => {
  //     if (err.response != null) {
  //       throw Error(err.response.data.error.message);
  //     }
  //     throw Error(err);
  //   });
  // }

  // public static edit(payload: IActionEditNoteRequested['payload']) {
  //   return axios.put(`${notesUrl}/${payload.id}`, payload, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //     },
  //   }).then((res) => {
  //     return res.data;
  //   }).catch((err) => {
  //     if (err.response != null) {
  //       throw Error(err.response.data.error.message);
  //     }
  //     throw Error(err);
  //   });
  // }

  // public static remove(payload: IActionRemoveNoteRequested['payload']) {
  //   return axios.delete(`${notesUrl}/${payload.id}`, {
  //     headers: {
  //       Accept: 'application/json',
  //     },
  //   }).then((res) => {
  //     return res.data;
  //   }).catch((err) => {
  //     if (err.response != null) {
  //       throw Error(err.response.data.error.message);
  //     }
  //     throw Error(err);
  //   });
  // }
}