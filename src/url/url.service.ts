import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Url } from './url.entity';

@Injectable()
export class UrlService {
  constructor(
    @InjectRepository(Url)
    private readonly urlRepository: Repository<Url>,
  ) {}

  async shorten(originalUrl: string): Promise<Url> {
    const newUrl = this.urlRepository.create({
      originalUrl,
      shortUrl: originalUrl,
    });

    return await this.urlRepository.save(newUrl);
  }

  async getInfo(shortUrl: string): Promise<Url | undefined> {
    return await this.urlRepository.findOne({ where: { shortUrl } });
  }
}
