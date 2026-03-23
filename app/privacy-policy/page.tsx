export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-5 py-20" style={{ fontFamily: "var(--font-body)" }}>
      <h1
        className="text-3xl font-black text-[#0d0d1a] mb-2"
        style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
      >
        Privacy Policy
      </h1>
      <p className="text-sm text-[#0d0d1a]/40 mb-10">Last updated: March 2026</p>

      {[
        {
          title: "1. Information We Collect",
          body: "XOQUE collects only what is necessary to provide the service — your account information (name, email), content you post in real time, and basic usage data. We do not collect browsing history, contacts, or any data unrelated to the app.",
        },
        {
          title: "2. How We Use Your Information",
          body: "Your data is used solely to operate XOQUE — showing your posts to your followers, enabling Co-Create features, and improving app performance. We do not sell your data to advertisers or third parties.",
        },
        {
          title: "3. Real-Time Content",
          body: "All posts on XOQUE are captured and shared in real time. We do not store drafts or gallery uploads because we do not accept them. Once a post is deleted by you, it is removed from our servers within 24 hours.",
        },
        {
          title: "4. Data Sharing",
          body: "We do not share your personal data with third parties except where required by law or to operate essential infrastructure (e.g., cloud hosting). Any service providers we work with are bound by strict data processing agreements.",
        },
        {
          title: "5. Your Rights",
          body: "You have the right to access, correct, or delete your personal data at any time from within the app settings. You may also request a full export of your data by contacting us at privacy@xoque.app.",
        },
        {
          title: "6. Security",
          body: "We use industry-standard encryption for data in transit and at rest. No system is perfectly secure, but we take reasonable measures to protect your information.",
        },
        {
          title: "7. Contact",
          body: "Questions about this policy? Reach us at privacy@xoque.app. We aim to respond within 48 hours.",
        },
      ].map((section) => (
        <section key={section.title} className="mb-8">
          <h2
            className="text-lg font-bold text-[#0d0d1a] mb-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {section.title}
          </h2>
          <p className="text-[15px] text-[#0d0d1a]/65 leading-relaxed">{section.body}</p>
        </section>
      ))}
    </main>
  );
}