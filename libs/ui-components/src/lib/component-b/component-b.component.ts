import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'circular-components-component-b',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>component-b works!</p>
    <ng-content />`,
  styleUrls: ['./component-b.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentBComponent {}
