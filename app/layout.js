import './globals.scss';

export const metadata = {
  title: 'Mercy Yakubu — Frontend Developer',
  description: 'I build fast, responsive websites from Figma designs. Specializing in React & Next.js.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}