import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserInterface } from "../types/user.interface";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { SortingInterface } from "../types/sorting.interface";
import { DownloadInterface } from "../types/download.interface";

@Injectable()
export class UsersService {
    // constructor = 注入
    constructor(private httpClient: HttpClient) {}

    // Observable = シンクロ化
    getUsers(sorting: SortingInterface, searchValue: string): Observable<UserInterface[]> {
        // const url = `http://127.0.0.1:8000/users\?_sort=${sorting.column}&_order=${sorting.order}&name_like=${searchValue}`;
        const url = `http://127.0.0.1:8000/searchAll`;
        return this.httpClient.get<UserInterface[]>(url);
    }

    
    // download(fileNo: number): Observable<DownloadInterface> {
    download(fileNo: number) {
        // const url = `http://127.0.0.1:8000/users\?_sort=${sorting.column}&_order=${sorting.order}&name_like=${searchValue}`;
        const url = `http://127.0.0.1:8000/download\?fileNo=${fileNo}`;
        // return this.httpClient.post<DownloadInterface>(url, fileNo);
        return this.httpClient.post(url, fileNo,
            { headers: new HttpHeaders({'Content-Type': 'octet/stream',
                                        'Accept': 'octet/stream'}),
            responseType: 'arraybuffer'
            });
    }

    // // download(fileNo: number): Observable<DownloadInterface> {
    // download(fileNo: number): Observable<BlobPart> {
    //     // const url = `http://127.0.0.1:8000/users\?_sort=${sorting.column}&_order=${sorting.order}&name_like=${searchValue}`;
    //     const url = `http://127.0.0.1:8000/download\?fileNo=${fileNo}`;
    //     // return this.httpClient.post<DownloadInterface>(url, fileNo);
    //     return this.httpClient.get<BlobPart>(url);
    // }
}