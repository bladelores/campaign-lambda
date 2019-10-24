import {
    Controller, IResponseResult,
    Resource,
} from 'lambda-core';
import { ICampaignResponse } from './interface/ICampaignResponse';
import { ICampaignRequest } from './interface/ICampaignRequest';
import { CampaignService} from './service/campaign.service';

export class CampaignController extends Controller {
    @Resource()
    public async campaignInfo(): Promise<IResponseResult> {
        const query = this.getQueryParams<ICampaignRequest>();
        const resultData : ICampaignResponse = await this.getCampaigns(query);

        return this.getResponse().ok<ICampaignResponse>(resultData);
    }

    private async getCampaigns(queryData : ICampaignRequest) {
        const campaignService : CampaignService = new CampaignService();

        const campaignResponse : ICampaignResponse = campaignService.getCampaigns();

        return campaignResponse;
    }
}
