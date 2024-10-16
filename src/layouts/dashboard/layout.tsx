import type { Theme, SxProps, Breakpoint } from '@mui/material/styles';

import { useState } from 'react';

import { useTheme } from '@mui/material/styles';

import { Main } from './main';
import Footer from '../components/footer';
import Navbar from '../components/navigation';
import { LayoutSection } from '../core/layout-section';
import { HeaderSection } from '../core/header-section';



// ----------------------------------------------------------------------

export type DashboardLayoutProps = {
  sx?: SxProps<Theme>;
  children: React.ReactNode;
  header?: {
    sx?: SxProps<Theme>;
  };
};

export function DashboardLayout({ sx, children, header }: DashboardLayoutProps) {
  const theme = useTheme();
  const layoutQuery: Breakpoint = 'lg';

  return (
    <LayoutSection
      /** **************************************
       * Header
       *************************************** */
      headerSection={
        <HeaderSection
          layoutQuery={layoutQuery}
          slotProps={{
            container: {
              maxWidth: false,
              sx: { px: { [layoutQuery]: 5 } },
            },
          }}
          sx={header?.sx}
          slots={{
            topArea: (
              <Navbar />
            ),
          }}
        />
      }
      /** **************************************
       * Footer
       *************************************** */
      footerSection={<Footer />}
      /** **************************************
       * Style
       *************************************** */
      cssVars={{
        '--layout-nav-vertical-width': '300px',
        '--layout-dashboard-content-pt': theme.spacing(1),
        '--layout-dashboard-content-pb': theme.spacing(8),
        '--layout-dashboard-content-px': theme.spacing(5),
      }}
      // sx={{
      //   [`& .${layoutClasses.hasSidebar}`]: {
      //     [theme.breakpoints.up(layoutQuery)]: {
      //       pl: 'var(--layout-nav-vertical-width)',
      //     },
      //   },
      //   ...sx,
      //   m: 3
      // }}
    >
      <Main sx={{m: 3}}>{children}</Main>
    </LayoutSection>
  );
}
