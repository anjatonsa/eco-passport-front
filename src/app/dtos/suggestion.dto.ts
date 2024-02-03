export class SuggestionDto{
    energyClass: string;
    annualHeatingNeed: number;
    energySources: string[];    
    heatingType: string[];
    ventilation: string;
    hotWater: string;
    coolingType: string;
    CO2Emission: number;

    constructor(
        energyClass: string,
        annualHeatingNeed: number,
        energySources: string[],
        heatingType: string[],
        ventilation: string,
        hotWater: string,
        coolingType: string,
        CO2Emission: number
    ){
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