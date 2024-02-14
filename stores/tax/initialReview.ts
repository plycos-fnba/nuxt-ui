import { Address } from "~/models/Address";
import { CollateralNumber } from "~/models/CollateralNumber";
import { InitialReview } from "~/models/tax/InitialReview";

export const useTaxInitialReviewStore = defineStore("taxInitialReview", () => {
  const initialReviews: Ref<InitialReview[]> = ref([]);

  async function load() {
    const res = await useEscrowApi(
      "collateral/tax/non-escrowed/initial-reviews"
    );
    const { data, pagination } = await res.json();

    initialReviews.value = data.map((review: any) => {
      return new InitialReview(
        new CollateralNumber(review.collateralNumberId, review.collateralNumber),
        review.accountNumber,
        review.accountStatus,
        new Address(review.address, review.city, review.county, review.state),
        review.lastReviewDate
      );
    });

    return res;
  }

  return {
    initialReviews,
    load,
  };
});
