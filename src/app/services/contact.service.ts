import { Injectable } from "@angular/core";
import { Contact } from "../interfaces/Contact";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class ContactService {
    private baseApiUrl = environment.baseApiUrl;
    private apiUrl = `${this.baseApiUrl}/contact`;

    constructor(private http: HttpClient) {}

    createContact(data: Contact): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}`, data);
    }
}
