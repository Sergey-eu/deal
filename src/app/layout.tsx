import type { Metadata } from "next";
import "./globals.scss";
import { ConfigProvider } from 'antd';
import StyledComponentsRegistry from '@/lib/AntdRegistry';

export const metadata: Metadata = {
  title: "Real Estate Deal ",
  description: "Property details with Ant Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#6b06ef',
              },
            }}
          >
            {children}
          </ConfigProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
