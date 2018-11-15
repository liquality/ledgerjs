import Ada from "@liquality/hw-app-ada";

export default async transport => {
  const ada = new Ada(transport);
  const result = await ada.getWalletRecoveryPassphrase();
  return result;
};
