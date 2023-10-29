import { HELLO_WORLD } from '@theomer77/react-transition-switch';

const App = () => {
  return (
    <div
      className='flex min-h-screen w-full flex-col items-center justify-center
bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100'
    >
      <h1 className='mb-4 text-5xl font-bold'>App</h1>
      {HELLO_WORLD}
    </div>
  );
};

export default App;
