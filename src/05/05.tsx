export type StreetType = {
    title: string
}

export type AddressType = {
    number: number
    street: StreetType
}

export type HouseType = {
    id: number
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

export const demolishHousesOnTheStreet = (city:CityType, streetTitle: string) => city.houses = city.houses.filter(house => house.address.street.title !== streetTitle);


export const getHousesOnTheStreet = (houses: Array<HouseType>, streetTitle: string) =>  houses.filter(house => house.address.street.title === streetTitle);

export const getBuildingsWithStaffCountGreaterThen = (governmentBuildings: Array<GovernmentBuildingsType>, staffCount: number) => governmentBuildings.filter(governmentBuilding => governmentBuilding.staffCount > staffCount);
