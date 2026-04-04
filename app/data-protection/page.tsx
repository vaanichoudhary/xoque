import LegalPage from "@/components/LegalPage";

export default function DataProtectionPage() {
  return (
    <LegalPage
      badge="Legal"
      title="Data Protection"
      subtitle="How we protect your data — technically and legally."
      updated="March 1, 2026"
      sections={[
        {
          title: "Our approach",
          content: "We treat data minimisation as a design principle, not a compliance checkbox. We collect only what we need to operate xoque. Every piece of data we collect has a specific, documented purpose.",
        },
        {
          title: "GDPR compliance",
          content: "If you're in the European Economic Area, you have rights under the General Data Protection Regulation (GDPR): the right to access your data, the right to rectification, the right to erasure ('right to be forgotten'), the right to portability, and the right to object to processing. To exercise any of these rights, contact privacy@xoque.app.",
        },
        {
          title: "Technical safeguards",
          content: "All data is encrypted in transit using TLS 1.3. All data at rest is encrypted using AES-256. We use strict access controls — only engineers who need access to data for a specific purpose can access it. Access is logged and audited quarterly.",
        },
        {
          title: "Data processors",
          content: "We work with a limited number of sub-processors (hosting, analytics). All sub-processors are GDPR-compliant and bound by Data Processing Agreements. We do not use sub-processors in jurisdictions with inadequate data protection frameworks.",
        },
        {
          title: "Data retention",
          content: "Active account data is retained for the lifetime of your account. Deleted account data is fully purged within 30 days (60 days from backup snapshots). Anonymised, aggregated analytics data may be retained indefinitely as it cannot be linked to individuals.",
        },
        {
          title: "Breach notification",
          content: "In the event of a data breach affecting personal data, we will notify relevant supervisory authorities within 72 hours of becoming aware, as required by GDPR. Affected users will be notified without undue delay.",
        },
        {
          title: "Data Protection Officer",
          content: "Our Data Protection Officer can be reached at dpo@xoque.app. They are responsible for overseeing our data protection strategy and ensuring compliance with data protection laws.",
        },
      ]}
    />
  );
}