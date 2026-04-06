"use client";

import { useState } from "react";

// ── Types ──────────────────────────────────────────────────────────────────
interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tag: string;
  tagColor: string;
  featured?: boolean;
}

// ── Blog Data ─────────────────────────────────────────────────────────────
// To publish a new post: add an object to this array.
// Set featured: true on the one you want at the top.
const POSTS: BlogPost[] = [
  {
    slug: "introducing-xoque",
    title: "Why we built xoque — and what we actually believe",
    excerpt:
      "Social media broke something real. We're here to fix it — not with more features, but with fewer lies.",
    content: `
Social media started as a genuine idea: stay connected to people you care about.
Somewhere along the way it became a performance. A highlight reel. A race to appear more interesting than you are.

We didn't build xoque because we thought we could out-feature Instagram. We built it because we were tired.

Tired of curated feeds. Tired of infinite scroll designed to keep you locked in. Tired of AI-generated content flooding timelines pretending to be human.

So we made one rule: **be real**. No AI content. No gallery uploads. If you didn't capture it right now, it doesn't belong here.

That's it. That's the whole philosophy. Everything else — Co-Create, Que Cards, the chronological feed — flows from that one idea.

We're not naive. We know building something authentic in an attention economy is an uphill fight. But we think enough people are tired of the alternative to make it worth fighting for.

This is what xoque is. We hope it's what you've been waiting for.
    `,
    date: "April 2, 2026",
    readTime: "3 min read",
    tag: "Company",
    tagColor: "#c095e4",
    featured: true,
  },
  {
    slug: "co-create-update",
    title: "Co-Create just got a lot better",
    excerpt:
      "You told us how you actually use it. We listened. Here's what changed.",
    content: `
When we shipped Co-Create, we thought people would use it for big moments — concerts, protests, parties.

Turns out most of you use it for the small stuff. A shared meal. A walk. A Tuesday that somehow turned into a good day.

So we redesigned the UX around that insight. Inviting a friend into your post is now one tap. The stitching algorithm is smoother. And we fixed a bug where posts with more than 4 contributors would occasionally lose one perspective.

These aren't headline features. They're the kind of care that makes something feel solid.

More Co-Create updates are coming. Keep posting.
    `,
    date: "March 28, 2026",
    readTime: "2 min read",
    tag: "Update",
    tagColor: "#a8d8b0",
  },
  {
    slug: "no-ads-promise",
    title: "We will never serve you ads. Here's why that matters.",
    excerpt:
      "Ads aren't just annoying. They're the reason social media turned into what it is. We're opting out.",
    content: `
Every social platform you've ever used was free because you were the product.

Your attention was sold. Your emotions were A/B tested to maximize engagement. Your feed was ranked not to show you what was real, but to show you what kept you there longest.

We're not doing that.

xoque will run on a subscription. A small, fair amount. In exchange, we owe you only one thing: a product that works for you, not against you.

No advertiser will ever pay to appear in your feed. No algorithm will ever be tuned toward engagement at the expense of your mental health. No third-party will ever see your data.

This is the promise. We're putting it in writing.
    `,
    date: "March 15, 2026",
    readTime: "4 min read",
    tag: "Policy",
    tagColor: "#f9c8a0",
  },
  {
    slug: "que-cards-launch",
    title: "Que Cards: post a thought, not a performance",
    excerpt:
      "Not every moment is a photo. Sometimes it's just something you want to say — right now.",
    content: `
We've been obsessed with the camera as the primary way to share. But some moments don't have a shot.

Sometimes you're on a bus and you have a thought. Sometimes something small happens and you want your people to know. Sometimes a photo would feel like trying too hard.

Que Cards are for those moments. Plain text. A location if you want it. Posted instantly, no edits.

They're not stories. They're not tweets. They're just real-time thoughts from real people — which is somehow rare in 2026.

They're live now. Go use them for something small.
    `,
    date: "March 5, 2026",
    readTime: "2 min read",
    tag: "Feature",
    tagColor: "#b8d4f8",
  },
];

// ── Tag chip ───────────────────────────────────────────────────────────────
function TagChip({ label, color }: { label: string; color: string }) {
  return (
    <span
      className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-widest uppercase"
      style={{
        backgroundColor: color + "22",
        color: color === "#c095e4" ? "#7c3aed" : "#374151",
        border: `1px solid ${color}55`,
        fontFamily: "var(--font-mono)",
      }}
    >
      {label}
    </span>
  );
}

