/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export type Airdrop = {
  __typename?: 'Airdrop';
  PK: Scalars['String']['output'];
  SK: Scalars['String']['output'];
  airdrop_address: Scalars['String']['output'];
  amount_per_user: Scalars['String']['output'];
  authority: Scalars['String']['output'];
  claimed_count: Scalars['Int']['output'];
  completed_at?: Maybe<Scalars['Float']['output']>;
  compress_signature?: Maybe<Scalars['String']['output']>;
  compressed: Scalars['Boolean']['output'];
  created_at: Scalars['Float']['output'];
  distributed_count: Scalars['Int']['output'];
  eligible_users: Array<EligibleUser>;
  failed_count: Scalars['Int']['output'];
  is_active: Scalars['Boolean']['output'];
  last_processed_index: Scalars['Int']['output'];
  max_recipients: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  name: Scalars['String']['output'];
  retry_count: Scalars['Int']['output'];
  snapshot_timestamp: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  token_mint: Scalars['String']['output'];
  total_amount: Scalars['String']['output'];
  transaction_signature: Scalars['String']['output'];
};

export type AirdropCostEstimate = {
  __typename?: 'AirdropCostEstimate';
  cache_age_seconds: Scalars['Int']['output'];
  cache_hit: Scalars['Boolean']['output'];
  compression_cost_sol: Scalars['Float']['output'];
  total_cost_lamports: Scalars['String']['output'];
  total_cost_sol: Scalars['Float']['output'];
  total_phone_accounts: Scalars['Int']['output'];
  total_transfer_cost_sol: Scalars['Float']['output'];
  transfer_cost_per_user_sol: Scalars['Float']['output'];
  used_stale_cache: Scalars['Boolean']['output'];
};

export type AirdropDistribution = {
  __typename?: 'AirdropDistribution';
  PK: Scalars['String']['output'];
  SK: Scalars['String']['output'];
  airdrop_address: Scalars['String']['output'];
  amount: Scalars['String']['output'];
  claim_status: ClaimStatus;
  claim_transaction_signature?: Maybe<Scalars['String']['output']>;
  claimed_at?: Maybe<Scalars['Float']['output']>;
  distributed_at: Scalars['Float']['output'];
  message: Scalars['String']['output'];
  name: Scalars['String']['output'];
  recipient_phone_account: Scalars['String']['output'];
  recipient_wallet: Scalars['String']['output'];
  status: Scalars['String']['output'];
  token_mint: Scalars['String']['output'];
  transaction_signature: Scalars['String']['output'];
};

export type AirdropDistributionList = {
  __typename?: 'AirdropDistributionList';
  count: Scalars['Int']['output'];
  distributions: Array<AirdropDistribution>;
  limit: Scalars['Int']['output'];
  offset: Scalars['Int']['output'];
};

export type AirdropEligibility = {
  __typename?: 'AirdropEligibility';
  airdrop_address: Scalars['String']['output'];
  amount?: Maybe<Scalars['Float']['output']>;
  claim_transaction_signature?: Maybe<Scalars['String']['output']>;
  claimed_at?: Maybe<Scalars['Float']['output']>;
  has_claimed: Scalars['Boolean']['output'];
  is_eligible: Scalars['Boolean']['output'];
  wallet: Scalars['String']['output'];
};

export type AirdropJobStatus = {
  __typename?: 'AirdropJobStatus';
  airdrop_address: Scalars['String']['output'];
  distributed_count: Scalars['Int']['output'];
  estimated_completion_time?: Maybe<Scalars['String']['output']>;
  failed_count: Scalars['Int']['output'];
  last_updated: Scalars['Float']['output'];
  message: Scalars['String']['output'];
  name: Scalars['String']['output'];
  progress_percentage: Scalars['Float']['output'];
  remaining_count: Scalars['Int']['output'];
  status: Scalars['String']['output'];
  token_mint: Scalars['String']['output'];
  total_eligible: Scalars['Int']['output'];
};

