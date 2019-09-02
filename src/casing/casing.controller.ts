import {
    Controller, IResponseResult,
    Resource,
} from 'lambda-core';
import { ICasingResponse } from './interface/ICasingResponse';
import { ICasingDetailRequest } from './interface/ICasingDetailRequest';
import { CrnDetailsSapService } from './service/crndetailsSap.service';
import { CrnDetailsConverterService } from './service/crnDetailsConverter.service';
import { CasingReturnNote } from './models/casingReturnNote.model';
import { CrnDetailsService } from './service/crnDetails.service';

export class CasingController extends Controller {
    @Resource()
    public async casingDetails(): Promise<IResponseResult> {

        const query = this.getQueryParams<ICasingDetailRequest>();
        const resultData : ICasingResponse = await this.getCrnDetailData(query);

        return this.getResponse().ok<ICasingResponse>(resultData);
    }

    private async getCrnDetailData(queryData : ICasingDetailRequest){

        const crnDetailsSapService : CrnDetailsSapService = new CrnDetailsSapService();
        const crnDetailsConverterService : CrnDetailsConverterService = new CrnDetailsConverterService();

        const crnSapData = await crnDetailsSapService.getCrnDataFromSap(queryData);
        const detailledCrnData : CasingReturnNote = crnDetailsConverterService.createDetailedCrnDataFromSapData(crnSapData);

        const crnDetailsService : CrnDetailsService = new CrnDetailsService(detailledCrnData);
        console.log(crnDetailsService.isPending());

        let casingResponse : ICasingResponse = {
            crnData : detailledCrnData,
            hasAtLeastOneCBCasing : false,
            hasAtLeastOneCOCCasing : true, 
            isPending: true
        }

        return casingResponse;
        
    }
}
