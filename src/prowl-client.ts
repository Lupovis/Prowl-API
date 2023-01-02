import axios, { Axios } from "axios";
import { IProwlIPReputationResponse } from "./interfaces/prowl-api-response";

/**
 * Prowl client used to call prowl api for checking ip reputation
 * @param {String} prowlBaseUrl - Base url for calling prowl api
 * Example - https://XXXXXXXXXX.execute-api.eu-west-1.amazonaws.com
 * @param {String} prowlApiKey - Api key used to call prowl api
 */
export class ProwlClient {
  private axiosClient: Axios;

  constructor(prowlBaseUrl: string, prowlApiKey: string) {
    this.axiosClient = axios.create({
      baseURL: prowlBaseUrl,
      headers: {
        "X-API-Key": prowlApiKey,
      },
    });
  }

  /**
   * Get reputation of ip address using prowl api
   * @param  {string} ipAddress - IP address that you want to get reputation for
   * @returns the reputation of the ip address or undefined if error occurs while calling the api
   */
  async getIpReputation(
    ipAddress: string
  ): Promise<IProwlIPReputationResponse | undefined> {
    try {
      const response = (
        await this.axiosClient.get(`live/GetIPReputation?ip=${ipAddress}`)
      ).data;
      return response;
    } catch (error) {
      let errorMessage = error;
      if (error.response) {
        errorMessage = error.response.data;
      } else if (error.request) {
        errorMessage = error.request;
      }

      console.error(
        "Something went wrong while calling the prowl API - ",
        errorMessage
      );
    }
  }
}
