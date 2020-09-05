import {
    trigger,
    animate,
    transition,
    style,
    query, group
  } from '@angular/animations';
const slideFromBottomToTopAnimation = [
  query(':enter, :leave', style({ position: 'absolute', width:'100%' })
    , { optional: true }),
  group([
    query(':enter', [
      style({ top: '100%' }),
      animate('.5s ease', style({ top: '0' }))
    ], { optional: true }),
    query(':leave', [
      style({ top: '0' }),
      animate('.5s ease', style({ top: '-100%' }))
    ], { optional: true }),
  ])]

  const slideFromTopToBottomAnimation = [
    query(':enter, :leave', style({ position: 'absolute', width:'100%' })
      , { optional: true }),
    group([
      query(':enter', [
        style({ bottom: '100%' }),
        animate('.5s ease', style({ bottom: '0' }))
      ], { optional: true }),
      query(':leave', [
        style({ bottom: '0' }),
        animate('.5s ease', style({ bottom: '-100%' }))
      ], { optional: true }),
    ])]

// Fade Animation
export const fader = trigger('routerTransition', [
  /*transition('about => *', slideFromBottomToTopAnimation),
  transition('portfolio => *', slideFromBottomToTopAnimation),
  transition('resume => *', slideFromBottomToTopAnimation),
  transition('resume => *', slideFromBottomToTopAnimation),
  transition('services => *', slideFromBottomToTopAnimation),
  transition('contact => *', slideFromBottomToTopAnimation)*/
  transition(':increment', slideFromBottomToTopAnimation),
  transition(':decrement', slideFromTopToBottomAnimation)

  ])