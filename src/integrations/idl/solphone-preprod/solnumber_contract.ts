/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/solnumber_contract.json`.
 */
export type SolnumberContract = {
  "address": "XiteyKiVLgPtg8TVu5zf6DVV1icWhfcwL2Se8g6vme4",
  "metadata": {
    "name": "solnumberContract",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "addDatapack",
      "docs": [
        "Add datapack"
      ],
      "discriminator": [
        221,
        145,
        60,
        131,
        29,
        219,
        155,
        0
      ],
      "accounts": [
        {
          "name": "settings",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  97,
                  116,
                  97,
                  112,
                  97,
                  99,
                  107,
                  95,
                  115,
                  101,
                  116,
                  116,
                  105,
                  110,
                  103,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true
        }
      ],
      "args": [
        {
          "name": "pack",
          "type": {
            "defined": {
              "name": "dataPackPlan"
            }
          }
        }
      ]
    },
    {
      "name": "addSubscriptionPlan",
      "docs": [
        "Add subscription plan"
      ],
      "discriminator": [
        35,
        236,
        167,
        249,
        243,
        208,
        86,
        229
      ],
      "accounts": [
        {
          "name": "settings",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  117,
                  98,
                  115,
                  99,
                  114,
                  105,
                  112,
                  116,
                  105,
                  111,
                  110,
                  95,
                  115,
                  101,
                  116,
                  116,
                  105,
                  110,
                  103,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true
        }
      ],
      "args": [
        {
          "name": "plan",
          "type": {
            "defined": {
              "name": "subscriptionPlan"
            }
          }
        }
      ]
    },
    {
      "name": "buyPhoneNumber",
      "docs": [
        "Buy a phone number (creates compressed PhoneNumberAccount + NFT)"
      ],
      "discriminator": [
        229,
        16,
        135,
        129,
        137,
        77,
        82,
        62
      ],
      "accounts": [
        {
          "name": "settings",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  104,
                  111,
                  110,
                  101,
                  95,
                  110,
                  117,
                  109,
                  98,
                  101,
                  114,
                  95,
                  115,
                  101,
                  116,
                  116,
                  105,
                  110,
                  103,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "centralState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  111,
                  108,
                  110,
                  117,
                  109,
                  98,
                  101,
                  114,
                  95,
                  99,
                  101,
                  110,
                  116,
                  114,
                  97,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "treasury",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  101,
                  97,
                  115,
                  117,
                  114,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "buyer",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "countryCode",
          "type": "string"
        },
        {
          "name": "number",
          "type": "string"
        },
        {
          "name": "proof",
          "type": {
            "defined": {
              "name": "validityProof"
            }
          }
        },
        {
          "name": "addressTreeInfo",
          "type": {
            "defined": {
              "name": "packedAddressTreeInfo"
            }
          }
        },
        {
          "name": "outputMerkleTreeIndex",
          "type": "u8"
        }
      ]
    },
    {
      "name": "cancelSubscription",
      "docs": [
        "Cancel subscription auto-renewal (compressed account)"
      ],
      "discriminator": [
        60,
        139,
        189,
        242,
        191,
        208,
        143,
        18
      ],
      "accounts": [
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "currentPhoneAccountData",
          "type": {
            "defined": {
              "name": "phoneAccount"
            }
          }
        },
        {
          "name": "accountMeta",
          "type": {
            "defined": {
              "name": "compressedAccountMeta"
            }
          }
        },
        {
          "name": "phoneAccountAddress",
          "type": "pubkey"
        },
        {
          "name": "proof",
          "type": {
            "defined": {
              "name": "validityProof"
            }
          }
        }
      ]
    },
    {
      "name": "consumeCallMinutes",
      "docs": [
        "Consume call minutes (for service providers to call) - compressed account"
      ],
      "discriminator": [
        58,
        82,
        133,
        206,
        205,
        197,
        136,
        223
      ],
      "accounts": [
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "minutes",
          "type": "u32"
        },
        {
          "name": "currentPhoneAccountData",
          "type": {
            "defined": {
              "name": "phoneAccount"
            }
          }
        },
        {
          "name": "accountMeta",
          "type": {
            "defined": {
              "name": "compressedAccountMeta"
            }
          }
        },
        {
          "name": "phoneAccountAddress",
          "type": "pubkey"
        },
        {
          "name": "proof",
          "type": {
            "defined": {
              "name": "validityProof"
            }
          }
        }
      ]
    },
    {
      "name": "consumeSms",
      "docs": [
        "Consume SMS (for service providers to call) - compressed account"
      ],
      "discriminator": [
        152,
        68,
        164,
        114,
        246,
        157,
        98,
        40
      ],
      "accounts": [
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "count",
          "type": "u32"
        },
        {
          "name": "currentPhoneAccountData",
          "type": {
            "defined": {
              "name": "phoneAccount"
            }
          }
        },
        {
          "name": "accountMeta",
          "type": {
            "defined": {
              "name": "compressedAccountMeta"
            }
          }
        },
        {
          "name": "phoneAccountAddress",
          "type": "pubkey"
        },
        {
          "name": "proof",
          "type": {
            "defined": {
              "name": "validityProof"
            }
          }
        }
      ]
    },
    {
      "name": "createCollection",
      "docs": [
        "Create SolNumber NFT collection (one-time setup - can be called later)"
      ],
      "discriminator": [
        156,
        251,
        92,
        54,
        233,
        2,
        16,
        82
      ],
      "accounts": [
        {
          "name": "centralState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  111,
                  108,
                  110,
                  117,
                  109,
                  98,
                  101,
                  114,
                  95,
                  99,
                  101,
                  110,
                  116,
                  114,
                  97,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "collectionMint",
          "writable": true,
          "signer": true
        },
        {
          "name": "centralStateTokenAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "centralState"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "collectionMint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "createPhoneAccount",
      "docs": [
        "Create a PhoneAccount for the user"
      ],
      "discriminator": [
        88,
        27,
        217,
        219,
        140,
        29,
        125,
        141
      ],
      "accounts": [
        {
          "name": "globalSubscriptionConfig",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  108,
                  111,
                  98,
                  97,
                  108,
                  95,
                  115,
                  117,
                  98,
                  115,
                  99,
                  114,
                  105,
                  112,
                  116,
                  105,
                  111,
                  110,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "owner",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "proof",
          "type": {
            "defined": {
              "name": "validityProof"
            }
          }
        },
        {
          "name": "addressTreeInfo",
          "type": {
            "defined": {
              "name": "packedAddressTreeInfo"
            }
          }
        },
        {
          "name": "outputMerkleTreeIndex",
          "type": "u8"
        }
      ]
    },
    {
      "name": "deactivateDatapack",
      "docs": [
        "Deactivate datapack"
      ],
      "discriminator": [
        167,
        98,
        141,
        11,
        120,
        69,
        12,
        71
      ],
      "accounts": [
        {
          "name": "settings",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  97,
                  116,
                  97,
                  112,
                  97,
                  99,
                  107,
                  95,
                  115,
                  101,
                  116,
                  116,
                  105,
                  110,
                  103,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true
        }
      ],
      "args": [
        {
          "name": "packId",
          "type": "u8"
        }
      ]
    },
    {
      "name": "deactivateSubscriptionPlan",
      "docs": [
        "Deactivate subscription plan"
      ],
      "discriminator": [
        197,
        51,
        195,
        87,
        210,
        168,
        23,
        22
      ],
      "accounts": [
        {
          "name": "settings",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  117,
                  98,
                  115,
                  99,
                  114,
                  105,
                  112,
                  116,
                  105,
                  111,
                  110,
                  95,
                  115,
                  101,
                  116,
                  116,
                  105,
                  110,
                  103,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true
        }
      ],
      "args": [
        {
          "name": "planId",
          "type": "u8"
        }
      ]
    },
    {
      "name": "initializeCentralState",
      "docs": [
        "Initialize central state without NFT collection (phase 1 - no NFT features)"
      ],
      "discriminator": [
        204,
        64,
        162,
        125,
        253,
        90,
        119,
        4
      ],
      "accounts": [
        {
          "name": "centralState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  111,
                  108,
                  110,
                  117,
                  109,
                  98,
                  101,
                  114,
                  95,
                  99,
                  101,
                  110,
                  116,
                  114,
                  97,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "initializeDatapackSettings",
      "docs": [
        "Initialize datapack settings"
      ],
      "discriminator": [
        76,
        81,
        139,
        163,
        117,
        131,
        199,
        64
      ],
      "accounts": [
        {
          "name": "settings",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  97,
                  116,
                  97,
                  112,
                  97,
                  99,
                  107,
                  95,
                  115,
                  101,
                  116,
                  116,
                  105,
                  110,
                  103,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "initializeGlobalSubscriptionConfig",
      "docs": [
        "Initialize global subscription configuration (first 10k users get lifetime)"
      ],
      "discriminator": [
        53,
        148,
        218,
        18,
        177,
        161,
        44,
        99
      ],
      "accounts": [
        {
          "name": "config",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  108,
                  111,
                  98,
                  97,
                  108,
                  95,
                  115,
                  117,
                  98,
                  115,
                  99,
                  114,
                  105,
                  112,
                  116,
                  105,
                  111,
                  110,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "lifetimeUserThreshold",
          "type": "u64"
        },
        {
          "name": "defaultSubscriptionMonths",
          "type": "u8"
        }
      ]
    },
    {
      "name": "initializePhoneNumberSettings",
      "docs": [
        "Initialize phone number settings (one-time)"
      ],
      "discriminator": [
        249,
        181,
        210,
        1,
        188,
        40,
        195,
        205
      ],
      "accounts": [
        {
          "name": "settings",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  104,
                  111,
                  110,
                  101,
                  95,
                  110,
                  117,
                  109,
                  98,
                  101,
                  114,
                  95,
                  115,
                  101,
                  116,
                  116,
                  105,
                  110,
                  103,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "collectionMint",
          "docs": [
            "In Phase 3, should be a real Mint account when collection is created"
          ]
        },
        {
          "name": "serviceFeeRecipient"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "basePrice",
          "type": "u64"
        },
        {
          "name": "allowedCountryCodes",
          "type": {
            "vec": "string"
          }
        }
      ]
    },
    {
      "name": "initializeSubscriptionSettings",
      "docs": [
        "Initialize subscription settings with default plans"
      ],
      "discriminator": [
        19,
        176,
        153,
        104,
        244,
        203,
        194,
        117
      ],
      "accounts": [
        {
          "name": "settings",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  117,
                  98,
                  115,
                  99,
                  114,
                  105,
                  112,
                  116,
                  105,
                  111,
                  110,
                  95,
                  115,
                  101,
                  116,
                  116,
                  105,
                  110,
                  103,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "defaultPlanId",
          "type": "u8"
        },
        {
          "name": "gracePeriodDays",
          "type": "u8"
        }
      ]
    },
    {
      "name": "initializeTreasury",
      "docs": [
        "Initialize treasury account (one-time setup)"
      ],
      "discriminator": [
        124,
        186,
        211,
        195,
        85,
        165,
        129,
        166
      ],
      "accounts": [
        {
          "name": "treasury",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  101,
                  97,
                  115,
                  117,
                  114,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "linkPhoneNumber",
      "docs": [
        "Link a phone number to user's PhoneAccount"
      ],
      "discriminator": [
        18,
        154,
        37,
        37,
        125,
        12,
        116,
        144
      ],
      "accounts": [
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "countryCode",
          "type": "string"
        },
        {
          "name": "number",
          "type": "string"
        },
        {
          "name": "currentPhoneNumberData",
          "type": {
            "defined": {
              "name": "phoneNumberAccount"
            }
          }
        },
        {
          "name": "phoneNumberAccountMeta",
          "type": {
            "defined": {
              "name": "compressedAccountMeta"
            }
          }
        },
        {
          "name": "phoneNumberAddress",
          "type": "pubkey"
        },
        {
          "name": "currentPhoneAccountData",
          "type": {
            "defined": {
              "name": "phoneAccount"
            }
          }
        },
        {
          "name": "phoneAccountMeta",
          "type": {
            "defined": {
              "name": "compressedAccountMeta"
            }
          }
        },
        {
          "name": "phoneAccountAddress",
          "type": "pubkey"
        },
        {
          "name": "proof",
          "type": {
            "defined": {
              "name": "validityProof"
            }
          }
        }
      ]
    },
    {
      "name": "purchaseDatapack",
      "docs": [
        "Purchase a datapack (compressed account)"
      ],
      "discriminator": [
        72,
        64,
        47,
        105,
        31,
        223,
        41,
        198
      ],
      "accounts": [
        {
          "name": "datapackSettings",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  97,
                  116,
                  97,
                  112,
                  97,
                  99,
                  107,
                  95,
                  115,
                  101,
                  116,
                  116,
                  105,
                  110,
                  103,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "serviceFeeRecipient",
          "writable": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "packId",
          "type": "u8"
        },
        {
          "name": "currentPhoneAccountData",
          "type": {
            "defined": {
              "name": "phoneAccount"
            }
          }
        },
        {
          "name": "accountMeta",
          "type": {
            "defined": {
              "name": "compressedAccountMeta"
            }
          }
        },
        {
          "name": "phoneAccountAddress",
          "type": "pubkey"
        },
        {
          "name": "proof",
          "type": {
            "defined": {
              "name": "validityProof"
            }
          }
        }
      ]
    },
    {
      "name": "purchaseSubscription",
      "docs": [
        "Purchase a subscription plan (compressed account)"
      ],
      "discriminator": [
        219,
        151,
        184,
        220,
        138,
        36,
        203,
        237
      ],
      "accounts": [
        {
          "name": "subscriptionSettings",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  117,
                  98,
                  115,
                  99,
                  114,
                  105,
                  112,
                  116,
                  105,
                  111,
                  110,
                  95,
                  115,
                  101,
                  116,
                  116,
                  105,
                  110,
                  103,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "serviceFeeRecipient",
          "writable": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "planId",
          "type": "u8"
        },
        {
          "name": "months",
          "type": "u8"
        },
        {
          "name": "autoRenew",
          "type": "bool"
        },
        {
          "name": "currentPhoneAccountData",
          "type": {
            "defined": {
              "name": "phoneAccount"
            }
          }
        },
        {
          "name": "accountMeta",
          "type": {
            "defined": {
              "name": "compressedAccountMeta"
            }
          }
        },
        {
          "name": "phoneAccountAddress",
          "type": "pubkey"
        },
        {
          "name": "proof",
          "type": {
            "defined": {
              "name": "validityProof"
            }
          }
        }
      ]
    },
    {
      "name": "renewSubscription",
      "docs": [
        "Renew subscription (compressed account)"
      ],
      "discriminator": [
        45,
        75,
        154,
        194,
        160,
        10,
        111,
        183
      ],
      "accounts": [
        {
          "name": "subscriptionSettings",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  117,
                  98,
                  115,
                  99,
                  114,
                  105,
                  112,
                  116,
                  105,
                  111,
                  110,
                  95,
                  115,
                  101,
                  116,
                  116,
                  105,
                  110,
                  103,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "serviceFeeRecipient",
          "writable": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "months",
          "type": "u8"
        },
        {
          "name": "currentPhoneAccountData",
          "type": {
            "defined": {
              "name": "phoneAccount"
            }
          }
        },
        {
          "name": "accountMeta",
          "type": {
            "defined": {
              "name": "compressedAccountMeta"
            }
          }
        },
        {
          "name": "phoneAccountAddress",
          "type": "pubkey"
        },
        {
          "name": "proof",
          "type": {
            "defined": {
              "name": "validityProof"
            }
          }
        }
      ]
    },
    {
      "name": "sendSms",
      "docs": [
        "Send an SMS message (creates compressed SmsMessage and deducts from balance)"
      ],
      "discriminator": [
        48,
        135,
        180,
        118,
        47,
        165,
        30,
        187
      ],
      "accounts": [
        {
          "name": "globalConfig",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  108,
                  111,
                  98,
                  97,
                  108,
                  95,
                  115,
                  117,
                  98,
                  115,
                  99,
                  114,
                  105,
                  112,
                  116,
                  105,
                  111,
                  110,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "sender",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "to",
          "type": "pubkey"
        },
        {
          "name": "toPhoneNumber",
          "type": "string"
        },
        {
          "name": "fromPhoneNumber",
          "type": "string"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "iv",
          "type": "string"
        },
        {
          "name": "salt",
          "type": "string"
        },
        {
          "name": "messageId",
          "type": "string"
        },
        {
          "name": "currentPhoneAccountData",
          "type": {
            "defined": {
              "name": "phoneAccount"
            }
          }
        },
        {
          "name": "phoneAccountMeta",
          "type": {
            "defined": {
              "name": "compressedAccountMeta"
            }
          }
        },
        {
          "name": "phoneAccountAddress",
          "type": "pubkey"
        },
        {
          "name": "proof",
          "type": {
            "defined": {
              "name": "validityProof"
            }
          }
        },
        {
          "name": "smsOutputMerkleTreeIndex",
          "type": "u8"
        }
      ]
    },
    {
      "name": "transferPhoneNumber",
      "docs": [
        "Transfer phone number to new owner (must be unlinked and unwrapped)"
      ],
      "discriminator": [
        207,
        42,
        2,
        43,
        105,
        251,
        165,
        153
      ],
      "accounts": [
        {
          "name": "currentOwner",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "countryCode",
          "type": "string"
        },
        {
          "name": "number",
          "type": "string"
        },
        {
          "name": "newOwner",
          "type": "pubkey"
        },
        {
          "name": "currentPhoneNumberData",
          "type": {
            "defined": {
              "name": "phoneNumberAccount"
            }
          }
        },
        {
          "name": "accountMeta",
          "type": {
            "defined": {
              "name": "compressedAccountMeta"
            }
          }
        },
        {
          "name": "address",
          "type": "pubkey"
        },
        {
          "name": "proof",
          "type": {
            "defined": {
              "name": "validityProof"
            }
          }
        }
      ]
    },
    {
      "name": "unlinkPhoneNumber",
      "docs": [
        "Unlink phone number from PhoneAccount"
      ],
      "discriminator": [
        92,
        239,
        40,
        27,
        237,
        157,
        164,
        107
      ],
      "accounts": [
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "countryCode",
          "type": "string"
        },
        {
          "name": "number",
          "type": "string"
        },
        {
          "name": "currentPhoneNumberData",
          "type": {
            "defined": {
              "name": "phoneNumberAccount"
            }
          }
        },
        {
          "name": "phoneNumberAccountMeta",
          "type": {
            "defined": {
              "name": "compressedAccountMeta"
            }
          }
        },
        {
          "name": "phoneNumberAddress",
          "type": "pubkey"
        },
        {
          "name": "currentPhoneAccountData",
          "type": {
            "defined": {
              "name": "phoneAccount"
            }
          }
        },
        {
          "name": "phoneAccountMeta",
          "type": {
            "defined": {
              "name": "compressedAccountMeta"
            }
          }
        },
        {
          "name": "phoneAccountAddress",
          "type": "pubkey"
        },
        {
          "name": "proof",
          "type": {
            "defined": {
              "name": "validityProof"
            }
          }
        }
      ]
    },
    {
      "name": "unwrapPhoneNumber",
      "docs": [
        "Unwrap NFT back to direct ownership"
      ],
      "discriminator": [
        69,
        76,
        233,
        253,
        224,
        249,
        94,
        92
      ],
      "accounts": [
        {
          "name": "centralState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  111,
                  108,
                  110,
                  117,
                  109,
                  98,
                  101,
                  114,
                  95,
                  99,
                  101,
                  110,
                  116,
                  114,
                  97,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "owner",
          "writable": true,
          "signer": true
        },
        {
          "name": "nftMint"
        },
        {
          "name": "ownerNftTokenAccount"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "countryCode",
          "type": "string"
        },
        {
          "name": "number",
          "type": "string"
        },
        {
          "name": "currentPhoneNumberData",
          "type": {
            "defined": {
              "name": "phoneNumberAccount"
            }
          }
        },
        {
          "name": "accountMeta",
          "type": {
            "defined": {
              "name": "compressedAccountMeta"
            }
          }
        },
        {
          "name": "address",
          "type": "pubkey"
        },
        {
          "name": "proof",
          "type": {
            "defined": {
              "name": "validityProof"
            }
          }
        }
      ]
    },
    {
      "name": "updateCollectionMint",
      "discriminator": [
        109,
        6,
        167,
        62,
        117,
        235,
        19,
        11
      ],
      "accounts": [
        {
          "name": "settings",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  104,
                  111,
                  110,
                  101,
                  95,
                  110,
                  117,
                  109,
                  98,
                  101,
                  114,
                  95,
                  115,
                  101,
                  116,
                  116,
                  105,
                  110,
                  103,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true
        }
      ],
      "args": [
        {
          "name": "newCollectionMint",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "updateDatapack",
      "docs": [
        "Update datapack"
      ],
      "discriminator": [
        253,
        23,
        228,
        250,
        156,
        93,
        228,
        235
      ],
      "accounts": [
        {
          "name": "settings",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  97,
                  116,
                  97,
                  112,
                  97,
                  99,
                  107,
                  95,
                  115,
                  101,
                  116,
                  116,
                  105,
                  110,
                  103,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true
        }
      ],
      "args": [
        {
          "name": "packId",
          "type": "u8"
        },
        {
          "name": "updatedPack",
          "type": {
            "defined": {
              "name": "dataPackPlan"
            }
          }
        }
      ]
    },
    {
      "name": "updateGlobalSubscriptionConfig",
      "docs": [
        "Update global subscription configuration (without redeployment)"
      ],
      "discriminator": [
        61,
        1,
        40,
        45,
        198,
        100,
        99,
        180
      ],
      "accounts": [
        {
          "name": "config",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  108,
                  111,
                  98,
                  97,
                  108,
                  95,
                  115,
                  117,
                  98,
                  115,
                  99,
                  114,
                  105,
                  112,
                  116,
                  105,
                  111,
                  110,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true
        }
      ],
      "args": [
        {
          "name": "lifetimeUserThreshold",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "defaultSubscriptionMonths",
          "type": {
            "option": "u8"
          }
        },
        {
          "name": "lifetimeEnabled",
          "type": {
            "option": "bool"
          }
        },
        {
          "name": "datapackRestrictionsEnabled",
          "type": {
            "option": "bool"
          }
        }
      ]
    },
    {
      "name": "updatePhoneNumberSettings",
      "docs": [
        "Update phone number settings"
      ],
      "discriminator": [
        76,
        252,
        18,
        75,
        130,
        223,
        21,
        229
      ],
      "accounts": [
        {
          "name": "settings",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  104,
                  111,
                  110,
                  101,
                  95,
                  110,
                  117,
                  109,
                  98,
                  101,
                  114,
                  95,
                  115,
                  101,
                  116,
                  116,
                  105,
                  110,
                  103,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true
        }
      ],
      "args": [
        {
          "name": "basePrice",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "phoneNumberPurchasePrice",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "premiumEnabled",
          "type": {
            "option": "bool"
          }
        },
        {
          "name": "isPaused",
          "type": {
            "option": "bool"
          }
        }
      ]
    },
    {
      "name": "updateSubscriptionPlan",
      "docs": [
        "Update subscription plan"
      ],
      "discriminator": [
        27,
        73,
        200,
        227,
        133,
        93,
        78,
        133
      ],
      "accounts": [
        {
          "name": "settings",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  117,
                  98,
                  115,
                  99,
                  114,
                  105,
                  112,
                  116,
                  105,
                  111,
                  110,
                  95,
                  115,
                  101,
                  116,
                  116,
                  105,
                  110,
                  103,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true
        }
      ],
      "args": [
        {
          "name": "planId",
          "type": "u8"
        },
        {
          "name": "updatedPlan",
          "type": {
            "defined": {
              "name": "subscriptionPlan"
            }
          }
        }
      ]
    },
    {
      "name": "upgradeSubscription",
      "docs": [
        "Upgrade subscription to higher tier (compressed account)"
      ],
      "discriminator": [
        85,
        239,
        125,
        235,
        199,
        230,
        166,
        246
      ],
      "accounts": [
        {
          "name": "subscriptionSettings",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  117,
                  98,
                  115,
                  99,
                  114,
                  105,
                  112,
                  116,
                  105,
                  111,
                  110,
                  95,
                  115,
                  101,
                  116,
                  116,
                  105,
                  110,
                  103,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "serviceFeeRecipient",
          "writable": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "newPlanId",
          "type": "u8"
        },
        {
          "name": "currentPhoneAccountData",
          "type": {
            "defined": {
              "name": "phoneAccount"
            }
          }
        },
        {
          "name": "accountMeta",
          "type": {
            "defined": {
              "name": "compressedAccountMeta"
            }
          }
        },
        {
          "name": "phoneAccountAddress",
          "type": "pubkey"
        },
        {
          "name": "proof",
          "type": {
            "defined": {
              "name": "validityProof"
            }
          }
        }
      ]
    },
    {
      "name": "wrapPhoneNumber",
      "docs": [
        "Wrap phone number as NFT for trading"
      ],
      "discriminator": [
        56,
        87,
        145,
        156,
        128,
        112,
        82,
        127
      ],
      "accounts": [
        {
          "name": "centralState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  111,
                  108,
                  110,
                  117,
                  109,
                  98,
                  101,
                  114,
                  95,
                  99,
                  101,
                  110,
                  116,
                  114,
                  97,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "owner",
          "writable": true,
          "signer": true
        },
        {
          "name": "nftMint"
        },
        {
          "name": "ownerNftTokenAccount"
        },
        {
          "name": "metadataAccount",
          "writable": true
        },
        {
          "name": "metadataProgram"
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "countryCode",
          "type": "string"
        },
        {
          "name": "number",
          "type": "string"
        },
        {
          "name": "currentPhoneNumberData",
          "type": {
            "defined": {
              "name": "phoneNumberAccount"
            }
          }
        },
        {
          "name": "accountMeta",
          "type": {
            "defined": {
              "name": "compressedAccountMeta"
            }
          }
        },
        {
          "name": "address",
          "type": "pubkey"
        },
        {
          "name": "proof",
          "type": {
            "defined": {
              "name": "validityProof"
            }
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "dataPackSettings",
      "discriminator": [
        26,
        0,
        173,
        157,
        25,
        236,
        99,
        73
      ]
    },
    {
      "name": "globalSubscriptionConfig",
      "discriminator": [
        39,
        69,
        147,
        230,
        143,
        123,
        104,
        90
      ]
    },
    {
      "name": "phoneNumberSettings",
      "discriminator": [
        100,
        123,
        9,
        204,
        114,
        177,
        228,
        232
      ]
    },
    {
      "name": "solNumberCentralState",
      "discriminator": [
        254,
        146,
        153,
        36,
        104,
        39,
        17,
        240
      ]
    },
    {
      "name": "subscriptionSettings",
      "discriminator": [
        169,
        144,
        117,
        17,
        30,
        169,
        1,
        99
      ]
    },
    {
      "name": "treasury",
      "discriminator": [
        238,
        239,
        123,
        238,
        89,
        1,
        168,
        253
      ]
    }
  ],
  "events": [
    {
      "name": "adminActionEvent",
      "discriminator": [
        220,
        224,
        207,
        200,
        52,
        226,
        42,
        155
      ]
    },
    {
      "name": "collectionCreatedEvent",
      "discriminator": [
        146,
        244,
        148,
        65,
        159,
        214,
        113,
        185
      ]
    },
    {
      "name": "collectionMintUpdatedEvent",
      "discriminator": [
        64,
        131,
        133,
        17,
        182,
        227,
        132,
        129
      ]
    },
    {
      "name": "dataPackAddedEvent",
      "discriminator": [
        129,
        241,
        239,
        24,
        159,
        217,
        185,
        85
      ]
    },
    {
      "name": "dataPackDeactivatedEvent",
      "discriminator": [
        184,
        182,
        240,
        77,
        39,
        158,
        32,
        124
      ]
    },
    {
      "name": "dataPackPurchasedEvent",
      "discriminator": [
        8,
        238,
        228,
        207,
        55,
        160,
        68,
        85
      ]
    },
    {
      "name": "dataPackSettingsInitializedEvent",
      "discriminator": [
        186,
        187,
        41,
        98,
        209,
        56,
        75,
        136
      ]
    },
    {
      "name": "dataPackUpdatedEvent",
      "discriminator": [
        205,
        31,
        103,
        152,
        37,
        160,
        4,
        45
      ]
    },
    {
      "name": "financialTransactionEvent",
      "discriminator": [
        53,
        189,
        58,
        212,
        96,
        94,
        55,
        149
      ]
    },
    {
      "name": "globalSubscriptionConfigInitializedEvent",
      "discriminator": [
        147,
        125,
        12,
        193,
        216,
        28,
        21,
        75
      ]
    },
    {
      "name": "globalSubscriptionConfigUpdatedEvent",
      "discriminator": [
        5,
        138,
        5,
        212,
        37,
        234,
        116,
        26
      ]
    },
    {
      "name": "lifetimeSubscriptionGrantedEvent",
      "discriminator": [
        166,
        64,
        239,
        194,
        188,
        87,
        48,
        158
      ]
    },
    {
      "name": "phoneAccountCreatedEvent",
      "discriminator": [
        100,
        20,
        185,
        131,
        33,
        241,
        81,
        129
      ]
    },
    {
      "name": "phoneNumberLinkedEvent",
      "discriminator": [
        71,
        219,
        199,
        218,
        151,
        220,
        122,
        2
      ]
    },
    {
      "name": "phoneNumberPurchasedEvent",
      "discriminator": [
        255,
        166,
        218,
        133,
        185,
        184,
        177,
        158
      ]
    },
    {
      "name": "phoneNumberSettingsInitializedEvent",
      "discriminator": [
        238,
        122,
        136,
        134,
        6,
        51,
        232,
        119
      ]
    },
    {
      "name": "phoneNumberSettingsUpdatedEvent",
      "discriminator": [
        21,
        20,
        125,
        126,
        178,
        127,
        185,
        156
      ]
    },
    {
      "name": "phoneNumberTransferredEvent",
      "discriminator": [
        59,
        33,
        178,
        45,
        198,
        81,
        230,
        141
      ]
    },
    {
      "name": "phoneNumberUnlinkedEvent",
      "discriminator": [
        187,
        196,
        240,
        43,
        162,
        126,
        138,
        105
      ]
    },
    {
      "name": "phoneNumberUnwrappedEvent",
      "discriminator": [
        117,
        156,
        115,
        117,
        13,
        243,
        106,
        169
      ]
    },
    {
      "name": "phoneNumberWrappedEvent",
      "discriminator": [
        159,
        174,
        142,
        125,
        137,
        11,
        17,
        233
      ]
    },
    {
      "name": "serviceUsageEvent",
      "discriminator": [
        49,
        243,
        9,
        238,
        72,
        134,
        52,
        74
      ]
    },
    {
      "name": "smsSentEvent",
      "discriminator": [
        60,
        241,
        177,
        77,
        81,
        143,
        193,
        226
      ]
    },
    {
      "name": "subscriptionCancelledEvent",
      "discriminator": [
        10,
        87,
        228,
        73,
        76,
        115,
        135,
        170
      ]
    },
    {
      "name": "subscriptionPlanAddedEvent",
      "discriminator": [
        182,
        105,
        243,
        78,
        11,
        31,
        61,
        199
      ]
    },
    {
      "name": "subscriptionPlanDeactivatedEvent",
      "discriminator": [
        93,
        50,
        99,
        64,
        47,
        221,
        236,
        255
      ]
    },
    {
      "name": "subscriptionPlanUpdatedEvent",
      "discriminator": [
        76,
        129,
        242,
        145,
        147,
        73,
        186,
        241
      ]
    },
    {
      "name": "subscriptionPurchasedEvent",
      "discriminator": [
        141,
        8,
        238,
        239,
        129,
        161,
        23,
        81
      ]
    },
    {
      "name": "subscriptionRenewedEvent",
      "discriminator": [
        77,
        2,
        48,
        127,
        173,
        252,
        49,
        6
      ]
    },
    {
      "name": "subscriptionSettingsInitializedEvent",
      "discriminator": [
        171,
        155,
        150,
        211,
        252,
        63,
        114,
        176
      ]
    },
    {
      "name": "subscriptionUpgradedEvent",
      "discriminator": [
        4,
        16,
        6,
        155,
        46,
        138,
        121,
        23
      ]
    },
    {
      "name": "validationFailureEvent",
      "discriminator": [
        245,
        169,
        77,
        242,
        178,
        179,
        209,
        150
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "phoneNumberAlreadyExists",
      "msg": "Phone number already exists"
    },
    {
      "code": 6001,
      "name": "phoneNumberNotFound",
      "msg": "Phone number not found"
    },
    {
      "code": 6002,
      "name": "invalidPhoneNumberFormat",
      "msg": "Invalid phone number format - must include valid country code and digits"
    },
    {
      "code": 6003,
      "name": "invalidPhoneNumberLength",
      "msg": "Invalid phone number length"
    },
    {
      "code": 6004,
      "name": "countryCodeNotAllowed",
      "msg": "Country code not allowed"
    },
    {
      "code": 6005,
      "name": "invalidCountryCode",
      "msg": "Invalid country code format - must start with + and contain digits"
    },
    {
      "code": 6006,
      "name": "phoneNumberAlreadyLinked",
      "msg": "Phone number already linked to another account"
    },
    {
      "code": 6007,
      "name": "phoneNumberNotLinked",
      "msg": "Phone number not linked"
    },
    {
      "code": 6008,
      "name": "insufficientBalance",
      "msg": "Insufficient balance for operation"
    },
    {
      "code": 6009,
      "name": "subscriptionExpired",
      "msg": "Subscription has expired"
    },
    {
      "code": 6010,
      "name": "servicePaused",
      "msg": "Service is paused by admin"
    },
    {
      "code": 6011,
      "name": "invalidSubscriptionPlan",
      "msg": "Invalid subscription plan ID"
    },
    {
      "code": 6012,
      "name": "subscriptionPlanNotActive",
      "msg": "Subscription plan not active"
    },
    {
      "code": 6013,
      "name": "invalidDataPack",
      "msg": "Invalid data pack plan ID"
    },
    {
      "code": 6014,
      "name": "dataPackPlanNotActive",
      "msg": "Data pack plan not active"
    },
    {
      "code": 6015,
      "name": "notPhoneNumberOwner",
      "msg": "Not the phone number owner"
    },
    {
      "code": 6016,
      "name": "nftVerificationFailed",
      "msg": "NFT verification failed - invalid token account or mint"
    },
    {
      "code": 6017,
      "name": "cannotWrapLinkedNumber",
      "msg": "Cannot wrap phone number while it is linked to a PhoneAccount"
    },
    {
      "code": 6018,
      "name": "cannotLinkWrappedNumber",
      "msg": "Cannot link wrapped phone number - unwrap first"
    },
    {
      "code": 6019,
      "name": "phoneNumberAlreadyWrapped",
      "msg": "Phone number is already wrapped as NFT"
    },
    {
      "code": 6020,
      "name": "phoneNumberNotWrapped",
      "msg": "Phone number is not wrapped"
    },
    {
      "code": 6021,
      "name": "unauthorized",
      "msg": "Unauthorized - not the program authority"
    },
    {
      "code": 6022,
      "name": "invalidAuthority",
      "msg": "Invalid authority"
    },
    {
      "code": 6023,
      "name": "arithmeticOverflow",
      "msg": "Arithmetic overflow"
    },
    {
      "code": 6024,
      "name": "invalidPaymentAmount",
      "msg": "Invalid payment amount"
    },
    {
      "code": 6025,
      "name": "phoneAccountNotFound",
      "msg": "Phone account not found"
    },
    {
      "code": 6026,
      "name": "phoneAccountAlreadyExists",
      "msg": "Phone account already exists"
    },
    {
      "code": 6027,
      "name": "settingsNotInitialized",
      "msg": "Settings not initialized"
    },
    {
      "code": 6028,
      "name": "settingsAlreadyInitialized",
      "msg": "Settings already initialized"
    },
    {
      "code": 6029,
      "name": "invalidAccountState",
      "msg": "Invalid account state"
    },
    {
      "code": 6030,
      "name": "maxSubscriptionPlansReached",
      "msg": "Maximum subscription plans reached"
    },
    {
      "code": 6031,
      "name": "maxDataPacksReached",
      "msg": "Maximum data packs reached"
    },
    {
      "code": 6032,
      "name": "subscriptionPlanExists",
      "msg": "Subscription plan already exists with this ID"
    },
    {
      "code": 6033,
      "name": "dataPackExists",
      "msg": "Data pack already exists with this ID"
    },
    {
      "code": 6034,
      "name": "invalidPlanName",
      "msg": "Invalid plan name - must not be empty and max 32 chars"
    },
    {
      "code": 6035,
      "name": "noActiveSubscription",
      "msg": "No active subscription"
    },
    {
      "code": 6036,
      "name": "insufficientSmsBalance",
      "msg": "SMS balance insufficient"
    },
    {
      "code": 6037,
      "name": "insufficientCallBalance",
      "msg": "Call minutes balance insufficient"
    },
    {
      "code": 6038,
      "name": "dataPackExpired",
      "msg": "Data pack has expired"
    },
    {
      "code": 6039,
      "name": "invalidNftMint",
      "msg": "Invalid NFT mint"
    },
    {
      "code": 6040,
      "name": "invalidNftAmount",
      "msg": "Invalid NFT amount - must be exactly 1"
    },
    {
      "code": 6041,
      "name": "invalidCollectionMint",
      "msg": "Invalid collection mint"
    },
    {
      "code": 6042,
      "name": "nftTokenAccountRequired",
      "msg": "NFT token account required"
    },
    {
      "code": 6043,
      "name": "nftMintMismatch",
      "msg": "NFT mint mismatch"
    },
    {
      "code": 6044,
      "name": "notTokenAccountOwner",
      "msg": "Not token account owner"
    },
    {
      "code": 6045,
      "name": "phoneNumberOwnerMismatch",
      "msg": "Phone number owner mismatch"
    },
    {
      "code": 6046,
      "name": "cannotTransferLinkedNumber",
      "msg": "Cannot transfer linked phone number - unlink first"
    },
    {
      "code": 6047,
      "name": "invalidPrice",
      "msg": "Invalid price - must be greater than zero"
    },
    {
      "code": 6048,
      "name": "invalidSmsAmount",
      "msg": "Invalid SMS amount"
    },
    {
      "code": 6049,
      "name": "invalidCallMinutes",
      "msg": "Invalid call minutes amount"
    },
    {
      "code": 6050,
      "name": "invalidValidityPeriod",
      "msg": "Invalid validity period"
    },
    {
      "code": 6051,
      "name": "serviceNotActive",
      "msg": "Service not active - subscription or datapack required"
    },
    {
      "code": 6052,
      "name": "invalidGracePeriod",
      "msg": "Invalid grace period"
    },
    {
      "code": 6053,
      "name": "invalidInstructionData",
      "msg": "Invalid instruction data"
    },
    {
      "code": 6054,
      "name": "securityViolation",
      "msg": "Security violation detected"
    },
    {
      "code": 6055,
      "name": "invalidAccountOwner",
      "msg": "Invalid account owner"
    },
    {
      "code": 6056,
      "name": "metadataCreationFailed",
      "msg": "Metadata creation failed"
    },
    {
      "code": 6057,
      "name": "accountClosureNotPermitted",
      "msg": "Account closure not permitted"
    },
    {
      "code": 6058,
      "name": "centralStateNotInitialized",
      "msg": "Central state not initialized"
    },
    {
      "code": 6059,
      "name": "invalidCentralState",
      "msg": "Invalid central state"
    },
    {
      "code": 6060,
      "name": "invalidPlanId",
      "msg": "Invalid plan ID"
    },
    {
      "code": 6061,
      "name": "cannotModifyPlan",
      "msg": "Cannot modify immutable plan"
    },
    {
      "code": 6062,
      "name": "mustUnwrapBeforeTransfer",
      "msg": "Phone number must be unwrapped before transfer"
    },
    {
      "code": 6063,
      "name": "invalidBumpSeed",
      "msg": "Invalid bump seed"
    },
    {
      "code": 6064,
      "name": "accountDeserializationFailed",
      "msg": "Account deserialization failed"
    },
    {
      "code": 6065,
      "name": "invalidTimestamp",
      "msg": "Invalid timestamp"
    },
    {
      "code": 6066,
      "name": "rentCalculationFailed",
      "msg": "Rent calculation failed"
    },
    {
      "code": 6067,
      "name": "systemError",
      "msg": "System error"
    },
    {
      "code": 6068,
      "name": "cannotDowngrade",
      "msg": "Cannot downgrade subscription plan"
    },
    {
      "code": 6069,
      "name": "noAutoRenewal",
      "msg": "No auto-renewal is currently enabled"
    },
    {
      "code": 6070,
      "name": "invalidRecipient",
      "msg": "Invalid recipient"
    },
    {
      "code": 6071,
      "name": "emptyMessage",
      "msg": "Message cannot be empty"
    },
    {
      "code": 6072,
      "name": "invalidPhoneNumber",
      "msg": "Invalid phone number"
    },
    {
      "code": 6073,
      "name": "invalidMessageId",
      "msg": "Invalid message ID"
    }
  ],
  "types": [
    {
      "name": "adminActionEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "pubkey"
          },
          {
            "name": "actionType",
            "type": "string"
          },
          {
            "name": "targetAccount",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "actionData",
            "type": "string"
          },
          {
            "name": "executedAt",
            "type": "i64"
          },
          {
            "name": "reason",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "collectionCreatedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "collectionMint",
            "type": "pubkey"
          },
          {
            "name": "centralState",
            "type": "pubkey"
          },
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "createdAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "collectionMintUpdatedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "oldCollectionMint",
            "type": "pubkey"
          },
          {
            "name": "newCollectionMint",
            "type": "pubkey"
          },
          {
            "name": "updatedAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "compressedAccountMeta",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "treeInfo",
            "docs": [
              "Merkle tree context."
            ],
            "type": {
              "defined": {
                "name": "packedStateTreeInfo"
              }
            }
          },
          {
            "name": "address",
            "docs": [
              "Address."
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "outputStateTreeIndex",
            "docs": [
              "Output merkle tree index."
            ],
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "compressedProof",
      "repr": {
        "kind": "c"
      },
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "a",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "b",
            "type": {
              "array": [
                "u8",
                64
              ]
            }
          },
          {
            "name": "c",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "dataPackAddedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "packId",
            "type": "u8"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "price",
            "type": "u64"
          },
          {
            "name": "smsIncluded",
            "type": "u32"
          },
          {
            "name": "callMinutesIncluded",
            "type": "u32"
          },
          {
            "name": "validityDays",
            "type": "u16"
          },
          {
            "name": "addedAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "dataPackDeactivatedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "packId",
            "type": "u8"
          },
          {
            "name": "deactivatedAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "dataPackPlan",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "packId",
            "type": "u8"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "priceLamports",
            "type": "u64"
          },
          {
            "name": "smsIncluded",
            "type": "u32"
          },
          {
            "name": "callMinutesIncluded",
            "type": "u32"
          },
          {
            "name": "validityDays",
            "type": "u16"
          },
          {
            "name": "isActive",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "dataPackPurchasedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "phoneAccount",
            "type": "pubkey"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "packId",
            "type": "u8"
          },
          {
            "name": "packName",
            "type": "string"
          },
          {
            "name": "pricePaid",
            "type": "u64"
          },
          {
            "name": "smsAdded",
            "type": "u32"
          },
          {
            "name": "callMinutesAdded",
            "type": "u32"
          },
          {
            "name": "validUntil",
            "type": "i64"
          },
          {
            "name": "purchasedAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "dataPackSettings",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "packs",
            "type": {
              "vec": {
                "defined": {
                  "name": "dataPackPlan"
                }
              }
            }
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "dataPackSettingsInitializedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "packsCount",
            "type": "u8"
          },
          {
            "name": "initializedAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "dataPackUpdatedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "packId",
            "type": "u8"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "newPrice",
            "type": "u64"
          },
          {
            "name": "updatedAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "financialTransactionEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "transactionType",
            "type": "string"
          },
          {
            "name": "fromAccount",
            "type": "pubkey"
          },
          {
            "name": "toAccount",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "success",
            "type": "bool"
          },
          {
            "name": "executedAt",
            "type": "i64"
          },
          {
            "name": "relatedPhoneNumber",
            "type": {
              "option": "string"
            }
          }
        ]
      }
    },
    {
      "name": "globalSubscriptionConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "totalUsersCreated",
            "type": "u64"
          },
          {
            "name": "lifetimeUserThreshold",
            "type": "u64"
          },
          {
            "name": "defaultSubscriptionMonths",
            "type": "u8"
          },
          {
            "name": "lifetimeEnabled",
            "type": "bool"
          },
          {
            "name": "datapackRestrictionsEnabled",
            "type": "bool"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "globalSubscriptionConfigInitializedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "lifetimeThreshold",
            "type": "u64"
          },
          {
            "name": "defaultMonths",
            "type": "u8"
          },
          {
            "name": "initializedAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "globalSubscriptionConfigUpdatedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "oldLifetimeThreshold",
            "type": "u64"
          },
          {
            "name": "newLifetimeThreshold",
            "type": "u64"
          },
          {
            "name": "oldDefaultMonths",
            "type": "u8"
          },
          {
            "name": "newDefaultMonths",
            "type": "u8"
          },
          {
            "name": "oldLifetimeEnabled",
            "type": "bool"
          },
          {
            "name": "newLifetimeEnabled",
            "type": "bool"
          },
          {
            "name": "totalUsersCreated",
            "type": "u64"
          },
          {
            "name": "updatedAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "lifetimeSubscriptionGrantedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "phoneAccount",
            "type": "pubkey"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "userNumber",
            "type": "u64"
          },
          {
            "name": "grantedAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "packedAddressTreeInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "addressMerkleTreePubkeyIndex",
            "type": "u8"
          },
          {
            "name": "addressQueuePubkeyIndex",
            "type": "u8"
          },
          {
            "name": "rootIndex",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "packedStateTreeInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "rootIndex",
            "type": "u16"
          },
          {
            "name": "proveByIndex",
            "type": "bool"
          },
          {
            "name": "merkleTreePubkeyIndex",
            "type": "u8"
          },
          {
            "name": "queuePubkeyIndex",
            "type": "u8"
          },
          {
            "name": "leafIndex",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "phoneAccount",
      "docs": [
        "PhoneAccount - COMPRESSED ACCOUNT using Light Protocol",
        "User's private data, subscriptions, datapacks, messages, call history",
        "",
        "IMPORTANT: Light Protocol compressed accounts support maximum 12 fields"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "linkedPhoneNumber",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "activeSubscriptionPlanId",
            "type": "u8"
          },
          {
            "name": "subscriptionStart",
            "type": "i64"
          },
          {
            "name": "subscriptionEnd",
            "type": "i64"
          },
          {
            "name": "subscriptionAutoRenew",
            "type": "bool"
          },
          {
            "name": "activeDatapackPlanId",
            "type": "u8"
          },
          {
            "name": "datapackSmsRemaining",
            "type": "u32"
          },
          {
            "name": "datapackCallMinutesRemaining",
            "type": "u32"
          },
          {
            "name": "datapackValidUntil",
            "type": "i64"
          },
          {
            "name": "totalSmsSent",
            "type": "u64"
          },
          {
            "name": "createdAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "phoneAccountCreatedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "phoneAccount",
            "type": "pubkey"
          },
          {
            "name": "linkedPhoneNumber",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "activeSubscriptionPlanId",
            "type": "u8"
          },
          {
            "name": "subscriptionStart",
            "type": "i64"
          },
          {
            "name": "subscriptionEnd",
            "type": "i64"
          },
          {
            "name": "subscriptionAutoRenew",
            "type": "bool"
          },
          {
            "name": "activeDatapackPlanId",
            "type": "u8"
          },
          {
            "name": "datapackSmsRemaining",
            "type": "u32"
          },
          {
            "name": "datapackCallMinutesRemaining",
            "type": "u32"
          },
          {
            "name": "datapackValidUntil",
            "type": "i64"
          },
          {
            "name": "totalSmsSent",
            "type": "u64"
          },
          {
            "name": "createdAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "phoneNumberAccount",
      "docs": [
        "PhoneNumberAccount - COMPRESSED ACCOUNT using Light Protocol",
        "Represents ownership of a phone number",
        "Can be wrapped as an NFT for trading on marketplaces"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "countryCode",
            "type": "string"
          },
          {
            "name": "number",
            "type": "string"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "phoneAccount",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "isWrapped",
            "type": "bool"
          },
          {
            "name": "nftMint",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "createdAt",
            "type": "i64"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "phoneNumberLinkedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "phoneNumber",
            "type": "string"
          },
          {
            "name": "phoneNumberAccount",
            "type": "pubkey"
          },
          {
            "name": "phoneAccount",
            "type": "pubkey"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "linkedAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "phoneNumberPurchasedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "phoneNumber",
            "type": "string"
          },
          {
            "name": "countryCode",
            "type": "string"
          },
          {
            "name": "number",
            "type": "string"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "phoneNumberAccount",
            "type": "pubkey"
          },
          {
            "name": "nftMint",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "pricePaid",
            "type": "u64"
          },
          {
            "name": "purchasedAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "phoneNumberSettings",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "basePriceLamports",
            "type": "u64"
          },
          {
            "name": "phoneNumberPurchasePrice",
            "type": "u64"
          },
          {
            "name": "premiumNumberEnabled",
            "type": "bool"
          },
          {
            "name": "minPhoneNumberLength",
            "type": "u8"
          },
          {
            "name": "maxPhoneNumberLength",
            "type": "u8"
          },
          {
            "name": "allowedCountryCodes",
            "type": {
              "vec": "string"
            }
          },
          {
            "name": "nftCollectionMint",
            "type": "pubkey"
          },
          {
            "name": "serviceFeeRecipient",
            "type": "pubkey"
          },
          {
            "name": "isPaused",
            "type": "bool"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "phoneNumberSettingsInitializedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "basePrice",
            "type": "u64"
          },
          {
            "name": "collectionMint",
            "type": "pubkey"
          },
          {
            "name": "initializedAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "phoneNumberSettingsUpdatedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "oldBasePrice",
            "type": "u64"
          },
          {
            "name": "newBasePrice",
            "type": "u64"
          },
          {
            "name": "premiumEnabled",
            "type": "bool"
          },
          {
            "name": "isPaused",
            "type": "bool"
          },
          {
            "name": "updatedAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "phoneNumberTransferredEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "phoneNumber",
            "type": "string"
          },
          {
            "name": "phoneNumberAccount",
            "type": "pubkey"
          },
          {
            "name": "oldOwner",
            "type": "pubkey"
          },
          {
            "name": "newOwner",
            "type": "pubkey"
          },
          {
            "name": "transferredAt",
            "type": "i64"
          },
          {
            "name": "wasLinked",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "phoneNumberUnlinkedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "phoneNumber",
            "type": "string"
          },
          {
            "name": "phoneNumberAccount",
            "type": "pubkey"
          },
          {
            "name": "phoneAccount",
            "type": "pubkey"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "unlinkedAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "phoneNumberUnwrappedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "phoneNumber",
            "type": "string"
          },
          {
            "name": "phoneNumberAccount",
            "type": "pubkey"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "nftMint",
            "type": "pubkey"
          },
          {
            "name": "unwrappedAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "phoneNumberWrappedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "phoneNumber",
            "type": "string"
          },
          {
            "name": "phoneNumberAccount",
            "type": "pubkey"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "nftMint",
            "type": "pubkey"
          },
          {
            "name": "nftDestination",
            "type": "pubkey"
          },
          {
            "name": "wrappedAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "serviceUsageEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "phoneAccount",
            "type": "pubkey"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "usageType",
            "type": "string"
          },
          {
            "name": "amount",
            "type": "u32"
          },
          {
            "name": "remainingSms",
            "type": "u32"
          },
          {
            "name": "remainingCallMinutes",
            "type": "u32"
          },
          {
            "name": "usedAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "smsSentEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "messageId",
            "type": "string"
          },
          {
            "name": "from",
            "type": "pubkey"
          },
          {
            "name": "to",
            "type": "pubkey"
          },
          {
            "name": "phoneAccount",
            "type": "pubkey"
          },
          {
            "name": "fromPhoneNumber",
            "type": "string"
          },
          {
            "name": "toPhoneNumber",
            "type": "string"
          },
          {
            "name": "sentAt",
            "type": "i64"
          },
          {
            "name": "remainingSms",
            "type": "u32"
          },
          {
            "name": "totalSmsSent",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "solNumberCentralState",
      "docs": [
        "Central State for managing NFT collection and program authority"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tag",
            "type": "u8"
          },
          {
            "name": "collectionMint",
            "type": "pubkey"
          },
          {
            "name": "totalPhoneNumbers",
            "type": "u64"
          },
          {
            "name": "totalWrapped",
            "type": "u64"
          },
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "subscriptionCancelledEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "phoneAccount",
            "type": "pubkey"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "planId",
            "type": "u8"
          },
          {
            "name": "expirationDate",
            "type": "i64"
          },
          {
            "name": "cancelledAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "subscriptionPlan",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "planId",
            "type": "u8"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "pricePerMonthLamports",
            "type": "u64"
          },
          {
            "name": "includedSms",
            "type": "u32"
          },
          {
            "name": "includedCallMinutes",
            "type": "u32"
          },
          {
            "name": "additionalSmsPrice",
            "type": "u64"
          },
          {
            "name": "additionalCallPrice",
            "type": "u64"
          },
          {
            "name": "isActive",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "subscriptionPlanAddedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "planId",
            "type": "u8"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "pricePerMonth",
            "type": "u64"
          },
          {
            "name": "smsIncluded",
            "type": "u32"
          },
          {
            "name": "callMinutesIncluded",
            "type": "u32"
          },
          {
            "name": "addedAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "subscriptionPlanDeactivatedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "planId",
            "type": "u8"
          },
          {
            "name": "deactivatedAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "subscriptionPlanUpdatedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "planId",
            "type": "u8"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "newPrice",
            "type": "u64"
          },
          {
            "name": "updatedAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "subscriptionPurchasedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "phoneAccount",
            "type": "pubkey"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "planId",
            "type": "u8"
          },
          {
            "name": "planName",
            "type": "string"
          },
          {
            "name": "pricePaid",
            "type": "u64"
          },
          {
            "name": "subscriptionStart",
            "type": "i64"
          },
          {
            "name": "subscriptionEnd",
            "type": "i64"
          },
          {
            "name": "smsIncluded",
            "type": "u32"
          },
          {
            "name": "callMinutesIncluded",
            "type": "u32"
          },
          {
            "name": "purchasedAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "subscriptionRenewedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "phoneAccount",
            "type": "pubkey"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "planId",
            "type": "u8"
          },
          {
            "name": "newExpiration",
            "type": "i64"
          },
          {
            "name": "pricePaid",
            "type": "u64"
          },
          {
            "name": "renewedAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "subscriptionSettings",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "plans",
            "type": {
              "vec": {
                "defined": {
                  "name": "subscriptionPlan"
                }
              }
            }
          },
          {
            "name": "defaultPlanId",
            "type": "u8"
          },
          {
            "name": "gracePeriodDays",
            "type": "u8"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "subscriptionSettingsInitializedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "defaultPlanId",
            "type": "u8"
          },
          {
            "name": "gracePeriodDays",
            "type": "u8"
          },
          {
            "name": "plansCount",
            "type": "u8"
          },
          {
            "name": "initializedAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "subscriptionUpgradedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "phoneAccount",
            "type": "pubkey"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "oldPlanId",
            "type": "u8"
          },
          {
            "name": "newPlanId",
            "type": "u8"
          },
          {
            "name": "pricePaid",
            "type": "u64"
          },
          {
            "name": "upgradedAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "treasury",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "totalCollected",
            "type": "u64"
          },
          {
            "name": "totalWithdrawals",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "validationFailureEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "account",
            "type": "pubkey"
          },
          {
            "name": "validationType",
            "type": "string"
          },
          {
            "name": "failureReason",
            "type": "string"
          },
          {
            "name": "detectedAt",
            "type": "i64"
          },
          {
            "name": "userInvolved",
            "type": {
              "option": "pubkey"
            }
          }
        ]
      }
    },
    {
      "name": "validityProof",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "option": {
              "defined": {
                "name": "compressedProof"
              }
            }
          }
        ]
      }
    }
  ]
};
