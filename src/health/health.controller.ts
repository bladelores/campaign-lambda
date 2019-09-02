import {
    Controller, IResponseResult,
    Resource,
} from 'lambda-core';
import {
    IHealthStatusResponse,
} from 'example-interface';
import { Lambda } from 'aws-sdk';

export class HealthController extends Controller {
    @Resource()
    public async status(): Promise<IResponseResult> {

        return this.getResponse().ok<IHealthStatusResponse>({
            success: true,
        });
    }

    @Resource()
    public async auth(): Promise<IResponseResult> {
        return this.getResponse().ok<any>({
            success: true,
            data: this,
        });
    }

    @Resource()
    public async oauth(): Promise<IResponseResult> {
        return this.getResponse().ok<any>({
            success: true,
            data: this,
        });
    }

    @Resource()
    public async requestVPC() {
        const lambda = new Lambda({
            endpoint: undefined,
            region: 'eu-central-1',
        });
        const stage = process.env.STAGE;
        const func = `example-lambda-${stage}-responseVPC`;

        const { Payload } = await lambda.invoke({
            FunctionName: func, Payload: JSON.stringify({ name: 'test-send' }),
        }).promise();
        return this.getResponse().ok<any>(Payload);
    }
}
