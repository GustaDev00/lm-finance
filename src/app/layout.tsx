"use client";

import { Suspense, type ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { fontNames } from "@/styles/fonts";
import { StyledComponentsRegistry } from "@/lib/registry";
import { theme } from "@/styles/theme";
import { GlobalStyles } from "@/styles/global";
import { GSAPInitializer } from "@/components/atoms/gsap-initializer";

import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cards";

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>): ReactNode => {
  return (
    <html lang="en">
      <body className={fontNames}>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <GSAPInitializer />
            <main>
              <Suspense>{children}</Suspense>
            </main>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
