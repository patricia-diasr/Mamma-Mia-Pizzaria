export interface Reservation {
    id?: number;
    name: string;
    email: string;
    phone: string;
    peopleNumber: number;
    date: string;
    time: string;
    description?: string;
}