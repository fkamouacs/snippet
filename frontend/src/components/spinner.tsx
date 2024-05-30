import { Icons } from './icons';

const SpinnerWithText = () => {
  return (
    <div className="flex items-center gap-2">
      <Icons.spinner className="mr-1 md:w-6 md:h-6 lg:w-8 lg:h-8 animate-spin" />
      <div className="md:text-base lg:text-lg ">Loading...</div>
    </div>
  );
};

export default SpinnerWithText;
