import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { LinePosition } from "../interfaces/LinePosition";

@Injectable({
    providedIn: "root",
})
export class VirtualLineService {
    private baseApiUrl = environment.baseApiUrl;
    private apiUrl = `${this.baseApiUrl}/api/virtual-line`;

    constructor() {}

    getWaitingTime(peopleNumber: number, priority: string): Number {
        return 4;
    }

    getLinePosition(linePositionId: string): LinePosition {
        return {
            name: "Lorem Impsum",
            email: "loremimpsum@gmail.com",
            phone: "(15) 99999-9999",
            peopleNumber: 5,
            priority: "none",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, debitis consequuntur voluptas soluta, eum omnis impedit adipisci incidunt nulla esse expedita, iure ex voluptatibus quisquam in nobis pariatur tempore animi.",
            waitingTime: 3,
        };
    }

    createLinePosition(formData: FormData): string {
        return "Posição na fila guardada";
    }

    deleteLinePosition(linePositionId: string): string {
        return "Posição na fila deletada";
    }
}
