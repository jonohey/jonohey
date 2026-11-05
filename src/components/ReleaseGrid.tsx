"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { SpotifyEmbed } from "@/components/SpotifyEmbed";
import type { CoverArt } from "@/lib/cover-art";
import type { Release } from "@/lib/music";

export type ReleaseWithCover = { release: Release; cover: CoverArt };

const linkClass =
  "text-accent underline decoration-edge underline-offset-4 transition-colors hover:decoration-accent";

const navButtonClass =
  "absolute top-1/2 z-10 flex size-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-edge bg-panel/80 text-2xl leading-none text-paper transition-colors hover:border-accent hover:text-accent";

function ExternalLink({
  href,
  label,
  title,
  suffix,
}: {
  href: string;
  label: string;
  title: string;
  suffix: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={linkClass}
    >
      {label}
      <span className="sr-only">
        {" "}
        of {title} {suffix} (opens in a new tab)
      </span>
    </a>
  );
}

function PurchaseLinks({ release, cover }: ReleaseWithCover) {
  if (!cover.printsUrl && !cover.sheetMusicUrl) return null;
  return (
    <p className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-sm">
      {cover.printsUrl && (
        <ExternalLink
          href={cover.printsUrl}
          label="Prints"
          title={release.title}
          suffix="on Redbubble"
        />
      )}
      {cover.sheetMusicUrl && (
        <ExternalLink
          href={cover.sheetMusicUrl}
          label="Sheet music"
          title={release.title}
          suffix="on the Spotify store"
        />
      )}
    </p>
  );
}

export function ReleaseGrid({ items }: { items: ReleaseWithCover[] }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState<number | null>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const selected = index === null ? null : items[index];

  const step = (delta: number) =>
    setIndex((i) =>
      i === null ? i : (i + delta + items.length) % items.length,
    );

  useEffect(() => {
    const el = dialog.current;
    if (!selected || !el || el.open) return;
    el.showModal();
    // showModal() focuses the first control (the Prints link), which draws a
    // focus ring on tap. Focus the dialog itself; Tab still reaches the links.
    el.focus();
  }, [selected]);

  return (
    <>
      <ul className="grid gap-x-8 gap-y-14 md:grid-cols-2">
        {items.map((item, i) => {
          const { release, cover } = item;
          return (
            <li key={release.spotifyId}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`View ${release.title} cover artwork full screen`}
                className="block w-3/5 cursor-zoom-in overflow-hidden rounded-xl border border-line"
              >
                <Image
                  src={cover.image}
                  alt={`Cover artwork for ${release.title} by Jono Hey`}
                  placeholder="blur"
                  sizes="(min-width: 1024px) 290px, (min-width: 768px) 27vw, 60vw"
                  className="aspect-square w-full object-cover"
                />
              </button>
              <div className="mt-3">
                <SpotifyEmbed
                  id={release.spotifyId}
                  title={release.title}
                  highlight={release.latest}
                  height={152}
                />
              </div>
              <h3 className="mt-3 font-medium text-paper">{release.title}</h3>
              <p className="mt-1 text-sm text-muted">
                {release.type} · {release.year} · {cover.location}
              </p>
              <div className="mt-2 [&>p]:justify-start">
                <PurchaseLinks {...item} />
              </div>
            </li>
          );
        })}
      </ul>
      <dialog
        ref={dialog}
        tabIndex={-1}
        aria-label={selected ? `${selected.release.title} cover artwork` : undefined}
        onClose={() => setIndex(null)}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") step(-1);
          else if (e.key === "ArrowRight") step(1);
        }}
        onTouchStart={(e) => {
          const t = e.touches[0];
          touchStart.current = { x: t.clientX, y: t.clientY };
        }}
        onTouchEnd={(e) => {
          const start = touchStart.current;
          touchStart.current = null;
          if (!start) return;
          const t = e.changedTouches[0];
          const dx = t.clientX - start.x;
          const dy = t.clientY - start.y;
          if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
            step(dx < 0 ? 1 : -1);
          }
        }}
        onClick={(e) => {
          if (!(e.target as HTMLElement).closest("img, a, button")) e.currentTarget.close();
        }}
        className="fixed inset-0 m-0 h-dvh max-h-none w-dvw max-w-none cursor-zoom-out bg-ink p-0 outline-none! text-paper backdrop:bg-transparent"
      >
        {selected && (
          <div className="flex h-full touch-pan-y flex-col items-center justify-center gap-4 sm:p-8">
            <Image
              key={selected.release.spotifyId}
              src={selected.cover.image}
              alt={`Cover artwork for ${selected.release.title} by Jono Hey`}
              quality={90}
              sizes="(min-width: 640px) 85vh, 100vw"
              className="aspect-square max-h-[80dvh] w-full cursor-default object-contain sm:w-auto sm:max-w-full"
            />
            <p aria-live="polite" className="px-4 text-center text-sm text-muted">
              {selected.release.title} · {selected.cover.location}
            </p>
            <PurchaseLinks {...selected} />
          </div>
        )}
        {items.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous cover"
              className={navButtonClass + " left-2 sm:left-4"}
            >
              <span aria-hidden>‹</span>
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next cover"
              className={navButtonClass + " right-2 sm:right-4"}
            >
              <span aria-hidden>›</span>
            </button>
          </>
        )}
        <button
          type="button"
          onClick={() => dialog.current?.close()}
          aria-label="Close"
          className="absolute top-4 right-4 flex size-11 cursor-pointer items-center justify-center rounded-full border border-edge bg-panel text-xl text-paper transition-colors hover:border-accent hover:text-accent"
        >
          <span aria-hidden>✕</span>
        </button>
      </dialog>
    </>
  );
}
