"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface TypingAnimationProps {
  text: string;
  textSecond: string;
  duration?: number;
  className?: string;
}

export default function TypingAnimation({
  text,
  textSecond,
  duration = 200,
  className,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [displayedTextSecond, setDisplayedTextSecond] = useState<string>("");
  const [i, setI] = useState<number>(0);

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prevState) => prevState + text.charAt(i));
        setDisplayedTextSecond((prevState) => prevState + textSecond.charAt(i));
        setI(i + 1);
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [duration, i]);

  return (
    <div
      className={cn(
        'text-center flex flex-col font-display text-4xl font-bold tracking-[-0.02em] md:text-7xl md:leading-[5rem]',
        className,
      )}
    >
      <span>{displayedText ? displayedText : text}</span>
      <span className="text-lg 2xl:text-3xl md:text-2xl mt-5">{displayedTextSecond ? displayedTextSecond : textSecond}</span>
    </div>
  );
}
