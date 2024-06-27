export interface Reservation {
    id?: string;
    name: string;
    email: string;
    phone: string;
    peopleNumber: number;
    date: string;
    time: string;
    description?: string;
}