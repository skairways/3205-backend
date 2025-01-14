import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';

import { UrlService } from './url.service';
import { Url } from './url.entity';

@Controller('url')
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @Post('shorten')
  async shorten(@Body('originalUrl') originalUrl: string): Promise<Url> {
    if (!originalUrl) {
      throw new Error('Original URL is required');
    }
    return await this.urlService.shorten(originalUrl);
  }

  @Get('info/:shortUrl')
  async getInfo(@Param('shortUrl') shortUrl: string): Promise<Url> {
    const url = await this.urlService.getInfo(shortUrl);
    if (!url) {
      throw new NotFoundException('Short URL not found');
    }
    return url;
  }
}
