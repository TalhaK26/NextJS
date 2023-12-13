// Add global styles to your application by navigating to /app/layout.tsx and importing the global.css file:
import '@/app/ui/global.css';
// Fonts
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
