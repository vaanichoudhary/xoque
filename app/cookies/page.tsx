import LegalPage from "@/components/LegalPage";

export default function CookiesPage() {
  return (
    <LegalPage
      badge="Legal"
      title="Cookie Policy"
      subtitle="We use very few cookies. Here's exactly what they do."
      updated="March 1, 2026"
      sections={[
        {
          title: "What are cookies?",
          content: "Cookies are small files stored on your device by a website or app. They allow services to remember information about your session — like whether you're logged in.",
        },
        {
          title: "Cookies we use",
          content: "Session cookies: required to keep you logged in during your session. These are deleted when you close the app. Preference cookies: remember settings like notification preferences and display choices. Analytics cookies: anonymised, aggregated data on feature usage — no personally identifiable data. We do not use advertising or tracking cookies.",
        },
        {
          title: "Cookies we don't use",
          content: "We do not use third-party advertising cookies. We do not use cross-site tracking cookies. We do not share cookie data with advertisers or data brokers.",
        },
        {
          title: "Managing cookies",
          content: "You can clear cookies at any time through your device settings. Note that clearing session cookies will log you out of xoque. Most functionality works without preference cookies.",
        },
        {
          title: "Changes",
          content: "If we add new types of cookies that collect personal data, we'll notify you in-app and update this policy before the change takes effect.",
        },
      ]}
    />
  );
}