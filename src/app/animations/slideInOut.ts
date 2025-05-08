import { animate, style, transition, trigger } from '@angular/animations';

export const slideInOutRight = trigger('slideInOutRight', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(100vw)' }),
    animate(
      '1200ms 300ms cubic-bezier(0.25, 0.8, 0.25, 1)',
      style({ opacity: 1, transform: 'translateX(0)' })
    )
  ]),
  transition(':leave', [
    animate(
      '400ms ease-in',
      style({ opacity: 0, transform: 'translateX(100vw)' })
    )
  ])
]);

export const slideInOutLeft = trigger('slideInOutLeft', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(-100vw)' }),
    animate(
      '1200ms 300ms cubic-bezier(0.25, 0.8, 0.25, 1)',
      style({ opacity: 1, transform: 'translateX(0)' })
    )
  ]),
  transition(':leave', [
    animate(
      '400ms ease-in',
      style({ opacity: 0, transform: 'translateX(-100vw)' })
    )
  ])
]);

export const slideInOutMenu = 
  trigger('slideInOutMenu', [
    transition(':enter', [
      style({ transform: 'translateX(100%)', opacity: 0 }),
      animate('3000ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
    ]),
    transition(':leave', [
      animate('900ms ease-in', style({ transform: 'translateX(100%)', opacity: 0 }))
    ])
  ]);

  export const bodyOverflowAnimation = trigger('bodyOverflow', [
    // Transition wenn das Element erscheint
    transition(':enter', [
      // Overflow des Body auf 'hidden' setzen
      animate('300ms ease-in', style({
        // Hier keine Änderungen am Element selbst, sondern direkt im `ngOnInit` setzen
      }))
    ]),
    
    // Transition wenn das Element verschwindet
    transition(':leave', [
      // Wenn das Element verschwindet, Overflow auf 'visible' zurücksetzen
      animate('300ms ease-out', style({
        // Hier keine Änderungen am Element selbst, sondern direkt im `ngOnDestroy` setzen
      }))
    ])
  ]);