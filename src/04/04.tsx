export type StreetType = {
    title: string
}

export type AddressType = {
    number: number
    street: StreetType
}

export type HouseType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}

export type GovernmentBuildingsType = {
    type: "HOSPITAL" | "FIRE-STATION"
    budget: number
    staffCount: number
    address: AddressType
}
export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GovernmentBuildingsType>
    citizensNumber: number
}
export function addMoneyToBudget(building: GovernmentBuildingsType, count: number) {
    building.budget += count
}
export function repairHouse(house: HouseType) {
    house.repaired = true;
}
export function toFireStaff(building: GovernmentBuildingsType, count: number) {
    building.staffCount -= count
}
export function toHireStaff(building: GovernmentBuildingsType, count: number) {
    building.staffCount += count
}
export function createMessage(city: CityType) {
    return `Hello ${city.title} citizens! All of ${city.citizensNumber} people.`
}