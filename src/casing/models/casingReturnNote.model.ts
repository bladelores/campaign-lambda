import { Address } from "./address.model";

export class CasingReturnNote {

    private salesOrganisation!: string;
    private distributionChannel!: string;
    private crnSource!: string;
    private soldTo!: string; 
    private sapTimeStamp!: Date;
    private creationDate!: Date;
    private creator!: string; 
    private retreadReturnCustomer!: string;
    private casingOwnerVendor!: string;
    private casingOwnerCustomer!: string;
    private casingPartner!: string;
    private crnNumber!: string;
    private customerInvoiceNumber!: string;
    private contractNumber!: string;
    private action!: string;
    private headerComment!: string;
    private pickupShipTo!: string;
    private pickupAddress!: Address;
    private changeDate!: Date;
    private submitDate!: Date;
    private crnCasingBankVendor!: any;
    private referenceCustomerNumber!: string;
    private casingOtherMaterialEmailProcess!: string;
    private casingReturnNoteEntries: any[];

    constructor() {}

    public getSalesOrganisation(): string {
        return this.salesOrganisation;
    }

    public setSalesOrganisation(salesOrganisation: string): void {
        this.salesOrganisation = salesOrganisation;
    }

    public getDistributionChannel(): string {
        return this.distributionChannel;
    }

    public setDistributionChannel(distributionChannel: string): void {
        this.distributionChannel = distributionChannel;
    }

    public getCrnSource(): string {
        return this.crnSource;
    }

    public setCrnSource(crnSource: string): void {
        this.crnSource = crnSource;
    }

    public getSoldTo(): string {
        return this.soldTo;
    }

    public setSoldTo(soldTo: string): void {
        this.soldTo = soldTo;
    }

    public getSapTimeStamp(): Date {
        return this.sapTimeStamp;
    }

    public setSapTimeStamp(sapTimeStamp: Date): void {
        this.sapTimeStamp = sapTimeStamp;
    }

    public getCreationDate(): Date {
        return this.creationDate;
    }

    public setCreationDate(creationDate: Date): void {
        this.creationDate = creationDate;
    }

    public getCreator(): string {
        return this.creator;
    }

    public setCreator(creator: string): void {
        this.creator = creator;
    }

    public getRetreadReturnCustomer(): string {
        return this.retreadReturnCustomer;
    }

    public setRetreadReturnCustomer(retreadReturnCustomer: string): void {
        this.retreadReturnCustomer = retreadReturnCustomer;
    }

    public getCasingOwnerVendor(): string {
        return this.casingOwnerVendor;
    }

    public setCasingOwnerVendor(casingOwnerVendor: string): void {
        this.casingOwnerVendor = casingOwnerVendor;
    }

    public getCasingOwnerCustomer(): string {
        return this.casingOwnerCustomer;
    }

    public setCasingOwnerCustomer(casingOwnerCustomer: string): void {
        this.casingOwnerCustomer = casingOwnerCustomer;
    }

    public getCasingPartner(): string {
        return this.casingPartner;
    }

    public setCasingPartner(casingPartner: string): void {
        this.casingPartner = casingPartner;
    }

    public getCrnNumber(): string {
        return this.crnNumber;
    }

    public setCrnNumber(crnNumber: string): void {
        this.crnNumber = crnNumber;
    }

    public getCustomerInvoiceNumber(): string {
        return this.customerInvoiceNumber;
    }

    public setCustomerInvoiceNumber(customerInvoiceNumber: string): void {
        this.customerInvoiceNumber = customerInvoiceNumber;
    }

    public getContractNumber(): string {
        return this.contractNumber;
    }

    public setContractNumber(contractNumber: string): void {
        this.contractNumber = contractNumber;
    }

    public getAction(): string {
        return this.action;
    }

    public setAction(action: string): void {
        this.action = action;
    }

    public getHeaderComment(): string {
        return this.headerComment;
    }

    public setHeaderComment(headerComment: string): void {
        this.headerComment = headerComment;
    }

    public getPickupShipTo(): string {
        return this.pickupShipTo;
    }

    public setPickupShipTo(pickupShipTo: string): void {
        this.pickupShipTo = pickupShipTo;
    }

    public getPickupAddress(): Address {
        return this.pickupAddress;
    }

    public setPickupAddress(pickupAddress: Address): void {
        this.pickupAddress = pickupAddress;
    }

    public getChangeDate(): Date {
        return this.changeDate;
    }

    public setChangeDate(changeDate: Date): void {
        this.changeDate = changeDate;
    }

    public getSubmitDate(): Date {
        return this.submitDate;
    }

    public setSubmitDate(submitDate: Date): void {
        this.submitDate = submitDate;
    }

    public getCrnCasingBankVendor(): any {
        return this.crnCasingBankVendor;
    }

    public setCrnCasingBankVendor(crnCasingBankVendor: any): void {
        this.crnCasingBankVendor = crnCasingBankVendor;
    }

    public getReferenceCustomerNumber(): string {
        return this.referenceCustomerNumber;
    }

    public setReferenceCustomerNumber(referenceCustomerNumber: string): void {
        this.referenceCustomerNumber = referenceCustomerNumber;
    }

    public getCasingOtherMaterialEmailProcess(): string {
        return this.casingOtherMaterialEmailProcess;
    }

    public setCasingOtherMaterialEmailProcess(casingOtherMaterialEmailProcess: string): void {
        this.casingOtherMaterialEmailProcess = casingOtherMaterialEmailProcess;
    }

    
    public getCasingReturnNoteEntries(): any[] {
        return this.casingReturnNoteEntries;
    }

    public setCasingReturnNoteEntries(casingReturnNoteEntries: any[]): void {
        this.casingReturnNoteEntries = casingReturnNoteEntries;
    }


    

    


    

}