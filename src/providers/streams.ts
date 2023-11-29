import { Flags } from '@/main/targets';

export type StreamFile = {
  type: 'mp4';
  url: string;
  headers?: Record<string, string>;
};

export type Qualities = 'unknown' | '360' | '480' | '720' | '1080';

export type FileBasedStream = {
  type: 'file';
  flags: Flags[];
  qualities: Partial<Record<Qualities, StreamFile>>;
};

export type HlsBasedStream = {
  type: 'hls';
  flags: Flags[];
  playlist: string;
};

export type Stream = FileBasedStream | HlsBasedStream;
