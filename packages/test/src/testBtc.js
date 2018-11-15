import Btc from "@liquality/hw-app-btc";

export default async transport => {
  const btc = new Btc(transport);
  const result = await btc.getWalletPublicKey("44'/0'/0'/0");
  return result;
};
