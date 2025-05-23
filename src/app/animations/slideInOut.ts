import { animate, style, state,  transition, trigger } from '@angular/animations';

/**
 * Animation zum Ein- und Ausblenden von Elementen von rechts nach links.
 * Wird z. B. genutzt, um ein Element von rechts hereinzuschieben und wieder hinauszuschieben.
 */
export const slideInOutRight = trigger('slideInOutRight', [
  state('in', style({ opacity: 1, transform: 'translateX(0)' })),
  state('out', style({ opacity: 0, transform: 'translateX(100vw)' })),
  transition('out => in', [
    animate('800ms 200ms cubic-bezier(0.25, 0.8, 0.25, 1)')
  ]),
  transition('in => out', [
    animate('200ms ease-in')
  ])
]);
/**
 * Animation zum Ein- und Ausblenden von Elementen von links nach rechts.
 * Spiegelbildlich zur slideInOutRight-Animation.
 */
export const slideInOutLeft = trigger('slideInOutLeft', [
  state('in', style({ opacity: 1, transform: 'translateX(0)' })),
  state('out', style({ opacity: 0, transform: 'translateX(-100vw)' })),
  transition('out => in', [
    animate('800ms 200ms cubic-bezier(0.25, 0.8, 0.25, 1)')
  ]),
  transition('in => out', [
    animate('200ms ease-in')
  ])
]);

/**
 * Animation für ein Menü, das von rechts in die Ansicht geschoben wird.
 * Hat eine besonders lange Einblendzeit für einen weicheren Effekt.
 */
export const slideInOutMenu = trigger('slideInOutMenu', [
  transition(':enter', [
    style({ transform: 'translateX(100%)', opacity: 0 }),
    animate('300ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
  ]),
  transition(':leave', [
    animate('200ms ease-in', style({ transform: 'translateX(100%)', opacity: 0 }))
  ])
]);

/**
 * Animation zur Steuerung des Body-Overflow-Verhaltens bei Overlay-Effekten.
 * Achtung: Diese Animation verändert nicht direkt CSS-Eigenschaften,
 * sondern dient als Trigger für Logik in `ngOnInit`.
 */
export const bodyOverflowAnimation = trigger('bodyOverflow', [
  transition(':enter', [
    animate('400ms ease-in', style({
      // Overflow wird außerhalb der Animation im Code gesetzt
    }))
  ]),
  transition(':leave', [
    animate('400ms ease-out', style({
      // Overflow wird außerhalb der Animation im Code zurückgesetzt
    }))
  ])
]);