
export class Search{
    buildingCategory: string;
    address: string;
    city: string;
    constructionYear: string;
    area: number;
    energyClass: string;
    annualHeatingNeed: number;
    description: string;
    heatingType: string;
    energySources: string[];
    ventilation: string;
    hotWater: string;
    coolingType: string;
    totalFloors: number;
    CO2Emission: number;

    constructor(
        buildingCategory: string,
        address: string,
        city: string,
        constructionYear: string,
        area: number,
        energyClass: string,
        annualHeatingNeed: number,
        description: string,
        heatingType: string,
        energySources: string[],
        ventilation: string,
        hotWater: string,
        coolingType: string,
        totalFloors: number,
        CO2Emission: number
    ){
        this.buildingCategory = buildingCategory;
        this.address = address;
        this.city = city;
        this.constructionYear = constructionYear;
        this.area = area;
        this.energyClass = energyClass;
        this.annualHeatingNeed = annualHeatingNeed;
        this.description = description;
        this.heatingType = heatingType;
        this.energySources = energySources;
        this.ventilation = ventilation;
        this.hotWater = hotWater;
        this.coolingType = coolingType;
        this.totalFloors = totalFloors;
        this.CO2Emission = CO2Emission;
    }
    
}