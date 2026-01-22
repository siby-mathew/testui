import { gql } from "@apollo/client";

export const GET_USER_NUMBERS = gql`
  query GetPhoneNumbers($wallet: String!, $limit: Int, $offset: Int) {
    phoneNumbers(wallet: $wallet, limit: $limit, offset: $offset, desc: true) {
      wallet
      count
      offset
      limit
      phoneNumbers {
        country_code
        number
        full_number
        owner
        phone_account
        is_wrapped
        nft_mint
        created_at
        account_pubkey
        price_paid
        phoneAccountRecord {
          owner
          linked_phone_number
          hasActiveSubscription
          total_sms_sent
        }
      }
    }
  }
`;
