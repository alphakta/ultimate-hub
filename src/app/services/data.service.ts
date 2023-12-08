import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Player } from '../models/player';
import { environment } from 'src/environments/environment';
import { WorkRate } from '../models/work-rate';
import { Stats } from '../models/stats';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = environment.apiUrl;
  private apiKey = environment.apiKey;

  constructor(
    private readonly http: HttpClient,
  ) { }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'X-AUTH-TOKEN': this.apiKey
    });
  }

  private convertToPlayer(item: any): Player {
    return {
      id: item.id,
      firstName: item.firstName,
      lastName: item.lastName,
      name: item.name,
      height: item.height,
      weight: item.weight,
      gender: item.gender,
      birthDate: new Date(item.birthDate),
      age: item.age,
      position: item.position,
      foot: item.foot,
      weakFoot: item.weakFoot,
      skillMoves: item.skillMoves,
      rating: item.rating,
      imageUrl: this.getPlayerImageUrl(item.id),
      color: item.color,
      workRate: { attack: item.attackWorkRate, defense: item.defenseWorkRate } as WorkRate,
      stats: {
        pace: item.pace,
        shooting: item.shooting,
        passing: item.passing,
        dribbling: item.dribbling,
        defending: item.defending,
        physicality: item.physicality
      } as Stats,
      idNationality: item.nation,
      idClub: item.club
    };
  }

  private getPlayerImageUrl(playerId: number): string {
    return `${this.apiUrl}/players/${playerId}/image`;
  }
  
  getPlayers(page: number = 1): Observable<{ players: Player[]}> {
    const url = `${this.apiUrl}/players`;
    const headers = this.getHeaders();
  
    return this.http.get<any>(url, { headers, params: { page: page.toString()} }).pipe(
      map((response) => {
        if (response.items) {
          return response.items.map((item: any) =>
            this.convertToPlayer(item)
          );
        } else {
          return [];
        }
      })
    );
  }
}