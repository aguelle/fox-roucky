// src/app/services/facebook-reviews.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FacebookReviewsService {
  private pageId = '547944738398163'; // Remplacez par l'ID de votre page Facebook
  private accessToken = 'VOTRE_ACCESS_TOKEN'; // Remplacez par votre token
  private apiUrl = `https://graph.facebook.com/v15.0/${this.pageId}/ratings?fields=reviewer{name,picture},rating,review_text,created_time&access_token=${this.accessToken}`;

  constructor(private http: HttpClient) {}

  getReviews(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
