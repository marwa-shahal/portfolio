'use client'

import { MountProvider } from '@/contexts/MountContext'
import { NavigationProvider } from '@/contexts/NavigationContext'
import { ProgressBarProvider } from '@/contexts/ProgressBarContext'
import { RootBackgroundProvider } from '@/contexts/RootBackgroundContext'
import { ThemeProvider } from '@/contexts/ThemeContext'

const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <ProgressBarProvider>
      <MountProvider>
        <NavigationProvider>
          <ThemeProvider defaultDark>
            <RootBackgroundProvider>{children}</RootBackgroundProvider>
          </ThemeProvider>
        </NavigationProvider>
      </MountProvider>
    </ProgressBarProvider>
  )
}

export default Providers
