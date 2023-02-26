import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ComponentBComponent } from '../component-b/component-b.component';

@Component({
  selector: 'circular-components-component-a',
  standalone: true,
  imports: [CommonModule, ComponentBComponent],
  template: `
    <p>component-a works! (from {{ location }})</p>
    <circular-components-component-b *ngIf="showComponentB">
      <circular-components-component-a
        [showComponentB]="false"
        location="ComponentB"
      />
    </circular-components-component-b>
  `,
  styleUrls: ['./component-a.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentAComponent {
  @Input() showComponentB = true;
  @Input() location = 'Parent';
}
