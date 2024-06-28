import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Item } from "../interfaces/Item";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class MenuService {
    private baseApiUrl = environment.baseApiUrl;
    private apiUrl = `${this.baseApiUrl}/menu`;

    constructor(private http: HttpClient) {}

    getItems(): Observable<Item[]> {
        return this.http.get<Item[]>(this.apiUrl);
    }
}
