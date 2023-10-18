export interface Block {
  id: string;
  number: number;
  parentID: string;
  timestamp: number;
  gasLimit: number;
  beneficiary: string;
  gasUsed: number;
  totalScore: number;
  txRoot: string;
  stateRoot: string;
  signer: string;
  transactions: string[];
  isTrunk: boolean;
  txsFeatures?: number;
}
