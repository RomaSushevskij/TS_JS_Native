export type AddressType = {
    city: string
    streetTitle: string
    house: number
}

export type TechnologiesType = {
    id: number
    title: string
}

export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechnologiesType>
}

export function addSkills(student: StudentType, skill: string) {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(student: StudentType) {
    student.isActive = true
}

export function doesStudentLiveIn(student: StudentType, cityName: string) {
    return student.address.city === cityName
}