export type AirdropList = {
  __typename?: 'AirdropList';
  airdrops: Array<Airdrop>;
  count: Scalars['Int']['output'];
  limit: Scalars['Int']['output'];
  offset: Scalars['Int']['output'];
};

export type ClaimAirdropResponse = {
  __typename?: 'ClaimAirdropResponse';
  claimed_at?: Maybe<Scalars['Float']['output']>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type ClaimStatus =
  | 'CLAIMED'
  | 'UNCLAIMED';

export type CompressedBalance = {
  __typename?: 'CompressedBalance';
  account_count: Scalars['Int']['output'];
  balance: Scalars['String']['output'];
  token_mint: Scalars['String']['output'];
  wallet: Scalars['String']['output'];
};

export type DataPack = {
  __typename?: 'DataPack';
  PK: Scalars['String']['output'];
  SK: Scalars['String']['output'];
  call_minutes_added: Scalars['Int']['output'];
  daysRemaining: Scalars['Int']['output'];
  events: Array<Event>;
  isValid: Scalars['Boolean']['output'];
  owner: Scalars['String']['output'];
  ownerUser?: Maybe<User>;
  pack_id: Scalars['Int']['output'];
  pack_name: Scalars['String']['output'];
  phoneAccountRecord?: Maybe<PhoneAccount>;
  phone_account: Scalars['String']['output'];
  price_paid: Scalars['Float']['output'];
  purchased_at: Scalars['Float']['output'];
  sms_added: Scalars['Int']['output'];
  valid_until: Scalars['Float']['output'];
};


export type DataPackEventsArgs = {
  desc?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type DatapacksResponse = {
  __typename?: 'DatapacksResponse';
  count: Scalars['Int']['output'];
  datapacks: Array<DataPack>;
  limit: Scalars['Int']['output'];
  offset: Scalars['Int']['output'];
  phoneAccount: Scalars['String']['output'];
};

export type DecompressInstructionResponse = {
  __typename?: 'DecompressInstructionResponse';
  amount?: Maybe<Scalars['String']['output']>;
  message: Scalars['String']['output'];
  recipientAta?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
  transaction?: Maybe<Scalars['String']['output']>;
};

export type EligibleUser = {
  __typename?: 'EligibleUser';
  created_at: Scalars['Float']['output'];
  phone_account: Scalars['String']['output'];
  wallet: Scalars['String']['output'];
};

export type Event = {
  __typename?: 'Event';
  PK: Scalars['String']['output'];
  SK: Scalars['String']['output'];
  admin?: Maybe<Scalars['String']['output']>;
  adminUser?: Maybe<User>;
  amount?: Maybe<Scalars['Float']['output']>;
  authority?: Maybe<Scalars['String']['output']>;
  country_code?: Maybe<Scalars['String']['output']>;
  event_category: Scalars['String']['output'];
  event_data: Scalars['JSON']['output'];
  event_type: Scalars['String']['output'];
  from?: Maybe<Scalars['String']['output']>;
  fromUser?: Maybe<User>;
  message_id?: Maybe<Scalars['String']['output']>;
  nft_mint?: Maybe<Scalars['String']['output']>;
  number?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  ownerUser?: Maybe<User>;
  pack_id?: Maybe<Scalars['Int']['output']>;
  phoneAccountRecord?: Maybe<PhoneAccount>;
  phoneNumberRecord?: Maybe<PhoneNumber>;
  phone_account?: Maybe<Scalars['String']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  plan_id?: Maybe<Scalars['Int']['output']>;
  recipient?: Maybe<Scalars['String']['output']>;
  recipientUser?: Maybe<User>;
  sender?: Maybe<Scalars['String']['output']>;
  senderUser?: Maybe<User>;
  signature: Scalars['String']['output'];
  slot: Scalars['Float']['output'];
  subscription_end?: Maybe<Scalars['Float']['output']>;
  subscription_start?: Maybe<Scalars['Float']['output']>;
  timestamp: Scalars['Float']['output'];
  to?: Maybe<Scalars['String']['output']>;
  toUser?: Maybe<User>;
  transaction?: Maybe<Transaction>;
  ttl: Scalars['Float']['output'];
  wrapper_account?: Maybe<Scalars['String']['output']>;
};

export type EventsPaginatedResponse = {
  __typename?: 'EventsPaginatedResponse';
  count: Scalars['Int']['output'];
  events: Array<Event>;
  limit: Scalars['Int']['output'];
  offset: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['String']['output']>;
  claimAirdrop: ClaimAirdropResponse;
  createDecompressInstruction: DecompressInstructionResponse;
  generatePinataToken: PinataTokenResponse;
};


export type MutationClaimAirdropArgs = {
  airdropAddress: Scalars['String']['input'];
  transactionSignature: Scalars['String']['input'];
  wallet: Scalars['String']['input'];
};


export type MutationCreateDecompressInstructionArgs = {
  airdropAddress: Scalars['String']['input'];
  wallet: Scalars['String']['input'];
};

export type PhoneAccount = {
  __typename?: 'PhoneAccount';
  PK: Scalars['String']['output'];
  SK: Scalars['String']['output'];
  account_pubkey: Scalars['String']['output'];
  active_datapack_plan_id: Scalars['Int']['output'];
  active_subscription_plan_id: Scalars['Int']['output'];
  created_at: Scalars['Float']['output'];
  datapack_call_minutes_remaining: Scalars['Int']['output'];
  datapack_sms_remaining: Scalars['Int']['output'];
  datapack_valid_until: Scalars['Float']['output'];
  datapacks: Array<DataPack>;
  events: Array<Event>;
  hasActiveDatapack: Scalars['Boolean']['output'];
  hasActiveSubscription: Scalars['Boolean']['output'];
  linkedPhoneNumber?: Maybe<PhoneNumber>;
  linked_phone_number?: Maybe<Scalars['String']['output']>;
  owner: Scalars['String']['output'];
  ownerUser?: Maybe<User>;
  smsMessages: Array<SmsMessage>;
  subscription_auto_renew: Scalars['Boolean']['output'];
  subscription_end: Scalars['Float']['output'];
  subscription_start: Scalars['Float']['output'];
  subscriptions: Array<Subscription>;
  total_sms_sent: Scalars['Int']['output'];
};


export type PhoneAccountDatapacksArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type PhoneAccountEventsArgs = {
  desc?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type PhoneAccountSmsMessagesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type PhoneAccountSubscriptionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type PhoneNumber = {
  __typename?: 'PhoneNumber';
  PK: Scalars['String']['output'];
  SK: Scalars['String']['output'];
  account_pubkey: Scalars['String']['output'];
  country_code: Scalars['String']['output'];
  created_at: Scalars['Float']['output'];
  events: Array<Event>;
  full_number: Scalars['String']['output'];
  is_wrapped: Scalars['String']['output'];
  nft_mint?: Maybe<Scalars['String']['output']>;
  number: Scalars['String']['output'];
  owner: Scalars['String']['output'];
  ownerUser?: Maybe<User>;
  phoneAccountRecord?: Maybe<PhoneAccount>;
  phone_account?: Maybe<Scalars['String']['output']>;
  price_paid: Scalars['Float']['output'];
  wrapper?: Maybe<PhoneNumberWrapper>;
};


export type PhoneNumberEventsArgs = {
  desc?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type PhoneNumberWrapper = {
  __typename?: 'PhoneNumberWrapper';
  PK: Scalars['String']['output'];
  SK: Scalars['String']['output'];
  country_code: Scalars['String']['output'];
  created_at: Scalars['Float']['output'];
  full_number: Scalars['String']['output'];
  nft_mint: Scalars['String']['output'];
  nonce: Scalars['Int']['output'];
  number: Scalars['String']['output'];
  originalAuthorityUser?: Maybe<User>;
  original_authority: Scalars['String']['output'];
  owner: Scalars['String']['output'];
  ownerUser?: Maybe<User>;
  phoneNumberAccount?: Maybe<PhoneNumber>;
  phone_number_account: Scalars['String']['output'];
  tag: Scalars['String']['output'];
  transfer_allowed: Scalars['Boolean']['output'];
};

export type PhoneNumbersResponse = {
  __typename?: 'PhoneNumbersResponse';
  count: Scalars['Int']['output'];
  limit: Scalars['Int']['output'];
  offset: Scalars['Int']['output'];
  phoneNumbers: Array<PhoneNumber>;
  wallet: Scalars['String']['output'];
};

export type PinataTokenResponse = {
  __typename?: 'PinataTokenResponse';
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  token?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  activeSubscription?: Maybe<Subscription>;
  airdrop?: Maybe<Airdrop>;
  airdropJobStatus: AirdropJobStatus;
  airdropsByAuthority: AirdropList;
  airdropsByMint: AirdropList;
  calculateAirdropCost: AirdropCostEstimate;
  datapackEvents: EventsPaginatedResponse;
  datapacks: DatapacksResponse;
  events: EventsPaginatedResponse;
  eventsByTransaction: EventsPaginatedResponse;
  financialEvents: EventsPaginatedResponse;
  phoneAccount?: Maybe<PhoneAccount>;
  phoneAccountByAccount?: Maybe<PhoneAccount>;
  phoneAccountEvents: EventsPaginatedResponse;
  phoneNumber?: Maybe<PhoneNumber>;
  phoneNumberEvents: EventsPaginatedResponse;
  phoneNumbers: PhoneNumbersResponse;
  phoneNumbersFiltered: PhoneNumbersResponse;
  recentTransactions: TransactionsPaginatedResponse;
  smsByRecipient: SmsMessagesResponse;
  smsBySender: SmsMessagesResponse;
  smsMessages: SmsMessagesResponse;
  subscriptionEvents: EventsPaginatedResponse;
  subscriptions: SubscriptionsResponse;
  transaction?: Maybe<Transaction>;
  user?: Maybe<User>;
  userAirdropClaims: AirdropDistributionList;
  userAirdropEligibility: AirdropEligibility;
  userAirdrops: UserAirdropsList;
  userCompressedBalance: CompressedBalance;
  userSubscriptions: SubscriptionsResponse;
};


export type QueryActiveSubscriptionArgs = {
  wallet: Scalars['String']['input'];
};


export type QueryAirdropArgs = {
  airdropAddress: Scalars['String']['input'];
};


export type QueryAirdropJobStatusArgs = {
  airdropAddress: Scalars['String']['input'];
};


export type QueryAirdropsByAuthorityArgs = {
  authority: Scalars['String']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAirdropsByMintArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  tokenMint: Scalars['String']['input'];
};


export type QueryCalculateAirdropCostArgs = {
  excludeWallet?: InputMaybe<Scalars['String']['input']>;
};


export type QueryDatapackEventsArgs = {
  desc?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  phoneAccount: Scalars['String']['input'];
};


export type QueryDatapacksArgs = {
  desc?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  phoneAccount: Scalars['String']['input'];
};


export type QueryEventsArgs = {
  desc?: InputMaybe<Scalars['Boolean']['input']>;
  eventCategory?: InputMaybe<Scalars['String']['input']>;
  eventType?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  signature?: InputMaybe<Scalars['String']['input']>;
  wallet?: InputMaybe<Scalars['String']['input']>;
};


export type QueryEventsByTransactionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  signature: Scalars['String']['input'];
};


export type QueryFinancialEventsArgs = {
  account: Scalars['String']['input'];
  desc?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPhoneAccountArgs = {
  wallet: Scalars['String']['input'];
};


export type QueryPhoneAccountByAccountArgs = {
  phoneAccount: Scalars['String']['input'];
};


export type QueryPhoneAccountEventsArgs = {
  desc?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  wallet: Scalars['String']['input'];
};


export type QueryPhoneNumberArgs = {
  fullNumber: Scalars['String']['input'];
};


export type QueryPhoneNumberEventsArgs = {
  desc?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  phoneNumber: Scalars['String']['input'];
};


export type QueryPhoneNumbersArgs = {
  desc?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  wallet: Scalars['String']['input'];
};


export type QueryPhoneNumbersFilteredArgs = {
  desc?: InputMaybe<Scalars['Boolean']['input']>;
  isWrapped?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  wallet: Scalars['String']['input'];
};


export type QueryRecentTransactionsArgs = {
  desc?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySmsByRecipientArgs = {
  desc?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  recipient: Scalars['String']['input'];
};


export type QuerySmsBySenderArgs = {
  desc?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sender: Scalars['String']['input'];
};


export type QuerySmsMessagesArgs = {
  desc?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  phoneAccount: Scalars['String']['input'];
};


export type QuerySubscriptionEventsArgs = {
  desc?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  phoneAccount: Scalars['String']['input'];
};


export type QuerySubscriptionsArgs = {
  desc?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  phoneAccount: Scalars['String']['input'];
};


export type QueryTransactionArgs = {
  signature: Scalars['String']['input'];
};


export type QueryUserArgs = {
  wallet: Scalars['String']['input'];
};


export type QueryUserAirdropClaimsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  wallet: Scalars['String']['input'];
};


export type QueryUserAirdropEligibilityArgs = {
  airdropAddress: Scalars['String']['input'];
  wallet: Scalars['String']['input'];
};


export type QueryUserAirdropsArgs = {
  claimed?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  wallet: Scalars['String']['input'];
};


export type QueryUserCompressedBalanceArgs = {
  tokenMint: Scalars['String']['input'];
  wallet: Scalars['String']['input'];
};


export type QueryUserSubscriptionsArgs = {
  desc?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  wallet: Scalars['String']['input'];
};

export type SmsMessage = {
  __typename?: 'SmsMessage';
  PK: Scalars['String']['output'];
  SK: Scalars['String']['output'];
  account_pubkey: Scalars['String']['output'];
  created_at: Scalars['Float']['output'];
  events: Array<Event>;
  message_id: Scalars['String']['output'];
  phoneAccountRecord?: Maybe<PhoneAccount>;
  phone_account: Scalars['String']['output'];
  recipient: Scalars['String']['output'];
  recipientUser?: Maybe<User>;
  sender: Scalars['String']['output'];
  senderUser?: Maybe<User>;
};


export type SmsMessageEventsArgs = {
  desc?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type SmsMessagesResponse = {
  __typename?: 'SmsMessagesResponse';
  count: Scalars['Int']['output'];
  limit: Scalars['Int']['output'];
  messages: Array<SmsMessage>;
  offset: Scalars['Int']['output'];
  phoneAccount?: Maybe<Scalars['String']['output']>;
  recipient?: Maybe<Scalars['String']['output']>;
  sender?: Maybe<Scalars['String']['output']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  PK: Scalars['String']['output'];
  SK: Scalars['String']['output'];
  auto_renew: Scalars['Boolean']['output'];
  call_minutes_included: Scalars['Int']['output'];
  daysRemaining: Scalars['Int']['output'];
  events: Array<Event>;
  isActive: Scalars['Boolean']['output'];
  owner: Scalars['String']['output'];
  ownerUser?: Maybe<User>;
  phoneAccountRecord?: Maybe<PhoneAccount>;
  phone_account: Scalars['String']['output'];
  plan_id: Scalars['Int']['output'];
  plan_name: Scalars['String']['output'];
  price_paid: Scalars['Float']['output'];
  purchased_at: Scalars['Float']['output'];
  sms_included: Scalars['Int']['output'];
  status: SubscriptionStatus;
  subscription_end: Scalars['Float']['output'];
  subscription_start: Scalars['Float']['output'];
};


export type SubscriptionEventsArgs = {
  desc?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type SubscriptionStatus =
  | 'ACTIVE'
  | 'CANCELLED'
  | 'EXPIRED';

export type SubscriptionsResponse = {
  __typename?: 'SubscriptionsResponse';
  count: Scalars['Int']['output'];
  limit: Scalars['Int']['output'];
  offset: Scalars['Int']['output'];
  phoneAccount?: Maybe<Scalars['String']['output']>;
  subscriptions: Array<Subscription>;
  wallet?: Maybe<Scalars['String']['output']>;
};

export type Transaction = {
  __typename?: 'Transaction';
  PK: Scalars['String']['output'];
  SK: Scalars['String']['output'];
  block_time: Scalars['Float']['output'];
  error?: Maybe<Scalars['String']['output']>;
  events: Array<Event>;
  processed_at: Scalars['Float']['output'];
  raw_transaction: Scalars['JSON']['output'];
  signature: Scalars['String']['output'];
  slot: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  ttl: Scalars['Float']['output'];
};


export type TransactionEventsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type TransactionsPaginatedResponse = {
  __typename?: 'TransactionsPaginatedResponse';
  count: Scalars['Int']['output'];
  limit: Scalars['Int']['output'];
  offset: Scalars['Int']['output'];
  transactions: Array<Transaction>;
};

export type User = {
  __typename?: 'User';
  datapacks: Array<DataPack>;
  phoneAccount?: Maybe<PhoneAccount>;
  phoneNumbers: Array<PhoneNumber>;
  subscriptions: Array<Subscription>;
  unwrappedPhoneNumbers: Array<PhoneNumber>;
  wallet: Scalars['String']['output'];
  wrappedPhoneNumbers: Array<PhoneNumber>;
};


export type UserDatapacksArgs = {
  desc?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type UserPhoneNumbersArgs = {
  desc?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type UserSubscriptionsArgs = {
  desc?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type UserUnwrappedPhoneNumbersArgs = {
  desc?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type UserWrappedPhoneNumbersArgs = {
  desc?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type UserAirdropsList = {
  __typename?: 'UserAirdropsList';
  has_more: Scalars['Boolean']['output'];
  items: Array<AirdropDistribution>;
  total_count: Scalars['Int']['output'];
};

export type GetPhoneNumbersQueryVariables = Exact<{
  wallet: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetPhoneNumbersQuery = { __typename?: 'Query', phoneNumbers: { __typename?: 'PhoneNumbersResponse', wallet: string, count: number, offset: number, limit: number, phoneNumbers: Array<{ __typename?: 'PhoneNumber', country_code: string, number: string, full_number: string, owner: string, phone_account?: string | null, is_wrapped: string, nft_mint?: string | null, created_at: number, account_pubkey: string, price_paid: number, phoneAccountRecord?: { __typename?: 'PhoneAccount', owner: string, linked_phone_number?: string | null, hasActiveSubscription: boolean, total_sms_sent: number } | null }> } };


export const GetPhoneNumbersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPhoneNumbers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"wallet"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"phoneNumbers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"wallet"},"value":{"kind":"Variable","name":{"kind":"Name","value":"wallet"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"desc"},"value":{"kind":"BooleanValue","value":true}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"wallet"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumbers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"country_code"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"full_number"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}},{"kind":"Field","name":{"kind":"Name","value":"phone_account"}},{"kind":"Field","name":{"kind":"Name","value":"is_wrapped"}},{"kind":"Field","name":{"kind":"Name","value":"nft_mint"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"account_pubkey"}},{"kind":"Field","name":{"kind":"Name","value":"price_paid"}},{"kind":"Field","name":{"kind":"Name","value":"phoneAccountRecord"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"owner"}},{"kind":"Field","name":{"kind":"Name","value":"linked_phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"hasActiveSubscription"}},{"kind":"Field","name":{"kind":"Name","value":"total_sms_sent"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetPhoneNumbersQuery, GetPhoneNumbersQueryVariables>;