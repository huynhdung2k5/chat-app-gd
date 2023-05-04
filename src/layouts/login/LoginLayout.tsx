// @mui
import { Typography, Stack } from '@mui/material';
// components
import Logo from '../../components/logo';
import Image from '../../components/image';
//
import { StyledRoot, StyledSectionBg, StyledSection, StyledContent } from './styles';

// ----------------------------------------------------------------------

type Props = {
  title?: string;
  illustration?: string;
  children: React.ReactNode;
};

export default function LoginLayout({ children, illustration, title }: Props) {
  return (
    <StyledRoot>
      <Logo
        sx={{
          zIndex: 9,
          position: 'absolute',
          mt: { xs: 1.5, md: 5 },
          ml: { xs: 2, md: 5 },
          width: 100,
          height: 'auto',
        }}
        src="/logo/logo_full.png"
      />

      <StyledSection>
        <Typography
          variant="h2"
          fontWeight={900}
          color="secondary.main"
          sx={{
            mb: 3,
          }}
        >
          GD VIỆT NAM
        </Typography>

        <Typography
          variant="h5"
          fontWeight={900}
          sx={{
            mb: 5,
            px: 5,
            py: 1,
            borderRadius: 5,
            maxWidth: 480,
            textAlign: 'center',
            color: 'white',
            bgcolor: 'warning.main',
          }}
        >
          {title || 'PHẦN MỀM CHAT NỘI BỘ GD VIỆT NAM'}
        </Typography>

        <Image
          disabledEffect
          visibleByDefault
          alt="auth"
          src={illustration || '/assets/illustrations/illustration_login_background.png'}
          sx={{ maxWidth: 720 }}
        />

        <StyledSectionBg />
      </StyledSection>

      <StyledContent>
        <Stack sx={{ width: 1 }}> {children} </Stack>
      </StyledContent>

      <Typography
        variant="subtitle1"
        sx={{
          left: 15,
          bottom: 9,
          zIndex: 9,
          position: 'absolute',
        }}
      >
        Bản quyền GD Việt Nam © 2023
      </Typography>
    </StyledRoot>
  );
}
