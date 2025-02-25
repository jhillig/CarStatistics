import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Statistic1Component } from "./statistic1/statistic1.component";
import { Statistic2Component } from "./statistic2/statistic2.component";
import { Statistic3Component } from "./statistic3/statistic3.component";
import { MenueComponent } from "./menue/menue.component";
import { Statistic5Component } from "./statistic5/statistic5.component";
import { Statistic4Component } from "./statistic4/statistic4.component";



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Statistic1Component, Statistic2Component, Statistic3Component, MenueComponent, Statistic5Component, Statistic4Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CarStatistics';
}
