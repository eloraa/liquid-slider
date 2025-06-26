import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { cn } from '../../lib/utils';
import { Glass } from './glass';

function Slider({ className, defaultValue, value, min = 0, max = 100, ...props }: React.ComponentProps<typeof SliderPrimitive.Root>) {
  const _values = React.useMemo(() => (Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max]), [value, defaultValue, min, max]);

  // will think about it later
  // // Refs for each thumb
  // const thumbRef = React.useRef<HTMLSpanElement | null>(null);

  // // Refs for velocity calculation
  // const prevValueRef = React.useRef<number | null>(null);
  // const prevTimeRef = React.useRef<number | null>(null);

  // // JS wobble animation based on velocity
  // const wobble = (thumb: HTMLElement | null, velocity: number) => {
  //   if (!thumb) return;
  //   let frame = 0;
  //   // Scale amplitude and duration based on velocity
  //   const amp = Math.min(1 + Math.abs(velocity) * 0.2, 2); // cap amplitude
  //   const duration = Math.max(30, 100 - Math.abs(velocity) * 10); // cap duration
  //   const keyframes = [
  //     { scaleX: 1, scaleY: 1 },
  //     { scaleX: 1 + 0.25 * amp, scaleY: 1 },
  //     { scaleX: 1 - 0.25 * amp, scaleY: 1 },
  //     { scaleX: 1 + 0.15 * amp, scaleY: 1},
  //     { scaleX: 1 - 0.05 * amp, scaleY: 1 },
  //     { scaleX: 1 + 0.05 * amp, scaleY: 1 },
  //     { scaleX: 1, scaleY: 1 },
  //   ];
  //   const animate = () => {
  //     const kf = keyframes[frame];
  //     thumb.style.transform = `scaleX(${kf.scaleX}) scaleY(${kf.scaleY})`;
  //     frame++;
  //     if (frame < keyframes.length) {
  //       setTimeout(animate, duration);
  //     }
  //   };
  //   animate();
  // };

  // const handleValueChange = (newValue: number[]) => {
  //   const now = Date.now();
  //   const prevValue = prevValueRef.current;
  //   const prevTime = prevTimeRef.current;
  //   let velocity = 0;
  //   if (prevValue !== null && prevTime !== null) {
  //     velocity = (newValue[0] - prevValue) / ((now - prevTime) || 1);
  //   }
  //   prevValueRef.current = newValue[0];
  //   prevTimeRef.current = now;
  //   if (thumbRef.current) wobble(thumbRef.current, velocity);
  // };

  // const handleValueCommit = () => {
  //   if (thumbRef.current) thumbRef.current.style.transform = '';
  // };

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        'relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col',
        className
      )}
      // onValueChange={handleValueChange}
      // onValueCommit={handleValueCommit}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={cn(
          'bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-4 md:data-[orientation=horizontal]:h-6 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5'
        )}
      >
        <SliderPrimitive.Range data-slot="slider-range" className={cn('bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full')} />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          className={cn('relative h-12 w-20 md:h-16 md:w-26 flex focus:outline-none focus-within:outline-none group focus:jelly-wobble-x focus-within:jelly-wobble-x')}
        >
          <span className="absolute bg-background inset-0 group-focus:opacity-0 transition-opacity opacity-100"></span>
          <Glass
            className={{
              root: 'rounded-full *:rounded-full absolute size-full group-focus:scale-125',
              tint: 'group-focus:bg-transparent transition-colors',
              effect: 'group-focus:backdrop-blur-[2px] transition-all',
              shine: 'group-focus:shadow-[inset_1px_1px_1px_0_rgba(57,144,220,0.75),_inset_-1px_-1px_1px_1px_rgba(255,255,255,0.75)]',
            }}
          />
        </SliderPrimitive.Thumb>
      ))}
    </SliderPrimitive.Root>
  );
}

export { Slider };
