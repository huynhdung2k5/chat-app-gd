import { forwardRef } from 'react';
// next
import NextLink from 'next/link';
// @mui
import { Box, Link, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

export interface LogoProps extends BoxProps {
  disabledLink?: boolean;
  src?: string;
}

const Logo = forwardRef<HTMLDivElement, LogoProps>(({ disabledLink = false, src, sx }, ref) => {
  const logo = (
    <Box
      ref={ref}
      component="img"
      src={src || '/logo/logo_single.png'}
      sx={{ height: 40, width: 40, cursor: 'pointer', ...sx }}
    />
  );

  if (disabledLink) {
    return logo;
  }

  return (
    <Link component={NextLink} href="https://gdvietnam.com" sx={{ display: 'contents' }}>
      {logo}
    </Link>
  );
});

export default Logo;
