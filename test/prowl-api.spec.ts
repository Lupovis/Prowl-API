import { ProwlClient } from "../src";

const prowlBaseUrl = process.env.PROWL_BASE_URL || "";
const prowlApiKey = process.env.PROWL_API_KEY || "";

describe("Class ProwlClient", () => {
  let prowlClient: ProwlClient;

  beforeEach(() => {
    prowlClient = new ProwlClient(prowlBaseUrl, prowlApiKey);
  });

  it("should instantiate client", () => {
    expect(prowlClient).toBeInstanceOf(ProwlClient);
    expect(prowlClient).toHaveProperty("getIpReputation");
  });

  describe("ip", () => {
    it("should return information for valid ip address", async () => {
      const result = await prowlClient.getIpReputation("8.8.8.8");
      expect(result).toMatchObject({
        ip: "8.8.8.8",
        ttps: [],
      });
    });

    it("should return undefined for invalid ip address", async () => {
      const result = await prowlClient.getIpReputation("invalid");
      expect(result).toBe(undefined);
    });
  });
});
