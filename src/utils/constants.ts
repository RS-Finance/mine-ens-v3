import { EthAddress } from '@app/types'

export const emptyAddress = '0x0000000000000000000000000000000000000000'

export const networkName = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  '1': 'mainnet',
  // eslint-disable-next-line @typescript-eslint/naming-convention
  '5': 'goerli',
  // eslint-disable-next-line @typescript-eslint/naming-convention
  '4': 'rinkeby',
  // eslint-disable-next-line @typescript-eslint/naming-convention
  '3': 'ropsten',
  // eslint-disable-next-line @typescript-eslint/naming-convention
  '1337': 'local',
}

interface ResolverAddresses {
  [key: string]: EthAddress[]
}

// Ordered by recency
export const RESOLVER_ADDRESSES: ResolverAddresses = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  '1': [
    '0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41',
    '0xdaaf96c344f63131acadd0ea35170e7892d3dfba',
    '0x226159d592e2b063810a10ebf6dcbada94ed68b8',
    '0x1da022710df5002339274aadee8d58218e9d6ab5',
  ],
  // eslint-disable-next-line @typescript-eslint/naming-convention
  '5': [
    '0x2bB117Bee0DB4D64fA0f6e7728BD07baA839e50c', // mine
  ],
  // eslint-disable-next-line @typescript-eslint/naming-convention
  '1337': [
    '0x70e0bA845a1A0F2DA3359C97E0285013525FFC49',
    '0x84eA74d481Ee0A5332c457a4d796187F6Ba67fEB',
  ],
}

export const RESOLVER_INTERFACE_IDS = {
  addrInterfaceId: '0x3b3b57de',
  txtInterfaceId: '0x59d1d43c',
  contentHashInterfaceId: '0xbc1c58d1',
}

export const GRACE_PERIOD = 90 * 24 * 60 * 60 * 1000
