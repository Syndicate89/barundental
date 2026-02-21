import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA/FloatingCTA";
import { CLINIC_INFO } from "@/lib/constants";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://barundental.co.kr"),
  title: {
    template: "%s | 더 바른 정성 치과",
    default: "더 바른 정성 치과 | 자연치아의 가치를 먼저 생각하는 진료",
  },
  description: "더 바른 정성 치과의원 — 자연치아의 가치를 먼저 생각하는, 원칙에 충실한 진료. 임플란트, 치아미백, 사랑니 발치, 치아보존치료 전문. 대표원장 김지한 (치의학 박사 / 통합치의학과 전문의)",
  keywords: [
    "치과", "임플란트", "치아미백", "사랑니발치", "신경치료",
    "더바른정성치과", "라미네이트", "올세라믹", "충치치료",
    "치주치료", "디지털임플란트", "무통마취",
  ],
  openGraph: {
    title: "더 바른 정성 치과 | The Barun Dental Clinic",
    description: "자연치아의 가치를 먼저 생각하는, 원칙에 충실한 진료",
    type: "website",
    locale: "ko_KR",
    siteName: "더 바른 정성 치과",
    url: "https://barundental.co.kr",
  },
  twitter: {
    card: "summary_large_image",
    title: "더 바른 정성 치과 | The Barun Dental Clinic",
    description: "자연치아의 가치를 먼저 생각하는, 원칙에 충실한 진료",
  },
  alternates: {
    canonical: "https://barundental.co.kr",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: CLINIC_INFO.name,
  alternateName: CLINIC_INFO.nameEn,
  description: CLINIC_INFO.slogan,
  telephone: CLINIC_INFO.phone,
  email: CLINIC_INFO.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: CLINIC_INFO.address,
    addressLocality: "서울특별시",
    addressCountry: "KR",
  },
  url: "https://barundental.co.kr",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:30",
      closes: "18:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:30",
      closes: "14:00",
    },
  ],
  medicalSpecialty: "Dentistry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={playfair.variable} suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
