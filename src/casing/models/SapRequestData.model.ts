import { ICasingDetailRequest } from "../interface/ICasingDetailRequest";

export class SapRequestData {
    crnnumber: string;
    salesOrg: string;
    distChannel: string;
    soldTo: string;

    constructor(queryData: ICasingDetailRequest) {
        this.crnnumber = queryData.crnnumber;
        this.salesOrg = queryData.salesOrg;
        this.distChannel = queryData.distChannel;
        this.soldTo = queryData.soldTo;
    }
}