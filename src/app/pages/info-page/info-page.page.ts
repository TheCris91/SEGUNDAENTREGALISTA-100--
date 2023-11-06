import { Component, OnInit } from '@angular/core';
import type { Animation } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';



@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.page.html',
  styleUrls: ['./info-page.page.scss'],
})
export class InfoPagePage implements OnInit {

  private animation!: Animation;

  constructor(private animationCtrl: AnimationController,
              ) { }

  ngOnInit() {
  }

  play() {
    this.animation.play();
  }

  stop() {
    this.animation.stop();
  }
  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(document.querySelectorAll("#Disponible",))
      .duration(1500)
      .iterations(Infinity)
      .direction('alternate')
      .fromTo('background', 'blue', 'var(--background)');
  }
}
