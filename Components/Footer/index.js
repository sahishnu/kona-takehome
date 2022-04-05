import clsx from 'clsx';

export default function Footer() {
  return (
    <footer
      className={clsx(
        'w-full',
        'border-t',
        'border-gray5',
        'bg-gray2',
        'py-4',
        'px-8',
        'flex',
        'flex-row',
        'items-center',
        'justify-center'
      )}
    >
      <div
        className={clsx(
          'w-full',
          'max-w-[600px]',
          'flex',
          'justify-between',
          'items-center',
          'text-gray9'
        )}
      >
        <p className={clsx('font-serif')}>Empathy is a Habit.</p>
        <p className={clsx('text-sm', 'text-gray9')}>
          1.01<sup>365</sup> = 37.8
        </p>
      </div>
    </footer>
  );
}
