import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserInterface } from "../types/user.interface";
import { HttpClient } from "@angular/common/http";
import { SortingInterface } from "../types/sorting.interface";

@Injectable()
export class UsersService {
    constructor(private httpClient: HttpClient) {}

    getUsers(sorting: SortingInterface, searchValue: string): Observable<UserInterface[]> {
        const url = `http://127.0.0.1:8000/users?_sort=${sorting.column}&_order=${sorting.order}&name_like=${searchValue}`;
        // const url = `http://127.0.0.1:8000/users`;
        return this.httpClient.get<UserInterface[]>(url);
    }
}