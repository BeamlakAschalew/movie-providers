import { Embed, Sourcerer } from '@/providers/base';
import { febBoxScraper } from '@/providers/embeds/febBox';
import { mixdropScraper } from '@/providers/embeds/mixdrop';
import { mp4uploadScraper } from '@/providers/embeds/mp4upload';
import { streamsbScraper } from '@/providers/embeds/streamsb';
import { upcloudScraper } from '@/providers/embeds/upcloud';
import { upstreamScraper } from '@/providers/embeds/upstream';
import { flixhqScraper } from '@/providers/sources/flixhq/index';
import { goMoviesScraper } from '@/providers/sources/gomovies/index';
import { kissAsianScraper } from '@/providers/sources/kissasian/index';
import { remotestreamScraper } from '@/providers/sources/remotestream';
import { superStreamScraper } from '@/providers/sources/superstream/index';
import { zoechipScraper } from '@/providers/sources/zoechip';

import { showBoxScraper } from './sources/showbox';

export function gatherAllSources(): Array<Sourcerer> {
  // all sources are gathered here
  return [
    flixhqScraper,
    remotestreamScraper,
    kissAsianScraper,
    superStreamScraper,
    goMoviesScraper,
    zoechipScraper,
    showBoxScraper,
  ];
}

export function gatherAllEmbeds(): Array<Embed> {
  // all embeds are gathered here
  return [upcloudScraper, mp4uploadScraper, streamsbScraper, upstreamScraper, febBoxScraper, mixdropScraper];
}
