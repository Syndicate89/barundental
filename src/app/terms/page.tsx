import type { Metadata } from 'next';
import styles from '@/styles/legal.module.css';

export const metadata: Metadata = {
    title: '이용약관',
    description: '더 바른 정성 치과의원 웹사이트 이용약관',
};

export default function TermsPage() {
    return (
        <div className={styles.legalPage}>
            <div className="container">
                <h1 className={styles.legalTitle}>이용약관</h1>
                <p className={styles.legalDate}>시행일: 2025년 1월 1일</p>

                <div className={styles.legalContent}>
                    <section className={styles.legalSection}>
                        <h2>제1조 (목적)</h2>
                        <p>이 약관은 더 바른 정성 치과의원(이하 &ldquo;병원&rdquo;)이 운영하는 웹사이트(이하 &ldquo;사이트&rdquo;)에서 제공하는 서비스의 이용과 관련하여 병원과 이용자 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.</p>
                    </section>

                    <section className={styles.legalSection}>
                        <h2>제2조 (정의)</h2>
                        <ul>
                            <li>&ldquo;사이트&rdquo;란 병원이 서비스를 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 설정한 가상의 영업장을 말합니다.</li>
                            <li>&ldquo;이용자&rdquo;란 사이트에 접속하여 이 약관에 따라 사이트가 제공하는 서비스를 이용하는 자를 말합니다.</li>
                            <li>&ldquo;서비스&rdquo;란 병원 소개, 진료 정보 안내, 온라인 상담 신청 등 사이트를 통해 제공되는 일체의 서비스를 말합니다.</li>
                        </ul>
                    </section>

                    <section className={styles.legalSection}>
                        <h2>제3조 (약관의 효력 및 변경)</h2>
                        <ul>
                            <li>이 약관은 사이트에 공시함으로써 효력이 발생합니다.</li>
                            <li>병원은 관련 법령을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.</li>
                            <li>약관이 변경되는 경우 변경 사항을 시행일 7일 전부터 사이트에 공지합니다.</li>
                        </ul>
                    </section>

                    <section className={styles.legalSection}>
                        <h2>제4조 (서비스의 제공)</h2>
                        <p>병원은 다음과 같은 서비스를 제공합니다.</p>
                        <ul>
                            <li>병원 및 의료진 소개</li>
                            <li>진료 과목 및 치료 정보 안내</li>
                            <li>온라인 상담 신청</li>
                            <li>공지사항 및 치료 후기 게시</li>
                            <li>기타 병원이 정하는 서비스</li>
                        </ul>
                    </section>

                    <section className={styles.legalSection}>
                        <h2>제5조 (서비스의 중단)</h2>
                        <p>병원은 정보통신설비의 보수점검, 교체, 고장, 통신 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있으며, 이 경우 사이트에 공지합니다.</p>
                    </section>

                    <section className={styles.legalSection}>
                        <h2>제6조 (이용자의 의무)</h2>
                        <p>이용자는 다음 행위를 하여서는 안 됩니다.</p>
                        <ul>
                            <li>허위 정보의 등록</li>
                            <li>타인의 정보 도용</li>
                            <li>사이트에 게시된 정보의 무단 변경</li>
                            <li>병원이 금지한 정보의 송신 또는 게시</li>
                            <li>병원 및 제3자의 저작권 등 지적재산권 침해</li>
                            <li>병원 및 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
                        </ul>
                    </section>

                    <section className={styles.legalSection}>
                        <h2>제7조 (저작권의 귀속)</h2>
                        <p>사이트에 게시된 모든 콘텐츠(텍스트, 이미지, 영상 등)의 저작권은 병원에 귀속됩니다. 이용자는 병원의 사전 동의 없이 이를 상업적으로 이용할 수 없습니다.</p>
                    </section>

                    <section className={styles.legalSection}>
                        <h2>제8조 (면책 조항)</h2>
                        <ul>
                            <li>사이트에서 제공하는 정보는 일반적인 의료 정보로서, 개인의 진단이나 치료를 대체할 수 없습니다.</li>
                            <li>정확한 진단과 치료는 반드시 전문의와의 상담을 통해 이루어져야 합니다.</li>
                            <li>병원은 무료로 제공되는 서비스와 관련하여 관련 법령에 특별한 규정이 없는 한 책임을 지지 않습니다.</li>
                        </ul>
                    </section>

                    <section className={styles.legalSection}>
                        <h2>제9조 (분쟁 해결)</h2>
                        <p>병원과 이용자 간에 발생한 분쟁에 대하여는 대한민국 법을 적용하며, 병원의 소재지를 관할하는 법원을 관할 법원으로 합니다.</p>
                    </section>

                    <section className={styles.legalSection}>
                        <h2>부칙</h2>
                        <p>이 약관은 2025년 1월 1일부터 시행합니다.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