// ── Post Modal ─────────────────────────────────────────────────────────────
function PostModal({ post, onClose }: { post: BlogPost; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto py-16 px-4"
      style={{ background: "rgba(13,13,26,0.72)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl bg-white overflow-hidden"
        style={{
          border: "1px solid #f0eafa",
          boxShadow: "0 24px 64px rgba(0,0,0,0.18)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Color stripe */}
        <div
          className="h-1.5 w-full"
          style={{
            background: `linear-gradient(90deg, ${post.tagColor}cc, ${post.tagColor}33)`,
          }}
        />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-all"
          aria-label="Close"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="px-7 sm:px-10 py-8">
          {/* Meta */}
          <div className="flex items-center gap-3 mb-5">
            <TagChip label={post.tag} color={post.tagColor} />
            <span
              className="text-[11px] text-gray-400"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {post.date} · {post.readTime}
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-2xl sm:text-3xl font-black text-[#0d0d1a] leading-tight mb-7"
            style={{ fontFamily: "'Arimo', sans-serif", letterSpacing: "-0.03em" }}
          >
            {post.title}
          </h1>

          {/* Body */}
          <div
            className="space-y-4 text-gray-600 leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontSize: "15px" }}
          >
            {post.content.trim().split("\n\n").map((para, i) => {
              const parts = para.split(/\*\*(.*?)\*\*/g);
              return (
                <p key={i}>
                  {parts.map((part, j) =>
                    j % 2 === 1 ? (
                      <strong key={j} className="text-[#0d0d1a] font-bold">
                        {part}
                      </strong>
                    ) : (
                      part
                    )
                  )}
                </p>
              );
            })}
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
            <span
              className="text-[12px] text-gray-300 font-black"
              style={{ fontFamily: "'Arimo', sans-serif", letterSpacing: "-0.03em" }}
            >
              xoque
            </span>
            <button
              onClick={onClose}
              className="text-[12px] font-bold px-4 py-2 rounded-full active:scale-95 transition-all"
              style={{
                fontFamily: "var(--font-display)",
                background: "#0d0d1a",
                color: "white",
              }}
            >
              ← Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Featured Card ──────────────────────────────────────────────────────────
function FeaturedCard({ post, onClick }: { post: BlogPost; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group w-full text-left rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      style={{
        background: "white",
        border: "1px solid #f0eafa",
        boxShadow: "0 2px 20px rgba(192,149,228,0.1)",
      }}
    >
      <div
        className="h-1 w-full"
        style={{ background: "linear-gradient(90deg, #c095e4, #e8d5f8)" }}
      />
      <div className="p-7 sm:p-9">
        <div className="flex items-center gap-3 mb-4">
          <TagChip label={post.tag} color={post.tagColor} />
          <span
            className="text-[9px] font-bold tracking-[0.2em] uppercase text-gray-300"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            ✦ Featured
          </span>
        </div>

        <h2
          className="text-2xl sm:text-[1.85rem] font-black text-[#0d0d1a] leading-tight mb-3 group-hover:text-[#7c3aed] transition-colors duration-200"
          style={{ fontFamily: "'Arimo', sans-serif", letterSpacing: "-0.035em" }}
        >
          {post.title}
        </h2>

        <p
          className="text-gray-500 leading-relaxed mb-6 max-w-xl"
          style={{ fontFamily: "var(--font-body)", fontSize: "14px" }}
        >
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <span
            className="text-[11px] text-gray-400"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {post.date} · {post.readTime}
          </span>
          <span
            className="inline-flex items-center gap-1.5 text-[12px] font-bold text-[#7c3aed] group-hover:gap-3 transition-all duration-200"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Read →
          </span>
        </div>
      </div>
    </button>
  );
}

// ── Post Card ──────────────────────────────────────────────────────────────
function PostCard({ post, onClick }: { post: BlogPost; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group w-full text-left rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
      style={{
        background: "white",
        border: "1px solid #f0edf8",
        boxShadow: "0 1px 8px rgba(0,0,0,0.04)",
      }}
    >
      {/* Accent dot + tag */}
      <div className="flex items-center gap-2.5 mb-3">
        <span
          className="w-2 h-2 rounded-full flex-shrink-0"
          style={{ backgroundColor: post.tagColor }}
        />
        <TagChip label={post.tag} color={post.tagColor} />
      </div>

      <h3
        className="text-[1.05rem] font-black text-[#0d0d1a] leading-snug mb-2 group-hover:text-[#7c3aed] transition-colors duration-200"
        style={{ fontFamily: "'Arimo', sans-serif", letterSpacing: "-0.025em" }}
      >
        {post.title}
      </h3>

      <p
        className="text-gray-500 text-[13px] leading-relaxed mb-4 line-clamp-2"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {post.excerpt}
      </p>

      <div className="flex items-center justify-between">
        <span
          className="text-[11px] text-gray-400"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {post.date}
        </span>
        <span
          className="text-[11px] font-bold text-[#7c3aed] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Read →
        </span>
      </div>
    </button>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────
export default function BlogPage() {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const featured = POSTS.find((p) => p.featured);
  const rest = POSTS.filter((p) => !p.featured);
  const allTags = ["All", ...Array.from(new Set(POSTS.map((p) => p.tag)))];
  const filteredRest =
    filter === "All" ? rest : rest.filter((p) => p.tag === filter);
  const showFeatured = featured && (filter === "All" || filter === featured.tag);

  return (
    <>
      <main className="min-h-screen" style={{ backgroundColor: "#fdfcff" }}>

        {/* ── Hero ── */}
        <div
          className="relative overflow-hidden pt-28 pb-16 px-5 sm:px-8"
          style={{
            background: "linear-gradient(155deg, #fdf8ff 0%, #f3e8ff 55%, #fdfcff 100%)",
          }}
        >
          {/* Decorative blobs */}
          <div
            className="pointer-events-none absolute -top-20 -right-28 w-96 h-96 rounded-full opacity-25"
            style={{ background: "radial-gradient(circle, #c095e4, transparent 65%)" }}
          />
          <div
            className="pointer-events-none absolute bottom-0 -left-20 w-64 h-64 rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #a8d8b0, transparent 65%)" }}
          />

          <div className="relative max-w-3xl mx-auto">
            <p
              className="text-[10px] font-bold tracking-[0.22em] uppercase mb-3"
              style={{ fontFamily: "var(--font-mono)", color: "#c095e4" }}
            >
              ✦ From the team
            </p>
            <h1
              className="text-4xl sm:text-[3.2rem] font-black text-[#0d0d1a] leading-none mb-4"
              style={{ fontFamily: "'Arimo', sans-serif", letterSpacing: "-0.04em" }}
            >
              The xoque<br />
              <span style={{ color: "#c095e4" }}>journal.</span>
            </h1>
            <p
              className="text-gray-500 text-[15px] max-w-sm leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Updates, decisions, and honest thoughts from the people building xoque. No PR spin.
            </p>
          </div>
        </div>

        {/* ── Content ── */}
        <div className="max-w-3xl mx-auto px-5 sm:px-8 py-10">

          {/* Filter chips */}
          <div className="flex flex-wrap gap-2 mb-10">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className="px-3.5 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-200 active:scale-95"
                style={{
                  fontFamily: "var(--font-mono)",
                  background: filter === tag ? "#0d0d1a" : "white",
                  color: filter === tag ? "white" : "#9ca3af",
                  border: filter === tag ? "1px solid #0d0d1a" : "1px solid #e5e7eb",
                }}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Featured */}
          {showFeatured && (
            <div className="mb-5">
              <FeaturedCard post={featured!} onClick={() => setActivePost(featured!)} />
            </div>
          )}

          {/* Grid */}
          {filteredRest.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredRest.map((post) => (
                <PostCard key={post.slug} post={post} onClick={() => setActivePost(post)} />
              ))}
            </div>
          )}

          {/* Empty state */}
          {!showFeatured && filteredRest.length === 0 && (
            <div className="text-center py-20">
              <p
                className="text-gray-300 text-[12px] tracking-widest uppercase"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Nothing here yet.
              </p>
            </div>
          )}

          {/* Bottom */}
          <div className="mt-14 pt-8 border-t text-center" style={{ borderColor: "#f0eafa" }}>
            <p className="text-[11px] text-gray-300" style={{ fontFamily: "var(--font-mono)" }}>
              <span
                className="inline-block w-1.5 h-1.5 rounded-full mr-2 align-middle"
                style={{ backgroundColor: "#c095e4" }}
              />
              imperfect but real.
            </p>
          </div>
        </div>
      </main>

      {/* Modal */}
      {activePost && (
        <PostModal post={activePost} onClose={() => setActivePost(null)} />
      )}
    </>
  );
}