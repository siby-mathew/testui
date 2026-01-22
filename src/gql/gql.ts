/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query GetPhoneNumbers($wallet: String!, $limit: Int, $offset: Int) {\n    phoneNumbers(wallet: $wallet, limit: $limit, offset: $offset, desc: true) {\n      wallet\n      count\n      offset\n      limit\n      phoneNumbers {\n        country_code\n        number\n        full_number\n        owner\n        phone_account\n        is_wrapped\n        nft_mint\n        created_at\n        account_pubkey\n        price_paid\n        phoneAccountRecord {\n          owner\n          linked_phone_number\n          hasActiveSubscription\n          total_sms_sent\n        }\n      }\n    }\n  }\n": typeof types.GetPhoneNumbersDocument,
};
const documents: Documents = {
    "\n  query GetPhoneNumbers($wallet: String!, $limit: Int, $offset: Int) {\n    phoneNumbers(wallet: $wallet, limit: $limit, offset: $offset, desc: true) {\n      wallet\n      count\n      offset\n      limit\n      phoneNumbers {\n        country_code\n        number\n        full_number\n        owner\n        phone_account\n        is_wrapped\n        nft_mint\n        created_at\n        account_pubkey\n        price_paid\n        phoneAccountRecord {\n          owner\n          linked_phone_number\n          hasActiveSubscription\n          total_sms_sent\n        }\n      }\n    }\n  }\n": types.GetPhoneNumbersDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetPhoneNumbers($wallet: String!, $limit: Int, $offset: Int) {\n    phoneNumbers(wallet: $wallet, limit: $limit, offset: $offset, desc: true) {\n      wallet\n      count\n      offset\n      limit\n      phoneNumbers {\n        country_code\n        number\n        full_number\n        owner\n        phone_account\n        is_wrapped\n        nft_mint\n        created_at\n        account_pubkey\n        price_paid\n        phoneAccountRecord {\n          owner\n          linked_phone_number\n          hasActiveSubscription\n          total_sms_sent\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetPhoneNumbers($wallet: String!, $limit: Int, $offset: Int) {\n    phoneNumbers(wallet: $wallet, limit: $limit, offset: $offset, desc: true) {\n      wallet\n      count\n      offset\n      limit\n      phoneNumbers {\n        country_code\n        number\n        full_number\n        owner\n        phone_account\n        is_wrapped\n        nft_mint\n        created_at\n        account_pubkey\n        price_paid\n        phoneAccountRecord {\n          owner\n          linked_phone_number\n          hasActiveSubscription\n          total_sms_sent\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;