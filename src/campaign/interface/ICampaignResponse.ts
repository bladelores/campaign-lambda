import { reasonCampaignReject } from '../enum/reasonCampaignReject.enum';
import { campaignStatus } from '../enum/campaignStatus.enum';

interface ILinkCampaign {
    PKey: string;
}

export type TReasonCampaignReject = reasonCampaignReject.CUSTOM_REJECT
    | reasonCampaignReject.INVALID_DEALER
    | reasonCampaignReject.INVALID_INCH_SIZE
    | reasonCampaignReject.INVALID_TIRES
    | reasonCampaignReject.NA
    | reasonCampaignReject.NOT_READABLE
    | reasonCampaignReject.NO_VALID_DOCUMENT_ATTACHED;

export type TCampaignStatus = campaignStatus.APPROVED
    | campaignStatus.EXPORTED
    | campaignStatus.OPEN
    | campaignStatus.PROCESSED
    | campaignStatus.REJECTED;

export interface ICampaignResponse {
    CustomRejectReason: string;
    ReasonReject: TReasonCampaignReject;
    agencyId: string;
    brand: string;
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
