import { Component } from '@angular/core';
import { ComponentAComponent, ComponentBComponent } from '@circular/components';

@Component({
  standalone: true,
  selector: 'circular-components-root',
  template: `<h1>Circular Components</h1>
    <circular-components-component-a />`,
  styleUrls: ['./app.component.scss'],
  imports: [ComponentAComponent, ComponentBComponent],
})
export class AppComponent {
  title = 'circular-components';
}
