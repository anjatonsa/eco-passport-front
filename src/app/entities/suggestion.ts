export class Suggestion{
    _id: string;
    energyClass: string;
    annualHeatingNeed: number;
    energySources: string[];    
    heatingType: string[];
    ventilation: string;
    hotWater: string;
    coolingType: string;
    CO2Emission: number;

    constructor(
        _id: string,
        energyClass: string,
        annualHeatingNeed: number,
        energySources: string[],
        heatingType: string[],
        ventilation: string,
        hotWater: string,
        coolingType: string,
        CO2Emission: number
    ){
        this._id = _id;
        this.energyClass = energyClass;
        this.annualHeatingNeed = annualHeatingNeed;
        this.energySources = energySources;
        this.heatingType = heatingType;
        this.ventilation = ventilation;
        this.hotWater = hotWater;
        this.coolingType = coolingType;
        this.CO2Emission = CO2Emission;
    }
}