import {ICampaignResponse, TCampaignStatus, TReasonCampaignReject} from '../interface/ICampaignResponse';

export class Campaign: {
    CustomRejectReason: string;
    ReasonReject: TReasonCampaignReject;
    agencyId: string;
    brand: string   ;
    brandRating: string;
    bu: number;
    campaignId: string;
    campaignName: string;
    campaignType: string;
    chanceToWin: string;
    dataUsageOptin: boolean;
    dateParticipation: string;
    feedback: string;
    freeField1: string;
    freeField2: string;
    freeField3: string;
    freeField4: string;
    freeField5: string;
    invoiceDate: string;
    nationalIdentityNumber: string;
    participateInPromotion: boolean;
    preferredContactChannel: string;
    promotionPlace: string;
    promotionYear: number;
    receiptInvoice: string;
    season: string;
    sendOn: string;
    source: string;
    status: TCampaignStatus;
    termsAccepted: boolean;
    transactionRating: string;
    typeInvoice: string;
    voucherCode: string;
    voucherType: string;
    linkCampaign: ILinkCampaign;
}
