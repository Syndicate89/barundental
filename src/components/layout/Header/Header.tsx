'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import { NAV_ITEMS, CLINIC_INFO } from '@/lib/constants';
import styles from './Header.module.css';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show/hide header based on scroll direction
            if (currentScrollY > lastScrollY && currentScrollY > 200) {
                setIsHidden(true);
            } else {
                setIsHidden(false);
            }

            // Background change
            setIsScrolled(currentScrollY > 50);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileOpen]);

    return (
        <>
            <header
                className={`${styles.header} ${isScrolled ? styles.scrolled : ''} ${isHidden && !isMobileOpen ? styles.hidden : ''
                    }`}
            >
                <div className={styles.headerInner}>
                    {/* Logo */}
                    <Link href="/" className={styles.logo} onClick={() => setIsMobileOpen(false)}>
                        <div className={styles.logoIcon}>B</div>
                        <div className={styles.logoTextGroup}>
                            <span className={styles.logoText}>더 바른 정성 치과</span>
                            <span className={styles.logoSubText}>The Barun Dental Clinic</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className={styles.nav} aria-label="메인 메뉴">
                        {NAV_ITEMS.map((item) => (
                            <div key={item.href} className={styles.navItem}>
                                <Link href={item.href} className={styles.navLink}>
                                    {item.label}
                                </Link>
                                {item.children && (
                                    <div className={styles.dropdown}>
                                        <div className={styles.dropdownLinks}>
                                            {item.children.map((child) => (
                                                <Link key={child.href} href={child.href} className={styles.dropdownLink}>
                                                    {child.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* CTA */}
                    <a href={`tel:${CLINIC_INFO.phone}`} className={styles.ctaButton}>
                        <Phone size={14} />
                        예약문의
                    </a>

                    {/* Mobile Toggle */}
                    <button
                        className={`${styles.mobileToggle} ${isMobileOpen ? styles.active : ''}`}
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                        aria-label={isMobileOpen ? '메뉴 닫기' : '메뉴 열기'}
                        aria-expanded={isMobileOpen}
                    >
                        <span className={styles.toggleLine} />
                        <span className={styles.toggleLine} />
                        <span className={styles.toggleLine} />
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            <nav className={`${styles.mobileMenu} ${isMobileOpen ? styles.open : ''}`} aria-label="모바일 메뉴">
                {NAV_ITEMS.map((item) => (
                    <div key={item.href} className={styles.mobileNavItem}>
                        <Link
                            href={item.href}
                            className={styles.mobileNavLink}
                            onClick={() => setIsMobileOpen(false)}
                        >
                            {item.label}
                        </Link>
                        {item.children && (
                            <div className={styles.mobileSubLinks}>
                                {item.children.map((child) => (
                                    <Link
                                        key={child.href}
                                        href={child.href}
                                        className={styles.mobileSubLink}
                                        onClick={() => setIsMobileOpen(false)}
                                    >
                                        {child.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
                <div className={styles.mobileCta}>
                    <a href={`tel:${CLINIC_INFO.phone}`} className={styles.mobileCtaButton}>
                        <Phone size={18} />
                        전화 예약
                    </a>
                </div>
            </nav>
        </>
    );
}
