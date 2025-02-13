"use client";

export default function Loading() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-t-primary rounded-full animate-spin"></div>
        <div className="absolute inset-2 border-4 border-primary/20 rounded-full"></div>
        <div className="absolute inset-2 border-4 border-t-primary rounded-full animate-spin" style={{ animationDuration: '0.8s' }}></div>
        <div className="absolute inset-4 border-4 border-primary/20 rounded-full"></div>
        <div className="absolute inset-4 border-4 border-t-primary rounded-full animate-spin" style={{ animationDuration: '0.6s' }}></div>
      </div>
    </div>
  );
}