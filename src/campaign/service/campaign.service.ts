import { AuthService } from './auth.service';
import { ICampaignResponse } from '../interface/ICampaignResponse';
import { reasonCampaignReject } from '../enum/reasonCampaignReject.enum';
import { campaignStatus } from '../enum/campaignStatus.enum';

export class CampaignService {
    public getCampaigns() : ICampaignResponse {
        //const authService = new AuthService();
        //const accessToken = authService.getAccessToken();

        let campaign : new ICampaignResponse = {
            CustomRejectReason: 'Customl Rejection',
            ReasonReject: reasonCampaignReject.NA,
            agencyId: 'agency_Id_1',
            brand: 'Dunlop',
            brandRating: '',
            bu: 0,
            campaignId: 'campaign_Id_1',
            campaignName: 'fuelvoucher-campaign',
            campaignType: 'campaign_Type_1',
            chanceToWin: '',
            dataUsageOptin: true,
            dateParticipation: '2019-01-28',
            feedback: '',
            freeField1: '',
            freeField2: '',
            freeField3: '',
            freeField4: '',
            freeField5: '',
            invoiceDate: '',
            nationalIdentityNumber: '',
            participateInPromotion: true,
            preferredContactChannel: '',
            promotionPlace: '',
            promotionYear: 2019,
            receiptInvoice: '',
            season: '',
            sendOn: '',
            source: '',
            status: campaignStatus.REJECTED,
            termsAccepted: false,
            transactionRating: '',
            typeInvoice: '',
            voucherCode: '',
            voucherType: '',
            linkCampaign: {
                PKey: '@RZMsak4zMv1PL6sEMLHAYiAvCqVaD8uX1vKg9m1MYD21WE-reIjIABWyprJvr8wSVD5mA5e6L9JKkCirzvRLVKMty0c'
            },
        };

        return campaign;
    }
}
