import { useRouteError, type ErrorResponse } from 'react-router-dom';

const errorMessages = {
  DEFAULT: 'Well, that was unexpected.',
  404: "I'm not sure what you were looking for, but it's not here.",
} as const;
type NonDefaultErrorMessage = keyof Omit<typeof errorMessages, 'DEFAULT'>;

const ErrorPage = () => {
  const { status, statusText } = useRouteError() as ErrorResponse;

  return (
    <div className='flex min-h-dvh flex-col items-center justify-center'>
      <h1 className='m-0 text-9xl font-extrabold leading-none tracking-tight text-danger-800 sm:text-[16rem] md:text-[12rem] lg:text-[16rem] dark:text-danger-200'>
        {status || 'Error'}
      </h1>
      <p className='m-0 text-center text-xl text-neutral-700 dark:text-neutral-300'>
        {errorMessages[status as NonDefaultErrorMessage] ||
          statusText ||
          errorMessages.DEFAULT}
      </p>
    </div>
  );
};

export default ErrorPage;
