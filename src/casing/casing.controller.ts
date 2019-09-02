import {
    Controller, IResponseResult,
    Resource,
} from 'lambda-core';
import { ICasingResponse } from './ICasingResponse';
import { ICasingDetailRequest } from './ICasingDetailRequest';

export class CasingController extends Controller {
    @Resource()
    public async casingDetails(): Promise<IResponseResult> {

        const query = this.getQueryParams<ICasingDetailRequest>();

        return this.getResponse().ok<ICasingResponse>({
            isPending  : false,
            hasAtLeastOneCBCasing: false,
            hasAtLeastOneCOCCasing: false,
            crnData : query
        });
    }
}
