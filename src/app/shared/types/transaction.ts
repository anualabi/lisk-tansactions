export interface ITranscation {
  id: string;
  moduleAssetId: string;
  moduleAssetName: string;
  fee: string;
  height: number;
  nonce: string;
  block: {
    id: string;
    height: number;
    timestamp: number;
  };
  sender: {
    address: string;
    publicKey: string;
    username: string;
  };
  signatures: string[];
  asset: {
    amount: string;
    data: string;
    recipient: {
      address: string;
      publicKey: string;
    };
  };
  isPending: boolean;
}

export interface IMeta {
  count: number;
  offset: number;
  total: number;
}

export interface APIResponse {
  data?: ITranscation[];
  meta?: IMeta;
  error?: boolean;
  message?: string;
}
