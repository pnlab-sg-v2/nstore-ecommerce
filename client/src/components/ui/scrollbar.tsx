import cn from 'classnames';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import type { PartialOptions } from 'overlayscrollbars';
import 'overlayscrollbars/overlayscrollbars.css';

type ScrollbarProps = {
  options?: PartialOptions;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
};

const Scrollbar: React.FC<ScrollbarProps> = ({
  options,
  className,
  style,
  children,
  ...props
}) => {
  return (
    <OverlayScrollbarsComponent
      options={{
        scrollbars: {
          autoHide: 'scroll',
        },
        ...options,
      }}
      style={style}
      className={cn('os-theme-thin-dark', className)}
      {...props}
    >
      {children}
    </OverlayScrollbarsComponent>
  );
};

export default Scrollbar;
