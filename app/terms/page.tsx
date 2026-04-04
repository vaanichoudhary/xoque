import LegalPage from "@/components/LegalPage";

export default function TermsPage() {
  return (
    <LegalPage
      badge="Legal"
      title="Terms of Service"
      subtitle="Plain language. No gotchas. Here's the deal."
      updated="March 1, 2026"
      sections={[
        {
          title: "Accepting these terms",
          content: "By creating an xoque account, you agree to these Terms of Service. If you don't agree, please don't use xoque. You must be at least 16 years old to create an account.",
        },
        {
          title: "Your account",
          content: "You're responsible for everything that happens under your account. Use a real phone number. Don't share your account. Don't impersonate anyone else. Your username can be whatever you like, but we reserve the right to reclaim usernames that violate our community guidelines.",
        },
        {
          title: "Your content",
          content: "You own the content you post on xoque. By posting, you grant xoque a limited, non-exclusive license to display that content to the people you've chosen to share it with. We don't use your content for advertising. We don't train AI models on your content.",
        },
        {
          title: "What you can't do",
          content: "Post AI-generated content of any kind. Upload content from your gallery (live-only). Harass, threaten, or dox other users. Create fake accounts or impersonate others. Attempt to reverse-engineer or exploit the platform. Violate any applicable laws or regulations.",
        },
        {
          title: "Termination",
          content: "You can delete your account at any time from Settings. We may suspend or terminate accounts that violate our guidelines, with or without notice, depending on severity. For serious violations (illegal content, harassment), termination is immediate.",
        },
        {
          title: "Disclaimers",
          content: "xoque is provided 'as is'. We do our best to keep it running smoothly, but we can't guarantee uninterrupted service. We are not liable for content posted by users, or for any damages arising from your use of the platform.",
        },
        {
          title: "Governing law",
          content: "These terms are governed by the laws of the State of Delaware, USA. Any disputes will be resolved through binding arbitration, not class action lawsuits.",
        },
      ]}
    />
  );
}