import { style, animate, animation, keyframes } from "@angular/animations";

// =========================
// Enum for referencing animations
// =========================
export enum AnimationTypesFor3d {
  Fade = "fade",
}

// =========================
// Fade
// =========================
export const fadeIn = animation([
  style({ transform: 'translateX(-400px)', }), // start state
  animate(
    "{{time}} ease-in-out",
  )
]);

export const fadeOut = animation([
  animate(
    "{{time}} ease-in-out",
    // style({ transform: 'translateX(300px)' })
  )
]);