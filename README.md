# Prowl-API

Prowl is an API that allows you to send IP and in return obtain the reputation of the IP as well as indicators of attacks and indicators of compromise associated with the address. Lupovis monitors the web in real time and identifies malicious IP addresses for you.

## Getting Started

To start using the Prowl API, you will need to follow these steps:

1. Go to prowl page in the AWS marketplace - <https://aws.amazon.com/marketplace/pp/prodview-cr64x4lse5uui>
2. Obtain the Prowl **base url** and **API token** to use for searching IP reputation
3. Use this code snippet to do an IP reputation search

   ```js
   import { ProwlClient } from 'prowl-ip-reputation'

   const client = new ProwlClient(<prowl-base-url>, <prowl-api-key>)

   client
      .getIpReputation("8.8.8.8")
      .then((response) => {
         console.log(response);
      })
      .catch((error) => {
         console.error(error);
      });
   ```

## API References

These are the APIs available to use

- getIpReputation(ipAddress)

  This method will give you the reputation information for a valid IP address.
