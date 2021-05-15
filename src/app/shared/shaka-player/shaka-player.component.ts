import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

declare let shaka: any;
@Component({
  selector: 'app-shaka-player',
  templateUrl: './shaka-player.component.html',
  styleUrls: ['./shaka-player.component.css'],
})
export class ShakaPlayerComponent implements AfterViewInit {
  @ViewChild('videoPlayer') videoElementRef: ElementRef | undefined;
  @ViewChild('videoContainer') videoContainerRef: ElementRef | undefined;

  videoElement: HTMLVideoElement | undefined;
  videoContainerElement: HTMLDivElement | undefined;
  player: any;

  constructor() {}

  ngAfterViewInit(): void {
    shaka.polyfill.installAll();
    if (shaka.Player.isBrowserSupported()) {
      this.videoElement = this.videoElementRef?.nativeElement;
      this.videoContainerElement = this.videoContainerRef?.nativeElement;
      this.initPlayer();
    } else {
      console.error('Browser not supported!');
    }
  }

  private initPlayer() {
    this.player = new shaka.Player(this.videoElement);

    const ui = new shaka.ui.Overlay(
      this.player,
      this.videoContainerElement,
      this.videoElement
    );

    this.player
      .load('http://www.bok.net/dash/tears_of_steel/cleartext/stream.mpd')
      .then(() => {
        this.videoElement?.play();
      })
      .catch((e: any) => {
        console.error(e);
      });
  }
}
