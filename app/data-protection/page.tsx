import LegalPage from "@/components/LegalPage";
import { C } from "@/lib/pageUtils";

export default function DataProtectionPage() {
  return (
    <LegalPage
      badge="Legal"
      title="Data Protection"
      subtitle="How we protect your data — technically, operationally, and legally."
      updated="March 1, 2026"
      accentColor={C.purple}
      sections={[
        { title: "Our approach", content: "We treat data minimisation as a design principle, not a compliance checkbox. We collect only what we need to operate xoque, and every piece of data has a specific documented purpose." },
        { title: "GDPR compliance", content: ["If you're in the European Economic Area, you have rights under the GDPR:", "The right to access your personal data.", "The right to rectification of inaccurate data.", "The right to erasure (the 'right to be forgotten').", "The right to data portability.", "The right to object to processing.", "To exercise any of these rights, contact privacy@xoque.app."] },
        { title: "Technical safeguards", content: ["All data is encrypted in transit using TLS 1.3.", "All data at rest is encrypted using AES-256.", "We use strict access controls — only engineers who need access for a specific purpose can access data, and all access is logged and audited quarterly."] },
        { title: "Data processors", content: "We work with a limited number of sub-processors (hosting, analytics). All are GDPR-compliant and bound by Data Processing Agreements. We do not use sub-processors in jurisdictions with inadequate data protection frameworks." },
        { title: "Data retention", content: "Active account data is retained for the lifetime of your account. Deleted account data is fully purged within 30 days (60 days from backup snapshots). Anonymised analytics data may be retained indefinitely as it cannot be linked to individuals." },
        { title: "Breach notification", content: "In the event of a data breach affecting personal data, we will notify relevant supervisory authorities within 72 hours of becoming aware, as required by GDPR. Affected users will be notified without undue delay." },
        { title: "Data Protection Officer", content: "Our Data Protection Officer can be reached at dpo@xoque.app. They oversee our data protection strategy and ensure compliance with applicable data protection laws." },
      ]}
    />
  );
}