export class SuggestionDto{
    energyClass: string;
    energySources: string[];    
    heatingType: string[];
    ventilation: string;
    hotWater: string;
    coolingType: string;

    constructor(
        energyClass: string,
        energySources: string[],
        heatingType: string[],
        ventilation: string,
        hotWater: string,
        coolingType: string,
    ){
        this.energyClass = energyClass;
        this.energySources = energySources;
        this.heatingType = heatingType;
        this.ventilation = ventilation;
        this.hotWater = hotWater;
        this.coolingType = coolingType;
    }
}