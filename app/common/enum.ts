export enum Currency {
  USD = 'USD',
  NGN = 'NGN',
}

export enum Transaction {
  SUBSCRIPTION = 'SUBSCRIPTION',
  CARD_ADDING = 'CARD_ADDING',
  WITHDRAWAL = 'WITHDRAWAL',
  REFUND = 'REFUND',
}

export enum TransactionStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
}

export enum MerchantProvider {
  PAYSTACK = 'PAYSTACK',
}

export enum EditorialMode {
  DRAFT = 'DRAFT',
  PUBLISH = 'PUBLISH',
  ARCHIVE = 'ARCHIVE',
}

export enum Vote {
  UP = 'UP',
  DOWN = 'DOWN',
}

export enum MIMEType {
  PNG = 'image/png',
  JPEG = 'image/jpeg',
  WEBP = 'image/webp',
  GIF = 'image/gif',
}
