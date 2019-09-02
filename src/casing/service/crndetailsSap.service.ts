import { ICasingDetailRequest } from "../interface/ICasingDetailRequest";
import { SapRequestData } from '../models/SapRequestData.model';

export class CrnDetailsSapService {

    public async getCrnDataFromSap(queryData: ICasingDetailRequest) {
        const sapRequestData : SapRequestData = this.createDataModelFromInput(queryData);
        return await this.sapRequest(sapRequestData);
    }

    private createDataModelFromInput(queryData: ICasingDetailRequest) : SapRequestData {
        return new SapRequestData(queryData);
    }

    private async sapRequest(requestData: SapRequestData) : Promise<any> {
        var url = __dirname + '/../../src/resources/DOC_INTF_ZEUEB_II_B2B_EC_SEARCH_CASINGS.wsdl';

        return new Promise((resolve, reject) => {
            /*this.soap.createClient(url, (err: any, client: any) => {
                client.setSecurity(new BasicAuthSecurity(CREDENTIALS.username, CREDENTIALS.password));
                client.setEndpoint("https://erpnc3.goodyear.com:443/sap/bc/srt/xip/sap/zb2becsearchcasings/100/b2becsearchcasings/b2becsearchcasings_binding");
                client.SearchCasing(this.createEnvelopeData(requestData), (err: any, result: any) => {
                    if (err !== null)
                        reject(err);
                    console.log(JSON.stringify(result));
                    resolve(result);
                });
            });*/

            resolve(JSON.parse('{"CRNHeaders":{"CRNHeader":[{"CRNNumber":"0013061103","CRNSource":"EC","SalesOrganization":"DE01","DistributionChannel":"01","CasingOwnerVendor":"0004405094","CasingOwnerCustomer":"0000107757","CasingPartner":"0030026536","RetreadReturnCustomer":"0000107757","CasingCollectionCustomerAddress":{"CustomerNumber":"0000107757","Name":"","Street":"","PostalCode":"","City":"","Country":""},"HeaderComment":"Kommentar","CreationDate":"2019-08-28","Creator":"AA40974","ChangeDate":"2019-08-28","ChangedBy":"AA40974"}]},"CRNItems":{"CRNItem":[{"CRNNumber":"0013061103","ItemNumber":"000001","MaterialNumber":"000000000000878775","Status":"STAT_010","ScrappedAtCustomerLocation":"N","RetreadMaterialNumber":"000000000000894245","ReturnCasingIfRejected":false,"RequestedBusinessModel":"COC","SerialNumber":"11131112","VehicleRegistrationNumber":"XY-AB-123","TreadDepth":"01","RegrooveIndicator":"N","JobCardReference":"13","Barcode":"1111111117","FinalBusinessModel":"COC"},{"CRNNumber":"0013061103","ItemNumber":"000002","MaterialNumber":"000000000000878888","Status":"STAT_010","ScrappedAtCustomerLocation":"N","ReturnCasingIfRejected":false,"RequestedBusinessModel":"PU","SerialNumber":"11311114","VehicleRegistrationNumber":"XY-AC-123","TreadDepth":"02","RegrooveIndicator":"N","JobCardReference":"13","Barcode":"2111211112","FinalBusinessModel":"PU"},{"CRNNumber":"0013061103","ItemNumber":"000003","MaterialNumber":"000000000000878754","Status":"STAT_010","ScrappedAtCustomerLocation":"N","RetreadMaterialNumber":"000000000000894567","ReturnCasingIfRejected":true,"RequestedBusinessModel":"CE","SerialNumber":"11345111","VehicleRegistrationNumber":"XY-AD-123","TreadDepth":"04","RegrooveIndicator":"N","JobCardReference":"13","Barcode":"1111154117","FinalBusinessModel":"CE"}]}}'));
        });
    }

    private createEnvelopeData(dataModel: SapRequestData): any {
        const data = {
            'CustomerData': {
                BusinessPartnerSoldTo: dataModel.soldTo,
                SalesOrganisation: dataModel.salesOrg,
                DistributionChannel: dataModel.distChannel
            },
            'GenericUserParameter': {
                ID: 'AA40974'
            },
            'SearchCriteria': {
                CRNNumber: '',
                'DateRange': {
                    DateFrom: '',
                    DateTo: ''
                },
                PendingOnly: '',
                RejectedOnly: ''
            }
        };
        if (dataModel.crnnumber !== undefined)
            data.SearchCriteria.CRNNumber = dataModel.crnnumber;
        return data;
    }

}