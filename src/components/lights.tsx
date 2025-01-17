import { cn } from '@/utils/cn'

export const Lights: React.FC<{ className?: React.ReactNode }> = ({ className }) => (
  <div className={cn('w-full h-full overflow-hidden', className)}>
    <div
      className={'w-full h-full relative bottom-[-200px] '}
      style={{
        background:
          'conic-gradient(from 180deg at 50% 50%,var(--blue-500) 0deg,var(--purple-400) 180deg,var(--pink-400) 1turn)',
        filter: 'blur(75px)',
        opacity: '25%'
      }}
    />
  </div>
)