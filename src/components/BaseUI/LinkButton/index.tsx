import React from 'react';
import { Link } from 'react-router-dom';

import Button, {
  ButtonProps,
} from '@vkontakte/vkui/dist/components/Button/Button';

interface LinkButtonProps extends ButtonProps {
  to: string;
  size?: 'm' | 'l' | 'xl';
  children: React.ReactNode;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  to,
  size = 'm',
  mode = 'primary',
  style,
  children,
}: LinkButtonProps) => {
  return (
    <Link
      to={to}
      style={{ textDecoration: 'none', ...style }}
    >
      <Button size="m" mode={mode}>
        {children}
      </Button>
    </Link>
  );
};

export default LinkButton;
