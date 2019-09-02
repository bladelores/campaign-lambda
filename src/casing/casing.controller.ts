import {
    Controller, IResponseResult,
    Resource,
} from 'lambda-core';
import { ICasingResponse } from './ICasingResponse';

export class CasingController extends Controller {
    @Resource()
    public async casingDetails(): Promise<IResponseResult> {

        return this.getResponse().ok<ICasingResponse>({
            result  : "ok"
        });
    }
}
