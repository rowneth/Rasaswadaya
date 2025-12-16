import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class EventsService {
  constructor(private readonly httpService: HttpService) {}

  // Example snippet for NestJS service
  async getRecommendations(city: string, interests: string[]) {
    const { data } = await this.httpService.axiosRef.post(
      'http://localhost:8000/recommendations/home',
      { city, interests }
    );
    return data;
  }
}
