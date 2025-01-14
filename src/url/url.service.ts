import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Url } from './url.entity';
import * as crypto from 'crypto';

@Injectable()
export class UrlService {
  constructor(
    @InjectRepository(Url)
    private readonly urlRepository: Repository<Url>,
  ) {}

  async shorten(originalUrl: string): Promise<Url> {
    const shortUrl = this.generateShortUrl();
    const newUrl = this.urlRepository.create({
      originalUrl,
      shortUrl,
    });

    return await this.urlRepository.save(newUrl);
  }

  private generateShortUrl(): string {
    return crypto.randomBytes(3).toString('hex');
  }

  async getInfo(shortUrl: string): Promise<Url | undefined> {
    return await this.urlRepository.findOne({ where: { shortUrl } });
  }

  async redirectToOriginalUrl(shortUrl: string): Promise<string | undefined> {
    const url = await this.urlRepository.findOne({ where: { shortUrl } });

    if (url) {
      url.clickCount += 1;
      await this.urlRepository.save(url);
      return url.originalUrl;
    }

    return undefined;
  }
}
