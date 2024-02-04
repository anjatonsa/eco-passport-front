import { User } from "../entities/user";

export class Passport{
    _id: string;
    buildingCategory: string;
    address: string;
    city: string;
    constructionYear: string;
    area: number;
    energyClass: string;
    annualHeatingNeed: number;
    owner: User;
    description: string;
    heatingType: string;
    energySources: string[];
    ventilation: string;
    hotWater: string;
    coolingType: string;
    totalFloors: number;
    CO2Emission: number;

    [key: string]: string | number | User | string[]; // Index signature to allow any string key with specific value types


    constructor(
        _id: string,
        buildingCategory: string,
        address: string,
        city: string,
        constructionYear: string,
        area: number,
        energyClass: string,
        annualHeatingNeed: number,
        owner: User,
        description: string,
        heatingType: string,
        energySources: string[],
        ventilation: string,
        hotWater: string,
        coolingType: string,
        totalFloors: number,
        CO2Emission: number
        
    ){
        this._id = _id;
        this.buildingCategory = buildingCategory;
        this.address = address;
        this.city = city;
        this.constructionYear = constructionYear;
        this.area = area;
        this.energyClass = energyClass;
        this.annualHeatingNeed = annualHeatingNeed;
        this.owner = owner;
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