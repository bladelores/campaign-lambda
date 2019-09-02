export class CrnDetailsService {
    private crn : any;

    constructor (crn : any) {
        this.crn = crn;
    }

    public isPending () : boolean {
        return this.crn.casingReturnNoteEntries.reduce(this.checkDraftStatus, false);
    }

    private checkDraftStatus (acc: boolean, currentVal: any) : boolean {
        if (currentVal.casingStatus.code === 'Stat_010' || acc)
            return true
        
        return false;
    }

    public isAtLeastOneSelectedBusinessModelCasingAvailable (businessModel: string) :boolean {
        if (businessModel === 'COC')
            return this.crn.casingReturnNoteEntries.reduce(this.checkCocAvailability, false);
        if (businessModel === 'CB') 
            return this.crn.casingReturnNoteEntries.reduce(this.checkCBAvailability, false);
        return false;
    }

    private checkCocAvailability(acc: boolean, currentVal: any) : boolean {
        let requestedIsCoc = (currentVal.requestedBusinessModel != null) && (currentVal.requestedBusinessModel == 'COC');
        let finalBusinessModelIsCoc = (currentVal.finalBusinessModel != null) && (currentVal.finalBusinessModel == 'COC');
        
        if (requestedIsCoc || finalBusinessModelIsCoc || acc)
            return true

        return false;
    }

    private checkCBAvailability(acc: boolean, currentVal: any) : boolean {
        let requestedIsCB = (currentVal.requestedBusinessModel != null) && (currentVal.requestedBusinessModel == 'CB');
        let finalBusinessModelIsCB = (currentVal.finalBusinessModel != null) && (currentVal.finalBusinessModel == 'CB');
        
        if (requestedIsCB || finalBusinessModelIsCB || acc)
            return true

        return false;
    }
}