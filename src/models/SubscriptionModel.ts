export interface CreateSubscriptionRequest {
  code: string;
  duration: string;
  title: string;
  price: string;
  type: "coach" | "fan";
}

export interface CreateSubscriptionDetailsRequest {
  subscriptionId: string;
  title: string;
  description: string;
  image_url: string;
}

export interface DeleteSubscriptionDetailsRequest {
  id: string;
}
