import typegoose, { getModelForClass, Ref, defaultClasses } from '@typegoose/typegoose';
import { UserEntity } from '../user/user.entity.js';
import { OfferEntity } from '../offer/offer.entity.js';

const { prop, modelOptions } = typegoose;

export interface ReviewEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'reviews'
  }
})
export class ReviewEntity extends defaultClasses.TimeStamps {
  @prop({
    trim: true,
    required: true
  })
  public comment!: string;

  @prop({required: true })
  public rating!: number;

  @prop({
    ref: OfferEntity,
    required: true
  })
  public offerId!: Ref<OfferEntity>;

  @prop({
    ref: UserEntity,
    required: true,
  })
  public userId!: Ref<UserEntity>;
}

export const ReviewModel = getModelForClass(ReviewEntity);
