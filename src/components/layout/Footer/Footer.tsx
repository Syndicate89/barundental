'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Youtube, Instagram, MapPin } from 'lucide-react';
import { CLINIC_INFO, NAV_ITEMS } from '@/lib/constants';
import { fadeInUp, viewportOnce } from '@/lib/animations';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            {/* CTA Banner */}
            <div className={styles.ctaBanner}>
                <div className="container">
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                    >
                        <span className={styles.ctaLabel}>Reservation</span>
                        <h2 className={styles.ctaTitle}>
                            지금 바로 예약하세요
                        </h2>
                        <div className={styles.ctaButtons}>
                            <a href={`tel:${CLINIC_INFO.phone}`} className={`${styles.ctaBtn} ${styles.ctaBtnPrimary}`}>
                                <Phone size={18} />
                                전화 예약
                            </a>
                            <a href={CLINIC_INFO.kakaoUrl} className={`${styles.ctaBtn} ${styles.ctaBtnSecondary}`}>
                                <MessageCircle size={18} />
                                카카오톡 상담
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Footer Content */}
            <div className={styles.footerContent}>
                <div className="container">
                    <div className={styles.footerInner}>
                        {/* Brand Column */}
                        <div className={styles.footerBrand}>
                            <div className={styles.footerLogo}>
                                <div className={styles.footerLogoIcon}>B</div>
                                <span className={styles.footerLogoText}>{CLINIC_INFO.name}</span>
                            </div>
                            <p className={styles.footerDesc}>
                                {CLINIC_INFO.slogan}
                            </p>
                            <div className={styles.footerSocial}>
                                <a href="#" className={styles.socialIcon} aria-label="YouTube">
                                    <Youtube size={18} />
                                </a>
                                <a href="#" className={styles.socialIcon} aria-label="Instagram">
                                    <Instagram size={18} />
                                </a>
                                <a href="#" className={styles.socialIcon} aria-label="Blog">
                                    <MapPin size={18} />
                                </a>
                            </div>
                        </div>

                        {/* Nav Columns */}
                        {NAV_ITEMS.slice(0, 3).map((item) => (
                            <div key={item.href} className={styles.footerColumn}>
                                <h4>{item.label}</h4>
                                <ul>
                                    {item.children?.map((child) => (
                                        <li key={child.href}>
                                            <Link href={child.href}>{child.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="container">
                <div className={styles.footerBottom}>
                    <div className={styles.footerInfo}>
                        {CLINIC_INFO.name} | 대표: {CLINIC_INFO.ceo} | 사업자등록번호: {CLINIC_INFO.businessNumber} | 주소: {CLINIC_INFO.address} | 대표전화: {CLINIC_INFO.phone}
                        <br />
                        © {new Date().getFullYear()} {CLINIC_INFO.nameEn}. All rights reserved.
                    </div>
                    <div className={styles.footerLinks}>
                        <Link href="/privacy">개인정보처리방침</Link>
                        <Link href="/terms">이용약관</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
