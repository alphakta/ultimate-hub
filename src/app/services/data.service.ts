import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Player } from '../models/player';
import { environment } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';
import { convertToPlayer, convertToPlayerWithAdvancedStats } from './utils';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = environment.apiUrl;
  private apiKey = environment.apiKey;

  constructor(
    private readonly http: HttpClient,
    private readonly sanitizer: DomSanitizer
  ) {
  }

  protected getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'X-AUTH-TOKEN': this.apiKey
    });
  }

  getPlayers(page: number = 1): Observable<{ players: Player[], pagination: any }> {
    const url = `${this.apiUrl}/players`;
    const headers = this.getHeaders();

    return this.http.get<any>(url, { headers, params: { page: page.toString() } }).pipe(
      map((response) => {
        const players = response.items ? response.items.map((item: any) => convertToPlayer(item)) : [];
        const pagination = response.pagination || {};

        return { players, pagination };
      })
    );
  }

  getImagePlayerById(playerId: number): Observable<string> {
    const url = `${this.apiUrl}/players/${playerId}/image`;
    const headers = this.getHeaders();
    const options = { headers, responseType: 'blob' as 'blob' };

    return this.http.get(url, options).pipe(
      map((imageBlob: Blob) => {
        const imageUrl = URL.createObjectURL(imageBlob);
        return this.sanitizer.bypassSecurityTrustUrl(imageUrl) as string;
      })
    );
  }

  getPlayerWithAdvancedStatsById(playerId: number): Observable<Player> {
    const url = `${this.apiUrl}/players/${playerId}`;
    const headers = this.getHeaders();

    return this.http.get<any>(url, { headers }).pipe(
      map((response) => convertToPlayerWithAdvancedStats(response.player))
    );
  }

  getImageNationalityById(nationalityId: number): Observable<string> {
    const url = `${this.apiUrl}/nations/${nationalityId}/image`;
    const headers = this.getHeaders();
    const options = { headers, responseType: 'blob' as 'blob' };

    return this.http.get(url, options).pipe(
      map((imageBlob: Blob) => {
        const imageUrl = URL.createObjectURL(imageBlob);
        return this.sanitizer.bypassSecurityTrustUrl(imageUrl) as string;
      })
    );
  }

  getImageClubById(clubId: number): Observable<string> {
    const url = `${this.apiUrl}/clubs/${clubId}/image`;
    const headers = this.getHeaders();
    const options = { headers, responseType: 'blob' as 'blob' };

    return this.http.get(url, options).pipe(
      map((imageBlob: Blob) => {
        const imageUrl = URL.createObjectURL(imageBlob);
        return this.sanitizer.bypassSecurityTrustUrl(imageUrl) as string;
      })
    );
  }
}
