import * as anchor from '@project-serum/anchor';
import { PublicKey } from '@solana/web3.js';

export interface GlobalPool {
    superAdmin: PublicKey,
    bet: anchor.BN,
    chance: number,

    loyaltyFee: number,
    teamCount: number,
    teamTreasury: PublicKey[]
    treasuryRate: number[]
}
