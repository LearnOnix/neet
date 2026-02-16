import React from 'react';
import { AlertTriangle, X } from 'lucide-react';

/**
 * @param {Function} onCancel - Modal ko band karne ke liye function
 * @param {Function} onConfirm - Quiz exit karne ke liye function
 */
export default function ExitModal({ onCancel, onConfirm }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-hidden">
      {/* 1. Blurred Backdrop Overlay */}
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-md transition-opacity" 
        onClick={onCancel} 
      />
      
      {/* 2. Modal Content Card */}
      <div className="relative bg-white rounded-[2.5rem] p-8 max-w-sm w-full shadow-2xl border border-slate-100 text-center animate-in fade-in zoom-in duration-200">
        
        {/* Close Icon (Top Right) */}
        <button 
          onClick={onCancel}
          className="absolute top-6 right-6 text-slate-300 hover:text-slate-500 transition-colors"
        >
          <X size={24} />
        </button>

        {/* Warning Icon Container */}
        <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
          <AlertTriangle size={40} className="animate-bounce" />
        </div>
        
        {/* Text Content */}
        <h3 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">Wait! Are you sure?</h3>
        <p className="text-slate-500 mb-8 leading-relaxed px-4 text-balance">
          Your progress in this session will not be saved. You'll have to start from the beginning.
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button 
            onClick={onCancel} 
            className="flex-1 py-4 border-2 border-slate-100 rounded-2xl font-bold text-slate-500 hover:bg-slate-50 hover:border-slate-200 transition-all active:scale-95"
          >
            No, Stay
          </button>
          <button 
            onClick={onConfirm} 
            className="flex-1 py-4 bg-red-500 text-white rounded-2xl font-black shadow-lg shadow-red-200 hover:bg-red-600 transition-all active:scale-95"
          >
            Yes, Exit
          </button>
        </div>

        {/* Subtle Footer Note */}
        <p className="mt-6 text-[10px] text-slate-300 font-bold uppercase tracking-widest">
          Test ID: #QT-2026
        </p>
      </div>
    </div>
  );
}