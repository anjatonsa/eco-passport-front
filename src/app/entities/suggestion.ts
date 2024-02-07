export class Suggestion{
    _id: string;
    energyClass: string;
    energySources: string[];    
    heatingType: string[];
    ventilation: string;
    hotWater: string;
    coolingType: string;

    constructor(
        _id: string,
        energyClass: string,
        energySources: string[],
        heatingType: string[],
        ventilation: string,
        hotWater: string,
        coolingType: string,
    ){
        this._id = _id;
        this.energyClass = energyClass;
        this.energySources = energySources;
        this.heatingType = heatingType;
        this.ventilation = ventilation;
        this.hotWater = hotWater;
        this.coolingType = coolingType;
    }
}