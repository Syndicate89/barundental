import type { Metadata } from 'next';
import styles from '@/styles/legal.module.css';

export const metadata: Metadata = {
    title: '개인정보처리방침',
    description: '더 바른 정성 치과의원 개인정보처리방침',
};

export default function PrivacyPage() {
    return (
        <div className={styles.legalPage}>
            <div className="container">
                <h1 className={styles.legalTitle}>개인정보처리방침</h1>
                <p className={styles.legalDate}>시행일: 2025년 1월 1일</p>

                <div className={styles.legalContent}>
                    <section className={styles.legalSection}>
                        <h2>제1조 (개인정보의 처리 목적)</h2>
                        <p>더 바른 정성 치과의원(이하 &ldquo;병원&rdquo;)은 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
                        <ul>
                            <li>진료 예약 및 상담 서비스 제공</li>
                            <li>환자 본인 확인 및 진료 기록 관리</li>
                            <li>공지사항, 이벤트 등 정보 전달</li>
                            <li>서비스 개선을 위한 통계 분석</li>
                        </ul>
                    </section>

                    <section className={styles.legalSection}>
                        <h2>제2조 (개인정보의 처리 및 보유기간)</h2>
                        <p>병원은 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.</p>
                        <ul>
                            <li>온라인 상담 신청 정보: 상담 완료 후 1년</li>
                            <li>진료 기록: 의료법에 따라 10년</li>
                            <li>웹사이트 이용 기록: 3개월</li>
                        </ul>
                    </section>

                    <section className={styles.legalSection}>
                        <h2>제3조 (처리하는 개인정보의 항목)</h2>
                        <p>병원은 다음의 개인정보 항목을 처리하고 있습니다.</p>
                        <ul>
                            <li>필수항목: 이름, 연락처(휴대전화번호)</li>
                            <li>선택항목: 상담 희망 분야, 희망 내원일, 희망 시간대, 상담 내용</li>
                            <li>자동 수집 항목: IP 주소, 쿠키, 방문 일시, 서비스 이용 기록</li>
                        </ul>
                    </section>

                    <section className={styles.legalSection}>
                        <h2>제4조 (개인정보의 제3자 제공)</h2>
                        <p>병원은 정보주체의 개인정보를 제1조에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등의 경우에만 개인정보를 제3자에게 제공합니다.</p>
                    </section>

                    <section className={styles.legalSection}>
                        <h2>제5조 (개인정보의 파기)</h2>
                        <p>병원은 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.</p>
                        <ul>
                            <li>전자적 파일 형태: 복원이 불가능한 방법으로 영구 삭제</li>
                            <li>종이 문서: 분쇄기로 분쇄하거나 소각하여 파기</li>
                        </ul>
                    </section>

                    <section className={styles.legalSection}>
                        <h2>제6조 (정보주체의 권리·의무 및 행사방법)</h2>
                        <p>정보주체는 병원에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.</p>
                        <ul>
                            <li>개인정보 열람 요구</li>
                            <li>오류 등이 있을 경우 정정 요구</li>
                            <li>삭제 요구</li>
                            <li>처리 정지 요구</li>
                        </ul>
                    </section>

                    <section className={styles.legalSection}>
                        <h2>제7조 (개인정보의 안전성 확보 조치)</h2>
                        <p>병원은 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.</p>
                        <ul>
                            <li>관리적 조치: 내부관리계획 수립·시행, 정기적 직원 교육</li>
                            <li>기술적 조치: 개인정보처리시스템 등의 접근 권한 관리, 접근통제시스템 설치, 보안프로그램 설치</li>
                            <li>물리적 조치: 전산실, 자료보관실 등의 접근 통제</li>
                        </ul>
                    </section>

                    <section className={styles.legalSection}>
                        <h2>제8조 (개인정보 보호책임자)</h2>
                        <p>병원은 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</p>
                        <ul>
                            <li>개인정보 보호책임자: 김지한 (대표원장)</li>
                            <li>연락처: 02-0000-0000</li>
                            <li>이메일: info@barundental.co.kr</li>
                        </ul>
                    </section>

                    <section className={styles.legalSection}>
                        <h2>제9조 (개인정보처리방침의 변경)</h2>
                        <p>이 개인정보처리방침은 2025년 1월 1일부터 적용됩니다. 이전의 개인정보처리방침은 아래에서 확인하실 수 있습니다.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
