import { ReactNode } from "react";

interface TerminalWindowProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function TerminalWindow({ title, children, className = "" }: TerminalWindowProps) {
  return (
    <div className={`bg-ubuntu-light rounded-lg shadow-2xl border border-ubuntu-border ${className}`}>
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 rounded-t-lg border-b border-ubuntu-border">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-sm font-ubuntu-mono text-gray-300">{title}</span>
        <div className="w-6"></div>
      </div>
      
      {/* Terminal Content */}
      <div className="p-6">
        {children}
      </div>
    </div>
  );
}
