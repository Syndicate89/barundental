'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Clock, MapPin, Send, User, Calendar, FileText } from 'lucide-react';
import PageHero from '@/components/layout/PageHero/PageHero';
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/animations';
import { CLINIC_INFO, CLINIC_HOURS } from '@/lib/constants';
import styles from '@/styles/subpage.module.css';
import formStyles from './consult.module.css';

export default function ConsultPage() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        treatment: '',
        preferredDate: '',
        preferredTime: '',
        message: '',
        agree: false,
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <>
            <PageHero label="Consultation" title="상담 & 예약" subtitle="편리한 방법으로 상담과 예약을 해 보세요"
                bgText="CONSULT" breadcrumbs={[{ label: '커뮤니티', href: '/community' }, { label: '상담 & 예약' }]} />

            <section className={styles.contentSection}>
                <div className="container">
                    <motion.div className={styles.introBlock} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                        <motion.span variants={fadeInUp} className={styles.introLabel}>Contact</motion.span>
                        <motion.h2 variants={fadeInUp} className={styles.introTitle}>상담 및 예약 방법</motion.h2>
                        <motion.p variants={fadeInUp} className={styles.introDesc}>전화, 카카오톡, 방문 등 편리한 방법으로 예약하실 수 있습니다</motion.p>
                    </motion.div>

                    <motion.div className={styles.featuresGrid} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                        {[
                            { icon: Phone, title: '전화 예약', desc: `${CLINIC_INFO.phone}로 전화하시면 친절하게 안내해 드립니다.`, action: `tel:${CLINIC_INFO.phone}`, btnText: '전화하기' },
                            { icon: MessageCircle, title: '카카오톡 상담', desc: '카카오톡으로 편리하게 상담하고 예약하실 수 있습니다.', action: CLINIC_INFO.kakaoUrl, btnText: '카카오 상담' },
                            { icon: MapPin, title: '방문 상담', desc: `${CLINIC_INFO.address}에 위치한 더 바른 정성 치과에 직접 방문하셔도 됩니다.`, action: '/clinic/visit', btnText: '위치 보기' },
                        ].map((item, i) => (
                            <motion.div key={i} variants={fadeInUp} className={styles.featureCard} style={{ textAlign: 'center' }}>
                                <div className={styles.featureIcon} style={{ margin: '0 auto var(--space-lg)' }}>
                                    <item.icon size={24} />
                                </div>
                                <h4 className={styles.featureTitle}>{item.title}</h4>
                                <p className={styles.featureDesc}>{item.desc}</p>
                                <a href={item.action} className={formStyles.contactBtn}>
                                    {item.btnText}
                                </a>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container">
                    <motion.div className={styles.introBlock} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                        <motion.span variants={fadeInUp} className={styles.introLabel}>Online Form</motion.span>
                        <motion.h2 variants={fadeInUp} className={styles.introTitle}>온라인 상담 신청</motion.h2>
                        <motion.p variants={fadeInUp} className={styles.introDesc}>아래 양식을 작성해 주시면 빠른 시일 내에 연락드리겠습니다</motion.p>
                    </motion.div>

                    <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className={formStyles.formWrapper}>
                        {submitted ? (
                            <div className={formStyles.successMessage}>
                                <div className={formStyles.successIcon}>
                                    <Send size={32} />
                                </div>
                                <h3>상담 신청이 완료되었습니다</h3>
                                <p>입력하신 연락처로 빠른 시일 내에 연락드리겠습니다.</p>
                                <button onClick={() => { setSubmitted(false); setFormData({ name: '', phone: '', treatment: '', preferredDate: '', preferredTime: '', message: '', agree: false }); }} className={formStyles.resetBtn}>
                                    새 상담 신청
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className={formStyles.form}>
                                <div className={formStyles.formGrid}>
                                    <div className={formStyles.formGroup}>
                                        <label htmlFor="name" className={formStyles.label}>
                                            <User size={14} />
                                            이름 <span className={formStyles.required}>*</span>
                                        </label>
                                        <input
                                            type="text" id="name" name="name"
                                            value={formData.name} onChange={handleChange}
                                            placeholder="홍길동"
                                            required className={formStyles.input}
                                        />
                                    </div>
                                    <div className={formStyles.formGroup}>
                                        <label htmlFor="phone" className={formStyles.label}>
                                            <Phone size={14} />
                                            연락처 <span className={formStyles.required}>*</span>
                                        </label>
                                        <input
                                            type="tel" id="phone" name="phone"
                                            value={formData.phone} onChange={handleChange}
                                            placeholder="010-0000-0000"
                                            required className={formStyles.input}
                                        />
                                    </div>
                                    <div className={formStyles.formGroup}>
                                        <label htmlFor="treatment" className={formStyles.label}>
                                            <FileText size={14} />
                                            상담 희망 분야
                                        </label>
                                        <select id="treatment" name="treatment" value={formData.treatment} onChange={handleChange} className={formStyles.select}>
                                            <option value="">선택해 주세요</option>
                                            <option value="implant">임플란트</option>
                                            <option value="whitening">치아미백</option>
                                            <option value="laminate">라미네이트</option>
                                            <option value="ceramic">올세라믹</option>
                                            <option value="wisdom">사랑니 발치</option>
                                            <option value="nerve">신경치료</option>
                                            <option value="cavity">충치치료</option>
                                            <option value="gum">치주치료</option>
                                            <option value="other">기타</option>
                                        </select>
                                    </div>
                                    <div className={formStyles.formGroup}>
                                        <label htmlFor="preferredDate" className={formStyles.label}>
                                            <Calendar size={14} />
                                            희망 내원일
                                        </label>
                                        <input
                                            type="date" id="preferredDate" name="preferredDate"
                                            value={formData.preferredDate} onChange={handleChange}
                                            className={formStyles.input}
                                        />
                                    </div>
                                    <div className={formStyles.formGroup}>
                                        <label htmlFor="preferredTime" className={formStyles.label}>
                                            <Clock size={14} />
                                            희망 시간대
                                        </label>
                                        <select id="preferredTime" name="preferredTime" value={formData.preferredTime} onChange={handleChange} className={formStyles.select}>
                                            <option value="">선택해 주세요</option>
                                            <option value="morning">오전 (09:30 ~ 12:00)</option>
                                            <option value="afternoon">오후 (14:00 ~ 16:00)</option>
                                            <option value="evening">저녁 (16:00 ~ 18:30)</option>
                                        </select>
                                    </div>
                                </div>
                                <div className={formStyles.formGroup}>
                                    <label htmlFor="message" className={formStyles.label}>
                                        <MessageCircle size={14} />
                                        상담 내용
                                    </label>
                                    <textarea
                                        id="message" name="message"
                                        value={formData.message} onChange={handleChange}
                                        placeholder="궁금하신 사항이나 증상을 자유롭게 작성해 주세요"
                                        rows={5} className={formStyles.textarea}
                                    />
                                </div>
                                <div className={formStyles.checkboxGroup}>
                                    <label className={formStyles.checkboxLabel}>
                                        <input
                                            type="checkbox" name="agree"
                                            checked={formData.agree} onChange={handleChange}
                                            required className={formStyles.checkbox}
                                        />
                                        <span>개인정보 수집 및 이용에 동의합니다 <span className={formStyles.required}>*</span></span>
                                    </label>
                                    <a href="/privacy" className={formStyles.privacyLink}>개인정보처리방침 보기</a>
                                </div>
                                <button type="submit" className={formStyles.submitBtn} disabled={!formData.agree}>
                                    <Send size={16} />
                                    상담 신청하기
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container" style={{ maxWidth: 600, margin: '0 auto' }}>
                    <motion.div className={styles.introBlock} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                        <motion.span variants={fadeInUp} className={styles.introLabel}>Hours</motion.span>
                        <motion.h2 variants={fadeInUp} className={styles.introTitle}>진료 시간 안내</motion.h2>
                    </motion.div>
                    <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportOnce}
                        style={{ background: 'var(--color-surface)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border-light)', overflow: 'hidden' }}>
                        {CLINIC_HOURS.map((item, i) => (
                            <div key={i} style={{
                                display: 'flex', justifyContent: 'space-between',
                                padding: 'var(--space-md) var(--space-xl)',
                                borderBottom: i < CLINIC_HOURS.length - 1 ? '1px solid var(--color-border-light)' : 'none',
                            }}>
                                <span style={{ fontWeight: 500, display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                                    <Clock size={14} color="var(--color-primary)" />{item.day}
                                </span>
                                <span style={{ color: item.hours === '휴진' ? 'var(--color-error)' : 'var(--color-primary)', fontWeight: 600 }}>
                                    {item.hours}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    );
}
