'apos;use client'apos;

import * as React from 'apos;react'apos;
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'apos;next-themes'apos;

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
