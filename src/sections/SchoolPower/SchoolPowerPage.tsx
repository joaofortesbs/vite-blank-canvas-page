import React from 'react';
import ParticlesCanvas from './components/ParticlesCanvas';
import AIMessageBox from './components/AIMessageBox';
import AvatarCentral from './components/AvatarCentral';

export function SchoolPowerPage() {
  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: 'transparent' }}>
      <ParticlesCanvas>
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-10 pointer-events-auto">
          <AvatarCentral />
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
          <AIMessageBox />
        </div>
      </ParticlesCanvas>
    </div>
  );
}