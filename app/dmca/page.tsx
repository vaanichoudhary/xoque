import LegalPage from "@/components/LegalPage";

export default function DmcaPage() {
  return (
    <LegalPage
      badge="Legal"
      title="DMCA Policy"
      subtitle="Copyright matters. Here's how we handle it."
      updated="March 1, 2026"
      sections={[
        {
          title: "Our commitment",
          content: "xoque respects intellectual property rights and expects its users to do the same. We comply with the Digital Millennium Copyright Act (DMCA) and will respond promptly to valid copyright infringement notices.",
        },
        {
          title: "Filing a DMCA notice",
          content: "If you believe content on xoque infringes your copyright, send a written notice to dmca@xoque.app. Your notice must include: identification of the copyrighted work, identification of the infringing content and where it's located on xoque, your contact information, a statement that you have a good faith belief the use is not authorised, and a statement that the information in the notice is accurate, under penalty of perjury.",
        },
        {
          title: "What happens next",
          content: "We'll review your notice and, if valid, remove or disable access to the infringing content within 48 hours. We'll notify the user who posted the content. Repeat infringers will have their accounts terminated.",
        },
        {
          title: "Counter-notices",
          content: "If you believe your content was removed by mistake, you may file a counter-notice to dmca@xoque.app explaining why the content doesn't infringe. If we receive a valid counter-notice, we'll restore the content within 10-14 days unless the original complainant files a court action.",
        },
        {
          title: "False claims",
          content: "Filing a false DMCA notice is a serious matter. Under 17 U.S.C. § 512(f), you may be liable for damages if you knowingly misrepresent that content is infringing. We reserve the right to take action against bad-faith claims.",
        },
        {
          title: "Contact",
          content: "All DMCA notices and counter-notices should be sent to dmca@xoque.app. Please include 'DMCA Notice' in the subject line. We aim to acknowledge all notices within 24 hours.",
        },
      ]}
    />
  );
}