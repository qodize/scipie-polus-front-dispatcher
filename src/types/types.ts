export interface Order {
    id: number
    user_phone: string
    driver_phone: string
    transpport_type: string
    start: Date
    end: Date
    latitude: number
    longitude: number
    status: string
}
