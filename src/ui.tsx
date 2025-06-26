import { Slider } from './components/ui/slider';

export const UI = () => {
  return (
    <main className="h-full flex items-center justify-center container">
      <div className="w-full md:max-w-2xl">
        <Slider defaultValue={[33]} max={100} step={1} />
      </div>
    </main>
  );
};
