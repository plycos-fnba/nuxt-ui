import type { Address } from "../Address";
import type { CollateralNumber } from "../CollateralNumber";

export class InitialReview {
  collateralNumber: CollateralNumber;
  accountNumber: number;
  accountStatus: string;
  address: Address;
  lastReviewDate: string;

  constructor(
    collateral: CollateralNumber,
    accountNumber: number,
    accountStatus: string,
    address: Address,
    lastReviewDate: string
  ) {
    this.collateralNumber = collateral;
    this.accountNumber = accountNumber;
    this.accountStatus = accountStatus;
    this.address = address;
    this.lastReviewDate = lastReviewDate;
  }
}
